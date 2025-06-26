const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const API_KEY = process.env.ZENODO_API_KEY;
    const ZENODO_URL = `https://zenodo.org/api/deposit/depositions?access_token=${API_KEY}&all_versions=1&size=10000`;

    const BUILD_HOOK_URL = process.env.NETLIFY_BUILD_HOOK;

    try {
        const response = await fetch(ZENODO_URL);
        const data = await response.json();

        // Optional: log or validate data here

        // Trigger a Netlify build to pull new data
        await fetch(BUILD_HOOK_URL, { method: 'POST' });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Zenodo data fetched, Netlify build triggered." })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to refresh data or trigger build." })
        };
    }
};
