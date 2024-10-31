const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const API_KEY = process.env.ZENODO_API_KEY;  // Access API key from environment variable
    const url = `https://zenodo.org/api/deposit/depositions?access_token=${API_KEY}&all_versions=1&size=10000`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' }),
        };
    }
};