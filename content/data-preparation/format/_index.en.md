+++
keywords = ["format", "formatting", "data", "harmonization", "standard", "data"]
title = "Data Format"
weight = 1

+++
***

All released Metapsy databases follow a uniform data formatting standard. This includes both the meta-analytic datasets per se, as well as the metadata provided for the data.

Database repositories themselves also follow a predefined folder structure. All database objects (datasets, metadata) are provided in a **machine-readable format** (.csv, .json, .txt). This ensures interoperability with other Metapsy software components (e.g. the automatized [database documentation](/databases), `metapsyData`), as well as external software and programming languages in general.

Collectively, we refer to this set of data formatting and storage rules as the **Metapsy data standard**.

{{< notice tip >}}
An example repository following the Metapsy data standard can be found [here](https://github.com/metapsy-project/data-template).
{{</notice>}}

<br>

#### Overview

***

All Metapsy databases are provided as "rectangular", **wide-format** datasets. This means that each row in a dataset corresponds with the results of one treatment arm comparison (e.g. cognitive-behavioral therapy versus waitlist).

Metapsy databases only contain evidence from randomized-controlled trials (RCTs). Therefore, if an RCT only contained two groups and only one relevant outcome, this means that the trial will only contribute one row to the dataset.

Of course, it is also possible for RCTs included in a database to provide more than one row; for example because the study was a **multi-arm trial**. In a multi-arm trial with $a$ arms, there are $\\frac{a!}{2!(a-2)!}$ unique trial arm comparisons. Therefore, there will be one row for each unique trial arm comparison included in the data.

It is also possible that one trial included more than one relevant outcome. In this case, it is also possible that one trial provides more than one row in the database, with each row representing the results for a different outcome.

<br>

#### Standard Variables

***

There are several variables which are included in every Metapsy database. These variables are required to **uniquely identify** each comparison. They are also necessary to run meta-analyses of the databases later on (e.g. using [`metapsyTools`](https://tools.metapsy.org)). In particular, the variable information below allows to calculate variance-covariance matrices that approximate the dependence structure in the data.

<br>

**I. Study Design Variables**

***

* **`study`**: The study name, formatted as "last name of the first author", "year" (e.g. `"Smith, 2011"`).
* **`condition_arm1`**: Condition in the first trial arm. The condition name is standardized to ensure comparability across trials (e.g. `cbt` for all trial arms that employed cognitive-behavioral psychotherapy).
* **`condition_arm2`**: Condition in the second trial arm. The condition name is standardized to ensure comparability across trials (e.g. `wlc` for all trial arms that employed a waitlist control group).
* **`specification_arm1`**: In multiarm trials, this variable provides a "specification" of the type of treatment used in the first arm. This variable is set to `NA` (missing) when the study was not a multiarm trial. For example, if a multiarm trial employed two types of CBT interventions, face-to-face and Internet-based, this variable would be set to `f2f` and `Internet`, respectively.
* **`specification_arm2`**: In multiarm trials, this variable provides a "specification" of the type of treatment used in the second arm. This variable is set to `NA` (missing) when the study was not a multiarm trial. For example, if a multiarm trial employed two types of control groups, waitlist and placebo, this variable would be set to `wl` and `plac`, respectively.
* **`outcome_type`**: This variable encodes the type of outcome that builds the basis of the comparison, e.g. `response`, `remission` or `deterioration`. This is typically only relevant for dichotomous effect size data, and coded `NA` when effect size data is collected as the mean, standard deviation, and sample size.
* **`instrument`**: This variable describes the instrument through which the relevant outcome was measured.
* **`time`**: The measurement point at which the outcome was obtained (e.g. `post` or `follow-up`).
* **`time_weeks`**: The measurement point at which the outcome was obtained, in weeks after randomization (set to `NA` if this information was not available).
* **`rating`**: This variable encodes if the reported outcome was self-reported (`"self-report"`) or clinician-rated (`"clinician"`).

<br>

**II. Effect Size Data Variables**

***

Each Metapsy database also contains variables in which the (raw or pre-calculated) effect size data is stored. In each row, one of the following variable groups (a) to (d) will be specified, depending on the type of outcome data reported in the paper. The rest of the variable groups will contain `NA` in that row.

<br>

**(a)** Continuous Outcome Data

* **`mean_arm1`**: Mean of the outcome in the first arm at the measured time point.
* **`mean_arm2`**: Mean of the outcome in the second arm at the measured time point.
* **`sd_arm1`**: Standard deviation of the outcome in the first arm at the measured time point.
* **`sd_arm2`**: Standard deviation of the outcome in the second arm at the measured time point.
* **`n_arm1`**: Sample size in the first trial arm.
* **`n_arm2`**: Sample size in the second trial arm.

<br>

**(b)** Dichotomous Outcome Data (Response, Remission, Deterioration, ...)

* **`event_arm1`**: Number of events (responders, remission, deterioration cases) in the first trial arm.
* **`event_arm2`**: Number of events (responders, remission, deterioration cases) in the second trial arm.
* **`totaln_arm1`**: Sample size in the first trial arm.
* **`totaln_arm2`**: Sample size in the second trial arm.

<br>

**(c)** Pre-calculated Hedges' $g$

* **`g`**: The pre-calculated value of Hedges' $g$ (small-sample bias corrected standardized mean difference; [Hedges, 1981](https://journals.sagepub.com/doi/10.3102/10769986006002107)).
* **`g_se`**: Standard error of $g$, viz. $\\sqrt{V_g}$.

<br>

**(d)** Pre-calculated log-risk ratio

* **`log_rr`**: The pre-calculated value of the log-risk ratio $\\log_{e}\\text{RR}$, comparing events in the first arm to events in the second arm.
* **`log_rr_se`**: The standard error of the log-risk ratio $\\log_{e}\\text{RR}$, comparing events in the first arm to events in the second arm.

<br>

**III. `metapsyTools` Variables**

***

The Metapsy database standard includes eight additional variables that all start with a dot (`.`). These are variables created by the [`calculateEffectSizes`](https://tools.metapsy.org/reference/calculateeffectsizes) function in `metapsyTools`. They are included so that meta-analysis functions in `metapsyTools` can be applied "out of the box".

* **`.id`**: Unique identifier for a trial arm comparison/row.
* **`.es`**: Calculated effect size. Either $g$ or $\\log_{e}\\text{RR}$.
* **`.se`**: Standard error of the effect size. Either the standard error of $g$ or $\\log_{e}\\text{RR}$.
* **`.event_arm1`**: Number of events (responders, remission, deterioration cases) in the first trial arm (`NA` if `es` is Hedges' $g$).
* **`.event_arm2`**: Number of events (responders, remission, deterioration cases) in the second trial arm (`NA` if `es` is Hedges' $g$).
* **`.n_event_arm1`**: Number of non-events (non-responders, non-remission, non-deterioration cases) in the first trial arm (`NA` if `es` is Hedges' $g$).
* **`.n_event_arm2`**: Number of non-events (non-responders, non-remission, non-deterioration cases) in the second trial arm (`NA` if `es` is Hedges' $g$).
* **`.es_type`**: The type of calculated effect size; either `"g"` or `"log_rr"`.

<br>

**IV. Additional Variables**

***

Metapsy databases also contain additional variables. These are used, for example, to collect subject-specific information that is not relevant for all indications. Nevertheless, there are several formatting rules that all variables/columns follow:

* **✓** All variable names are in [`snake_case`](https://en.wikipedia.org/wiki/Snake_case?oldformat=true).
* **✓** Variable names _must_ start with a standard letter (`_` is not allowed, `.` is only allowed for `metapsyTools` variables).
* **✓** Variable names cannot contain special characters (like ö, @, è, ğ).
* **✓** Character values contain no leading/trailing whitespaces.
* **✓** Missing values are encoded using `NA`.

<br>