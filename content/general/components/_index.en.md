+++
keywords = ["about", "overview", "components"]
title = "Components"
weight = 1

+++

Metapsy consists of a collection of software tools and websites. Together, this infrastructure provides an integrated meta-analysis workflow.  
![](/uploads/metapsy-flow.png)

_Components of the Metapsy data flow_.

* **Meta-analytic databases** are maintained and regularly updated by specialized university-based research teams. 
* Updated or newly created databases are then transformed into a consistent format (**Metapsy data format**).
* Each database is then pushed to its own **Github repository**, hosted by the [metapsy-project](https://github.com/metapsy-project) account. 
* Database repositories are then **officially released** using [Zenodo](https://zenodo.org/). At this step, a unique version number and digital object identifier (DOI) is created.
* The [**database documentation**](/databases) hosted on this website is automatically updated with each new release. The documentation entry contains metadata and additional information for each database. 
* The **{metapsyData} R package** allows to access all Metapsy databases directly in an R environment.
* The **{metapsyTools} R package** s

<br></br>