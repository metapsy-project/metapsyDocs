// update-zenodo.js
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const API_KEY = process.env.ZENODO_API_KEY;
const url = `https://zenodo.org/api/deposit/depositions?access_token=${API_KEY}&all_versions=1&size=10000`;

async function fetchAndSave() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync('static/data/zenodo.json', JSON.stringify(data, null, 2));
    console.log('Zenodo data saved to static/data/zenodo.json');
  } catch (err) {
    console.error('Error fetching Zenodo data:', err);
  }
}

fetchAndSave();
