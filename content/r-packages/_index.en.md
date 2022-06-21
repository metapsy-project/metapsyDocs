---
title: R Packages
date: 2018-12-28T11:02:05.000+06:00
icon: ti-package
description: Technical Documentation for the Metapsy R Packages
type: docs
weight: "5"

---
***

<img src="/uploads/code-header.jpg" width="100%" style="border-radius: 5px;">

<br>

The Metapsy infrastructure includes **two R packages**. The first package, **`metapsyData`**, allows researchers to directly access all Metapsy databases from an R environment. The second package, **`metapsyTools`**, provides state-of-the-art meta-analysis functions that can be applied to databases without any prior preprocessing steps. Collectively, these packages create an integrated meta-analysis workflow. Using the packages:

* 📥 the latest update or older versions of a database can be **downloaded**;
* [👉](https://emojipedia.org/backhand-index-pointing-right/) databases can be **filtered** to address specific research questions;
* [📊](https://emojipedia.org/bar-chart/) data can be **synthesized** using a variety of meta-analytic models;
* [📈](https://emojipedia.org/chart-increasing/) meta-regression, small-study-effect and subgroup **analysis models** can be applied;
* [📋](https://emojipedia.org/clipboard/) **summary tables** of the results can be generated, which can easily be copied to e.g. MS Word.

![](/uploads/flow-r.png)

<br>

#### `metapsyData`

The `metapsyData` package serves as an API-like interface that allows accessing the Metapsy databases from R. Using the `getData()` function, available databases can be downloaded based on their [shorthand](https://docs.metapsy.org/databases/#shorthand). The function returns an R6 `metapsyDatabase` object, which contains extensive metadata and helper functions along with the actual dataset.

<br>

#### `metapsyTools`

<br>

<br></br>