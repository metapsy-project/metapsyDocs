---
title: Meta-Analysis Tool
date: 2018-12-28T11:02:05.000+06:00
icon: ti-bar-chart-alt
description: Technical Documentation for the Online Meta-Analysis Tool
type: docs
weight: "6"

---
***

<img src="/uploads/ma-tool.jpg" width="100%" style="border-radius: 5px;">

The Metapsy meta-analysis tool has been developed to make the available datasets more accessible for various stakeholders, without requiring any programming skills. These graphical user interfaces allow to analyze existing versions of datasets using state-of-the-art meta-analytic methods. An overview of available tools is provided on the [Metapsy website](https://www.metapsy.org/database/). 

<br>

#### Starting Page
***

{{< notice info >}} A technical description of the Metapsy [online meta-analysis tool](https://www.metapsy.org/#databases) can be found in the "About" section of each application. We are currently working on a **fully revised, new version** of the meta-analysis tool. This new version will be documented on this page. {{</notice>}}


#### Technical Stack
***

The online meta-analysis tools are hosted on the Linux server maintained by the Metapsy project ([metapsy.dev](https://www.metapsy.dev)). This server runs on Ubuntu 22.04 x64. It uses an installation of R (version 4.2.2), Python (version 3.10.12), shiny-server (Posit, 2023) and [TeX Live](https://tug.org/texlive/). 

<br></br>