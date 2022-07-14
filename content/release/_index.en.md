---
title: Data Release
date: 2018-12-29T11:02:05.000+06:00
icon: ti-rocket
description: Documentation of the database release & versioning workflow
type: docs
weight: "4"

---
***

Once uploaded to a Github repository, databases are officially released from the `master`/`main` branch.

![](/uploads/releases.png)

<br>

#### Versioning Convention {#versioning}

***

Annotated releases are published directly via Github. During this process, an ascending version number is created for the release. The version numbering convention used in Metapsy is similar (but not identical) to the [Semantic Versioning 2.0.0](https://semver.org/) standard:

<center>

**`MAJOR.MINOR.PATCH`**

</center>

* The **`MAJOR`** number is used for actual updates of databases (i.e. new searches that lead to new studies being added to the database). Since most databases are updated yearly, this number refers to the last two digits of the year in which the search was conducted (e.g. `22` if the search was conducted in 2022). If multiple searches were conducted in one year, the `MINOR` number is used to differentiate the versions.
* The **`MINOR`** number is used for all changes that affect the data (or metadata) of a database; especially changes that were made while the last study search stays the same. For example, this can be additions to the metadata of a database, or changes and corrections in the extracted meta-analytic data. This part of the version number always starts with `0`, and then goes up from there.
* The **`PATCH`** number is for minor bug fixes or corrections; for example typo corrections in release notes. Patch number changes mean that the database is still "backward-compatible", meaning that values obtained by analyzing this database will still the identical. This part of the version number also always starts with `0`.

Therefore, if a database was updated (via a new search) in 2023, the first release version number would be `23.0.0`. If many additions were made some time after than, the new version number changes to `23.1.0`. If typos are fixed in this version, the new version number is `23.1.1`, and so forth.

<br>

#### Zenodo Integration {#zenodo}

***

Using a Github integration, all releases are automatically indexed in [Zenodo](https://zenodo.org/). Zenodo automatically issues a Digital Object Identifier (DOI) for the latest release. For each database, there are two types of DOIs:

* **Database DOI**. The Zenodo system refers to this as the "concept identifier". It is an overall DOI for all versions of the database that will always resolve to the latest version.
* **Version DOI**. This is a version-specific DOI that allows referencing specific states of the database in the past.

<img src="/uploads/release-flow.png" width="100%" style="border-radius: 5px; border: 3px solid white; margin-top: 30px; margin-bottom: 30px;">

Once indexed in Zenodo, the released database and its metadata is automatically propagated to other components of the Metapsy infrastructure, including the [database documentation entry](https://docs.metapsy.org/databases/), [`metapsyData`](https://data.metapsy.org), and the [Metapsy API](https://docs.metapsy.org/r-packages/api/). This means that the new database version is publicly available to the entire research community. Preferred citations included in each database documentation entry are also automatically updated to reflect the year and version of the new release. This process is partially handled via the [Zenodo REST API](https://developers.zenodo.org/).

<br></br>