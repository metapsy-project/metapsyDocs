+++
keywords = ["metadata"]
title = "Metadata"
weight = 2

+++
***

Next to the actual data file, each Metapsy database repository also contains a **folder** in which **metadata** is stored. Metadata items may vary between repositories, but a core selection of files is always included. We focus on these metadata items here.

{{< notice tip >}} An example of a metadata repository folder can be found [here](https://github.com/metapsy-project/data-template/tree/master/metadata). {{</notice>}}

<br>

#### Metadata Items

***

The following standard metadata items are always included in the `metadata` repository folder:

* 📄 [**`authors.json`**](https://github.com/metapsy-project/data-template/blob/master/metadata/authors.json): A [`.json`](https://www.json.org/json-en.html) file containing the authors or owners of the the database, as well as their [ORCID](https://orcid.org/) research ID.
* 📄 [**`last_search.txt`**](https://github.com/metapsy-project/data-template/blob/master/metadata/last_search.txt): A `.txt` file containing the date of the last search update, in the `YYYY-MM-DD` format.
* 📄 [**`number_studies.txt`**](https://github.com/metapsy-project/data-template/blob/master/metadata/number_studies.txt): A `.txt` file containing the number of studies included in the current version of the database.
* 📄 [**`search_flow.json`**](https://github.com/metapsy-project/data-template/blob/master/metadata/search_flow.json). A [`.json`](https://www.json.org/json-en.html) file, containing a JSON object (key-value pairs). Please note that all keys need to be specified with a number; if one of the keys does not apply, set the value to `0`. Under `"full.text.excluded.reasons"`, it is possible to give various reasons for full-text exclusion. Reasons can be adapted freely for each database - the ones in the linked template are just examples.  
* 📄 [**`search_string.txt`**](https://github.com/metapsy-project/data-template/blob/master/metadata/search_string.txt): A `.txt` file showing the employed search string(s).
* 📄 [**`shorthand.txt`**](https://github.com/metapsy-project/data-template/blob/master/metadata/shorthand.txt): A `.txt` file with the `metapsyData` [shorthand](https://docs.metapsy.org/databases/#shorthand) of the database.
* 📄 [**`variable_description.json`**](https://github.com/metapsy-project/data-template/blob/master/metadata/variable_description.json): A [`.json`](https://www.json.org/json-en.html) file, containing a JSON object (key-value pairs). The key represents the variable name, while the value component includes a description or explanation provided for the database variable (e.g. information on the meaning of factor levels).

There are also additional metadata items stored at the **base** of the repository:

* 📄 [**`license`**](https://github.com/metapsy-project/data-template/blob/master/license): A file that contains the license under which the data is shared. This is either the license text itself, or a persistent identifier to the license. By default, all datasets are assigned with a [Open Data Commons Attribution License (ODC-By) v1.0](https://opendatacommons.org/licenses/by/1-0/) license, which allows anyone to share and adapt the data, as well as to create works from the it, provided that the original database is attributed.
* 📄 [**`readme.md`**](https://github.com/metapsy-project/data-template/blob/master/readme.md): A [markdown file](https://www.markdownguide.org/getting-started/) in which the topic and contents of the database are briefly summarized. This readme text will also be displayed on [Zenodo](/release/#zenodo). The readme also contains a badge with a database DOI, which will only be filled in once the database is finally [released](/release/).
   
<br></br>