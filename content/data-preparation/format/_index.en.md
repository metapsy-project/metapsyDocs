+++
keywords = ["format", "formatting", "data", "harmonization", "standard", "data"]
title = "Data Format"
weight = 1

+++
All released Metapsy databases follow a uniform data formatting standard. This includes both the meta-analytic datasets per se, as well as the metadata provided for the data.

Database repositories themselves also follow a predefined folder structure. All database objects (datasets, metadata) are provided in a **machine-readable format** (.csv, .json, .txt). This ensures interoperability with other Metapsy software components (e.g. the automatized [database documentation](/databases), {metapsyData}), as well as external software and programming languages in general.

Collectively, we refer to this set of data formatting and storage rules as the **Metapsy data standard**.

<br>

#### Overview

All Metapsy databases are provided as "rectangular", **wide-format** datasets. This means that each row in a dataset corresponds with the results of one treatment arm comparison (e.g. cognitive-behavioral therapy versus waitlist). 

Metapsy databases only contain evidence from randomized-controlled trials (RCTs). Therefore, if an RCT only contained two groups and only one relevant outcome, this means that the trial will only contribute one row to the dataset.

Of course, it is also possible for RCTs included in a database to provide more than one row; for example because the study was a **multi-arm trial**, or because 

<br>

#### Required Variables

| Variable Name | Description |
| --- | --- | 
| <code>study</code>      | The study name, formatted as "Last Name of the first author", "year" (e.g. "Smith, 2011"). | 
| col 2 is      |   centered    | 
| zebra stripes |   are neat    |