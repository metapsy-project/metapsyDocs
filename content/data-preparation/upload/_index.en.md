+++
keywords = ["pull", "github", "upload"]
title = "Upload"
weight = 3

+++
***

Following the data preparation according to the Metapsy data standard, all files are collected in a Github repository. The standard folder structure can be seen below:

<br>

* 💾 **`data.csv`**
* 📄 **`license`**
* 📁 **`metadata`**
  * 📄 **`authors.json`**
  * 📄 **`last_search.txt`**
  * 📄 **`number_studies.txt`**
  * 📄 **`search_string.txt`**
  * 📄 **`shorthand.txt`**
  * 📄 **`variable_description.json`**

<br>

All database repositories are hosted by the [`metapsy-project`](https://github.com/metapsy-project) organization account. The repository name is also standardized: it is `data-`, followed by the [shorthand](https://docs.metapsy.org/databases/#shorthand) of the database (e.g. `data-depression-psyctr`).

In the "About" section on the Github repository page, one can find a brief description of the database, as well as a link to the specific [database documentation](https://docs.metapsy.org/databases/) entry.

<br>

<img src="/uploads/gh-info.png" width="300px" style="border-radius:5px">

<br>

Once a repository has been created (or updated) this way, an official database [release](https://docs.metapsy.org/release/) is published. This workflow is documented in the next section.

<br></br>