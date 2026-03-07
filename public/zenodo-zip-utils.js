// Utility functions for extracting metadata files from Zenodo ZIP files
// This replaces the need to fetch from GitHub raw content

// Cache for extracted ZIP contents
const zipCache = {};

/**
 * Get metadata file from JSON (preferred) or fall back to ZIP extraction
 * @param {string} conceptDOI - The concept DOI
 * @param {string} filePath - Path to file in ZIP (e.g., "metadata/authors.json")
 * @param {string} version - Optional version, if not provided uses latest
 * @returns {Promise<string|Object>} - The file content as text or parsed JSON
 */
async function getMetadataFile(conceptDOI, filePath, version = null) {
  // Wait for data to be loaded
  while (!isDataSaved()) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  const data = JSON.parse(sessionStorage.getItem("apiResponse"));
  
  // Find the record
  let record = null;
  if (version) {
    record = data.find(r => r.conceptdoi === conceptDOI && r.metadata?.version === version);
  } else {
    // Get latest version
    const matchingRecords = data.filter(r => r.conceptdoi === conceptDOI);
    if (matchingRecords.length > 0) {
      record = matchingRecords.sort((a, b) => 
        new Date(b.created) - new Date(a.created)
      )[0];
    }
  }
  
  if (!record) {
    throw new Error(`Record not found for DOI: ${conceptDOI}`);
  }
  
  // Try to get from extracted_metadata first (build-time extraction)
  if (record.extracted_metadata && record.extracted_metadata[filePath] !== undefined) {
    return record.extracted_metadata[filePath];
  }
  
  // Fall back to ZIP extraction (for backwards compatibility or if metadata wasn't extracted)
  return await getFileFromZip(conceptDOI, filePath, version);
}

/**
 * Get the latest version record for a given concept DOI
 */
function getLatestRecord(conceptDOI) {
  if (!isDataSaved()) return null;
  
  const data = JSON.parse(sessionStorage.getItem("apiResponse"));
  let latestRecord = null;
  let latestDate = null;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].conceptdoi === conceptDOI) {
      const created = new Date(data[i].created);
      if (!latestDate || created > latestDate) {
        latestDate = created;
        latestRecord = data[i];
      }
    }
  }
  
  return latestRecord;
}

/**
 * Get a specific version record for a given concept DOI
 */
function getVersionRecord(conceptDOI, version) {
  if (!isDataSaved()) return null;
  
  const data = JSON.parse(sessionStorage.getItem("apiResponse"));
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].conceptdoi === conceptDOI && data[i].metadata.version === version) {
      return data[i];
    }
  }
  
  return null;
}

/**
 * Get the ZIP file download URL from a Zenodo record
 */
function getZipUrl(record) {
  if (!record || !record.files || record.files.length === 0) {
    return null;
  }
  
  const recordId = record.id || record.record_id;
  const filename = record.files[0].filename || record.files[0].key;
  
  // Use the public API endpoint
  return `https://zenodo.org/api/records/${recordId}/files/${encodeURIComponent(filename)}/content`;
}

/**
 * Download and extract a file from a Zenodo ZIP
 * @param {string} conceptDOI - The concept DOI
 * @param {string} filePath - Path to file in ZIP (e.g., "metadata/authors.json")
 * @param {string} version - Optional version, if not provided uses latest
 * @returns {Promise<string>} - The file content as text
 */
async function getFileFromZip(conceptDOI, filePath, version = null) {
  // Check cache first
  const cacheKey = `${conceptDOI}_${version || 'latest'}_${filePath}`;
  if (zipCache[cacheKey]) {
    return zipCache[cacheKey];
  }
  
  // Wait for data to be loaded
  while (!isDataSaved()) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Get the record
  const record = version ? getVersionRecord(conceptDOI, version) : getLatestRecord(conceptDOI);
  if (!record) {
    throw new Error(`Record not found for DOI: ${conceptDOI}`);
  }
  
  // Get ZIP URL
  const zipUrl = getZipUrl(record);
  if (!zipUrl) {
    throw new Error(`No ZIP file found for record`);
  }
  
  // Download ZIP
  const zipResponse = await fetch(zipUrl);
  if (!zipResponse.ok) {
    throw new Error(`Failed to download ZIP: ${zipResponse.status}`);
  }
  
  const zipBlob = await zipResponse.blob();
  const zip = await JSZip.loadAsync(zipBlob);
  
  // Extract the file
  const file = zip.file(filePath);
  if (!file) {
    throw new Error(`File not found in ZIP: ${filePath}`);
  }
  
  const content = await file.async("string");
  
  // Cache the result
  zipCache[cacheKey] = content;
  
  return content;
}

