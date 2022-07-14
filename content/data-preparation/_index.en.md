---
title: Data Preparation
date: 2018-12-29T11:02:05.000+06:00
icon: ti-layout-grid4
description: Formatting requirements for databases
type: docs
weight: "3"

---
***

<img src="/uploads/preparation.jpg" width="100%" style="border-radius: 5px;">

<br>

This documentation section describes how the databases included in Metapsy are prepared.

Before being released, all data is converted into a consistent, [**standardized format**](https://docs.metapsy.org/data-preparation/format/). This format ensures that data is compatible with other components of the Metapsy infrastructure.

All released databases live in their own online [Github](https://github.com/) repository. These repositories are hosted by the [`metapsy-project`](https://github.com/metapsy-project) organization account. All database repository names start with `data-`, followed by the [shorthand](https://docs.metapsy.org/databases/#shorthand) of the database (e.g. `data-depression-psyctr`).

All Metapsy databases hosted on Github follow the same folder structure. In particular, a [**metadata**](https://docs.metapsy.org/data-preparation/metadata/) folder is included in each repository. This folder contains additional information associated with the dataset (e.g. the search date, the number of studies, or a variable description).

After a new database version has been uploaded to Github, data validators are used to check if the format conforms to the standard required by other components of the Metapsy infrastructure (e.g. `metapsyData` and `metapsyTools`).

Finalized database repositories are then officially [**released**](/release) via the Github Zenodo integration.

<br></br>