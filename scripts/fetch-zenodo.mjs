// node scripts/fetch-zenodo.mjs
import fs from "node:fs/promises";
import path from "node:path";
import AdmZip from "adm-zip";
import "dotenv/config";

// Zenodo API key must be set in env (you said it's already added)
const { ZENODO_API_KEY } = process.env;
if (!ZENODO_API_KEY) {
  console.error("Missing ZENODO_API_KEY in environment");
  process.exit(1);
}

// Request: adjust params if you don't need all_versions/size
const url = `https://zenodo.org/api/deposit/depositions?access_token=${ZENODO_API_KEY}&all_versions=1&size=10000`;

// Output goes to Hugo's 'static' dir so it becomes /data/zenodo.json
const OUT = path.resolve("static/data/zenodo.json");

// Metadata files to extract from ZIP
const METADATA_FILES = [
  "metadata/authors.json",
  "metadata/authors.txt",
  "metadata/shorthand.txt",
  "metadata/number_studies.txt",
  "metadata/last_search.txt",
  "metadata/search_string.txt",
  "metadata/search_flow.json",
  "metadata/variable_description.json",
  "metadata/references.json",
  "metadata/registration.txt"
];

/**
 * Extract metadata files from a Zenodo ZIP file
 * @param {Object} record - Zenodo record object
 * @returns {Object} - Object with extracted metadata files
 */
async function extractMetadataFromZip(record) {
  const metadata = {};
  
  // Check if record has files
  if (!record.files || record.files.length === 0) {
    return metadata;
  }
  
  // Find ZIP file (usually the first file)
  const zipFile = record.files.find(f => 
    f.filename?.endsWith('.zip') || f.key?.endsWith('.zip')
  ) || record.files[0];
  
  if (!zipFile) {
    return metadata;
  }
  
  try {
    // Get download URL
    const recordId = record.id || record.record_id;
    const filename = zipFile.filename || zipFile.key;
    
    // Use filename-based URL (works for published records)
    const downloadUrl = `https://zenodo.org/api/records/${recordId}/files/${encodeURIComponent(filename)}/content`;
    
    // Download ZIP file
    const zipResponse = await fetch(downloadUrl);
    if (!zipResponse.ok) {
      console.warn(`Failed to download ZIP for record ${recordId}: ${zipResponse.status}`);
      return metadata;
    }
    
    const zipBuffer = await zipResponse.arrayBuffer();
    const zip = new AdmZip(Buffer.from(zipBuffer));
    
    // Extract each metadata file
    // The ZIP may have a root directory, so we need to search for files
    // that match the metadata path pattern (e.g., */metadata/authors.json)
    const entries = zip.getEntries();
    let foundFiles = 0;
    
    for (const filePath of METADATA_FILES) {
      try {
        // Try direct path first
        let entry = zip.getEntry(filePath);
        
        // If not found, search for files ending with the metadata path
        // (handles cases like "project-name/metadata/authors.json")
        if (!entry) {
          const fileName = filePath.split('/').pop(); // e.g., "authors.json"
          const metadataDir = filePath.split('/').slice(0, -1).join('/'); // e.g., "metadata"
          
          // Find entry that ends with the metadata path
          entry = entries.find(e => {
            const name = e.entryName;
            return name.endsWith(filePath) || 
                   (name.includes(`/${metadataDir}/`) && name.endsWith(`/${fileName}`));
          });
        }
        
        if (entry && !entry.isDirectory) {
          let content = entry.getData().toString('utf-8');
          foundFiles++;
          
          // Parse JSON files, keep text files as strings
          if (filePath.endsWith('.json')) {
            try {
              metadata[filePath] = JSON.parse(content);
            } catch (e) {
              // If JSON parsing fails, store as string
              // Strip newlines for all fields except search_string.txt
              if (filePath !== 'metadata/search_string.txt') {
                content = content.replace(/\n/g, '');
              }
              metadata[filePath] = content;
            }
          } else {
            // Strip newlines for all text fields except search_string.txt
            if (filePath !== 'metadata/search_string.txt') {
              content = content.replace(/\n/g, '');
            }
            metadata[filePath] = content;
          }
        }
      } catch (err) {
        // File not found or error extracting - skip silently
      }
    }
    
    if (foundFiles === 0) {
      console.warn(`  No metadata files found in ZIP for record ${recordId}`);
    }
  } catch (err) {
    console.warn(`Error extracting metadata from ZIP for record ${record.id || record.record_id}: ${err.message}`);
  }
  
  return metadata;
}

const main = async () => {
  // Load existing records if file exists
  let existingRecords = new Map();
  try {
    const existingData = await fs.readFile(OUT, "utf-8");
    const existing = JSON.parse(existingData);
    // Create a map by record ID for quick lookup
    for (const record of existing) {
      const recordId = record.id || record.record_id;
      if (recordId) {
        existingRecords.set(recordId, record);
      }
    }
    console.log(`Loaded ${existingRecords.size} existing records from ${OUT}`);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.warn(`Warning: Could not read existing file: ${err.message}`);
    }
    console.log("No existing records found, starting fresh.");
  }
  
  console.log("Fetching Zenodo records...");
  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Zenodo fetch failed: ${res.status} ${t}`);
  }
  const data = await res.json();
  
  console.log(`Fetched ${data.length} records from API. Checking for new/updated records...`);
  
  // Track statistics
  let newRecords = 0;
  let updatedRecords = 0;
  let skippedRecords = 0;
  
  // Process each record
  let processed = 0;
  for (const record of data) {
    processed++;
    const recordId = record.id || record.record_id;
    const existingRecord = existingRecords.get(recordId);
    
    // Check if record is new, has been modified, or is missing extracted_metadata
    const isNew = !existingRecord;
    const isModified = existingRecord && 
      existingRecord.modified !== record.modified;
    const missingMetadata = existingRecord && 
      (!existingRecord.extracted_metadata || Object.keys(existingRecord.extracted_metadata).length === 0);
    
    // Check if existing metadata has newlines that should be stripped (all fields except search_string.txt)
    const hasNewlinesToStrip = existingRecord && existingRecord.extracted_metadata && 
      Object.keys(existingRecord.extracted_metadata).some(key => {
        if (key === 'metadata/search_string.txt') return false; // Skip search_string.txt
        const value = existingRecord.extracted_metadata[key];
        return typeof value === 'string' && value.includes('\n');
      });
    
    if (isNew || isModified || missingMetadata || hasNewlinesToStrip) {
      if (processed % 10 === 0) {
        console.log(`Processing record ${processed}/${data.length}...`);
      }
      
      // Extract metadata and add to record
      const extractedMetadata = await extractMetadataFromZip(record);
      if (Object.keys(extractedMetadata).length > 0) {
        record.extracted_metadata = extractedMetadata;
      }
      
      if (isNew) {
        newRecords++;
      } else {
        updatedRecords++;
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } else {
      // Reuse existing extracted_metadata, but keep API record data (in case other fields changed)
      if (existingRecord.extracted_metadata) {
        record.extracted_metadata = existingRecord.extracted_metadata;
      }
      skippedRecords++;
    }
  }
  
  console.log(`\nProcessing complete:`);
  console.log(`  - New records: ${newRecords}`);
  console.log(`  - Updated records: ${updatedRecords}`);
  console.log(`  - Skipped (unchanged): ${skippedRecords}`);
  console.log(`  - Total with extracted metadata: ${data.filter(r => r.extracted_metadata).length}`);
  
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Wrote ${OUT} with ${data.length} items.`);
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
