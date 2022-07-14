+++
keywords = []
title = "Metapsy API"
weight = 2

+++
***

Databases that have been [released on Github/Zenodo](https://docs.metapsy.org/release/) can automatically be retrieved as [JSON](https://www.json.org/json-en.html) exports using the Metapsy REST Application Programming Interface (API).

Two [GET requests](https://restfulapi.net/http-methods/#get) are defined for the Metapsy API. The `list_data` request allows retrieving a summary of all available databases. The `get_data` request retrieves raw data and metadata of a specific database. It is also possible to access older versions by specifying the `version` parameter.

All response bodies are JSON encoded. No authentication is required to use the API. The API has a rate limit, and we kindly ask users to restrict requests to once per minute.

</br>

**Further Information:**

* 📄 API Documentation ([OAS3](https://swagger.io/specification/)) [↗](https://metapsy.org/api.html#api-docs)
* 🕹️ API Live Demo [↗](https://app.swaggerhub.com/apis-docs/t38169/metapsy/1.0.0)

<br></br>