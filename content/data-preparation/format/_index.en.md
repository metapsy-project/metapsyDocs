---
keywords:
  - format
  - formatting
  - data
  - harmonization
  - standard
  - data
title: Data Format
weight: 1
---
- - -

All released Metapsy databases follow a uniform data formatting standard. This includes both the meta-analytic datasets per se, as well as the meta-data provided for the data. Database repositories themselves also follow a predefined folder structure.

All database objects (datasets, metadata) are provided in a **machine-readable format** (.csv, .json, .txt). This ensures interoperability with other Metapsy software components (e.g. the automatized [database documentation](/databases), [`metapsyData`](https://data.metapsy.org/), the [Metapsy API](https://docs.metapsy.org/r-packages/api/)), as well as external software and programming languages in general.

Collectively, we refer to this set of data formatting and storage rules as the **Metapsy data standard**.

{{< notice tip >}}
An example repository following the Metapsy data standard can be found [here](https://github.com/metapsy-project/data-template).
{{</notice>}}

<br>

#### Overview

- - -

As part of the release, larger databases are typically first partitioned into smaller **"scientific use files"** (SUFs) that concentrate on a particular research field (e.g., all depression trials that compared psychotherapy with control groups). These SUFs are always provided as "rectangular", **wide-format** datasets.

This means that each row in a dataset corresponds with the results of one trial arm comparison (e.g. cognitive-behavioral therapy versus waitlist) in one study.

Metapsy databases only contain evidence from randomized-controlled trials (RCTs). If an RCT only contained two groups and only one relevant outcome, this means that the trial will only contribute one row to the dataset.

It is also possible for RCTs included in a database to provide more than one row; for example because the study was a **multi-arm trial**. In a multi-arm trial with $a$ arms, there are $\frac{a!}{2!(a-2)!}$ unique trial arm comparisons. Therefore, typically, there will be one row for each unique trial arm comparison included in the data.

It is also possible that one trial included more than one relevant outcome. In this case, one trial also provides more than one row in the database, with each row representing the results for a different outcome.

<br>

#### Standard Variables

- - -

There are several variables which are included in every Metapsy database. These variables are required, for example, to **uniquely identify** each comparison. They are also necessary to run meta-analyses of the databases later on (e.g. using [`metapsyTools`](https://tools.metapsy.org); in particular, the variable information below allows to calculate variance-covariance matrices that approximate the dependence structure in the data).

We differentiate between standard (I.) study design, (II.) effect size data, and (III.) `metapsyTools` variables. Apart from these standard variables, additional (often database-specific) variables are included.

<br>

**I. Study Design Variables** 📝

- - -

* **`study`**: The study name, formatted as "last name of the first author", "year" (e.g. `"Smith, 2011"`).
* **`condition_arm1`**: Condition in the first trial arm. The condition name is standardized to ensure comparability across trials (e.g. `cbt` for all trial arms that employed cognitive-behavioral psychotherapy).
* **`condition_arm2`**: Condition in the second trial arm. The condition name is standardized to ensure comparability across trials (e.g. `wlc` for all trial arms that employed a waitlist control group).
* **`multi_arm1`**: In multiarm trials, this variable provides a specification of the type of treatment used in the first arm. This variable is set to `NA` (missing) when the study was not a multiarm trial. For example, if a multiarm trial employed two types of CBT interventions, face-to-face and Internet-based, this variable would be set to `f2f` and `Internet`, respectively.
* **`multi_arm2`**: In multiarm trials, this variable provides a specification of the type of treatment used in the second arm. This variable is set to `NA` (missing) when the study was not a multiarm trial. For example, if a multiarm trial employed two types of control groups, waitlist and placebo, this variable would be set to `wl` and `plac`, respectively. Typically, multiarm trials employ two or more active treatments (e.g. CBT and problem-solving therapy), which are compared to the same control group (e.g. a waitlist). This means that values in `multi_arm2` do not differ (e.g. they are always `wl` for this specific multiarm trial); nevertheless, the variable should be specified in the dataset.
* **`outcome_type`**: This variable encodes the type of outcome that builds the basis of the comparison, e.g. `response`, `remission` or `deterioration`. This is variable is particularly relevant for dichotomous effect size data, because it indicates what the event counts refer to. The `msd` factor level is typically used for outcomes expressed in means and standard deviations.
* **`instrument`**: This variable describes the instrument through which the relevant outcome was measured.
* **`time`**: The measurement point at which the outcome was obtained (e.g. `post` or `follow-up`).
* **`time_weeks`**: The measurement point at which the outcome was obtained, in weeks after randomization (set to `NA` if this information was not available).
* **`rating`**: This variable encodes if the measured outcome was self-reported (`"self-report"`) or clinician-rated (`"clinician"`).

<br>

**II. Effect Size Data Variables** 📐

- - -

Each Metapsy database also contains variables in which the (raw or pre-calculated) effect size data is stored. In each row, one of the following variable groups (a) to (e) is specified, depending on the type of outcome data reported in the paper. The rest of the variable groups will contain `NA` in that row.

<br>

**(a)** Continuous Outcome Data

* **`mean_arm1`**: Mean of the outcome in the first arm at the measured time point.
* **`mean_arm2`**: Mean of the outcome in the second arm at the measured time point.
* **`sd_arm1`**: Standard deviation of the outcome in the first arm at the measured time point.
* **`sd_arm2`**: Standard deviation of the outcome in the second arm at the measured time point.
* **`n_arm1`**: Sample size in the first trial arm.
* **`n_arm2`**: Sample size in the second trial arm.

<br>

**(b)** Within-Group Change Data

* **`mean_change_arm1`**: Mean score change between baseline and the  measured time point in the first arm.
* **`mean_change_arm2`**: Mean score change between baseline and the  measured time point in the second arm.
* **`sd_change_arm1`**: Standard deviation of the mean change in the first arm.
* **`sd_change_arm2`**: Standard deviation of the mean change in the second arm.
* **`n_change_arm1`**: Sample size in the first trial arm.
* **`n_change_arm2`**: Sample size in the second trial arm.

<br>

**(c)** Dichotomous Outcome Data (Response, Remission, Deterioration, ...)

* **`event_arm1`**: Number of events (responders, remission, deterioration cases) in the first trial arm.
* **`event_arm2`**: Number of events (responders, remission, deterioration cases) in the second trial arm.
* **`totaln_arm1`**: Sample size in the first trial arm.
* **`totaln_arm2`**: Sample size in the second trial arm.

<br>

**(d)** Pre-calculated Hedges' $g$

* **`precalc_g`**: The pre-calculated value of Hedges' $g$ (small-sample bias corrected standardized mean difference; [Hedges, 1981](https://journals.sagepub.com/doi/10.3102/10769986006002107)).
* **`precalc_g_se`**: Standard error of $g$, viz. $\sqrt{V_g}$.

<br>

**(e)** Pre-calculated log-risk ratio

* **`precalc_log_rr`**: The pre-calculated value of the log-risk ratio $\log_{e}\text{RR}$, comparing events in the first arm to events in the second arm.
* **`precalc_log_rr_se`**: The standard error of the log-risk ratio $\log_{e}\text{RR}$, comparing events in the first arm to events in the second arm.

<br>

**III. `metapsyTools` Variables** 📦

- - -

The Metapsy database standard includes nine additional variables that all start with a dot (`.`). These are variables created by the [`calculateEffectSizes`](https://tools.metapsy.org/reference/calculateeffectsizes) function in `metapsyTools`. They are included so that meta-analysis functions in `metapsyTools` can be applied "out of the box".

* **`.id`**: Unique identifier for a trial arm comparison/row.
* **`.g`**: Calculated effect size (Hedges' $g$).
* **`.g_se`**: Standard error of Hedges' $g$.
* **`.log_rr`**: Calculated effect size ($\log_{e}\text{RR}$).
* **`.log_rr_se`**: Standard error of $\log_{e}\text{RR}$.
* **`.event_arm1`**: Number of events (responders, remission, deterioration cases) in the first trial arm.
* **`.event_arm2`**: Number of events (responders, remission, deterioration cases) in the second trial arm.
* **`.totaln_arm1`**: Total sample size in the first trial arm.
* **`.totaln_arm2`**: Total sample size in the second trial arm.

<br>

**IV. Additional Variables** [🎒](https://emojipedia.org/backpack/)

- - -

Metapsy databases also contain additional variables. These are used, for example, to collect subject-specific information that is not relevant for all indications. Nevertheless, there are several formatting rules that all variables/columns follow:

* <strong style="color: green;">✓</strong> All variable names are in [`snake_case`](https://en.wikipedia.org/wiki/Snake_case?oldformat=true).
* <strong style="color: green;">✓</strong> Variable names start with a standard letter (`_` is not allowed, `.` is only allowed for `metapsyTools` variables).
* <strong style="color: green;">✓</strong> Variable names do not contain special characters (like ö, @, è, ğ).
* <strong style="color: green;">✓</strong> Semicolons (`;`) are not used; neither as variable names nor as cell content.
* <strong style="color: green;">✓</strong> Character values contain no leading/trailing whitespaces.
* <strong style="color: green;">✓</strong> Missing values are encoded using `NA`.

<br>

##### Data File Type

- - -

Finalized datasets are saved as **comma-separated values** (.csv) files. Importantly, in our case, .csv files *always* use a **semicolon** as a separator (to allow for commas in text fields). Decimals are separated using commas (e.g. `1,02` instead of `1.02`). This is typically how MS Excel exports sheets as .csv by default (with "continental European" settings). 
A﻿nother method to create the .csv files in the correct format is to export the dataset from R using the  <tt>[write.csv2](https://stat.ethz.ch/R-manual/R-devel/library/utils/html/write.table.html)</tt> function.

An example can be seen below.

<img src="/uploads/carbon.svg" alt="codechunk" width="550" >

<br>