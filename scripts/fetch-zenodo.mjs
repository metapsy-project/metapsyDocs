// node scripts/fetch-zenodo.mjs
import fs from "node:fs/promises";
import path from "node:path";
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

const main = async () => {
  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Zenodo fetch failed: ${res.status} ${t}`);
  }
  const data = await res.json();

  // (Optional) Trim to only fields you use to keep the file small:
  // const data = (await res.json()).map(d => ({ id: d.id, title: d.title, ... }));

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(data), "utf-8");
  console.log(`Wrote ${OUT} with ${Array.isArray(data) ? data.length : 0} items.`);
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
