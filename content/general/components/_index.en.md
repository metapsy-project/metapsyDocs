+++
keywords = ["about", "overview", "components"]
title = "Components"
weight = 1

+++
***

Metapsy consists of a collection of software tools and websites. Together, this infrastructure provides an integrated meta-analysis workflow.

<img src="/uploads/metapsy-flow.png" width="100%" style="border-radius: 5px; border: 3px solid white; margin-top: 30px; margin-bottom: 30px;">

**Components of the Metapsy data flow:**

* Meta-analytic databases are maintained and regularly updated by specialized university-based research teams.
* Updated or newly created databases are then transformed into a consistent format ([Metapsy data format](https://docs.metapsy.org/data-preparation/format/)).
* Each database is then pushed to its own Github repository, hosted by the [metapsy-project](https://github.com/metapsy-project "metapsy-project") account.
* Database repositories are then officially released using [Zenodo](https://zenodo.org/). At this step, a unique version number and digital object identifier (DOI) is created.
* The [database documentation](/databases) hosted on this website is automatically updated with each new release. The documentation entry contains metadata and additional information for each database.
* The [`metapsyData` R package](https://data.metapsy.org) allows to access all Metapsy databases directly in an R environment. JSON-encoded exports can be retrieved using the [Metapsy API](https://docs.metapsy.org/r-packages/api/).
* The [`metapsyTools` R package](https://tools.metapsy.org) provides helper functions that allow to conveniently run state-of-the-art meta-analyses using Metapsy data, or data prepared in the same format.
* The released databases can also be analyzed using a user-friendly [meta-analysis tool](https://www.metapsy.org). The application provides a graphical user interface that allows running meta-analyses of the data online.

<br></br>