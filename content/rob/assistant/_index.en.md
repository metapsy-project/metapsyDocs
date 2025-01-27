+++
keywords = []
title = "Risk of Bias Assistant"
weight = 1

+++
***

The Risk of Bias Assistant aims to facilitate the rating of studies according to the [**Metapsy adaptation**](/rob/) of [Cochrane's Risk of Bias Tool](https://methods.cochrane.org/bias/resources/rob-2-revised-cochrane-risk-bias-tool-randomized-trials) (Version 2) for psychological intervention trials. Using the assistant, you can address all relevant signaling questions **step by step**. Based on your current ratings, the assistant will **automatically skip** questions that are not required to complete the rating algorithm.

Once all required questions are answered, the assistant automatically performs the domain-specific and overall risk of bias rating. The results can be **downloaded** as an **MS Excel** (.xlsx) file or copied to the **clipboard**.

{{< notice info >}}
The Risk of Bias Assistant can be found at [metapsy.org/rob/assistant](https://www.metapsy.org/rob/assistant/).
{{</notice>}}

<br>

#### User Interface
---

In a full-width browser window, the Risk of Bias Assistant consists of three columns. The **left column** displays the current progress in the rating. The five risk of bias domains (Randomization Process, Intervention Deviations, Missing Data, Outcome Measurement, Selection of Results) serve as subsections.

<br>
<img src="/uploads/rob-assistant.webp" width="500" style="box-shadow: 0px 0px 10px gray; pointer-events: none;">
<br>

By default, these sections are **locked** when a new risk of bias rating is started. As you answer the required signaling questions and/or data fields, new sections are unlocked step by step.

{{< notice info >}}
At the top, the left column also shows the current [**version**](/rob/#versioning) of the Metapsy risk of bias tools on which the assistant is based. Please note that changes or amendments to the tool are possible, meaning that the behavior of the Risk of Bias Assistant may also change slightly over time.
{{</notice>}}

In the top-left area, you can also find the **Cite this tool** button. When clicked, this button displays the current preferred citation for the Metapsy risk of bias tools.

The **center column** shows the currently active signaling question and/or data field for which user input is needed. For example, on the starting page, it is possible (but not required) to enter the **name of the study** and the rated **outcome**.

<br>
<img src="/uploads/rob-assistant-study.webp" width="370" style="box-shadow: 0px 0px 10px gray; pointer-events: none;">
<br>

The **right column** shows an <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle mb-0" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg> **Information Box** with further links. Typically, these links lead to the relevant sections of the [Metapsy Risk of Bias Handbook](https://www.metapsy.org/rob/handbook/) and the [Cochrane Handbook](https://training.cochrane.org/handbook/current) for Systematic Reviews of Interventions.


<br>

#### Rating & Navigation
---

On most pages, users must answer a **signaling question** about the present study. To assist with the judgment, an explanation section is provided for each question, which can be expanded by clicking the **"Explanation"** button.

An answer to the signaling question is provided by selecting one of the **three rating options** in the bottom-right corner: **No/Probably No (PN)**, **No Information (NI)**, or **Yes/Probably Yes (PY)**.

<br>
<img src="/uploads/rating.png" width="270" style="pointer-events: none;" class="user-select-none">
<br>

By default, a signaling question is always coded as **"No/PN"**. Once the correct answer is selected, you can use the blue **"Proceed"** button, hit <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-right-square mb-0" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path>
</svg> (right), or <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left mb-0" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg> (Enter) to go to the next section.

{{< notice info >}}
Depending on your selections, the assistant may **"skip" one or several signaling questions** not required for obtaining a risk of bias rating. If you go back to a signaling question (e.g., using the <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-left-square mb-0" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
</svg> key) and **change your selection**, **new signaling questions** may unlock, requiring answers before you can proceed.
{{</notice>}}

<br>

#### Assessment & Download
---

Once all signaling questions have been answered, the assistant will unlock the **"Assessment"** page, which provides the rating for each domain as well as the overall risk of bias assessment.

<br>
<img src="/uploads/rob-assessment.webp" width="270" style="box-shadow: 0px 0px 10px gray; pointer-events: none;" class="user-select-none">
<br>

By clicking on one of the domains, you can expand the **specific rating for each signaling question**. Using the "<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil mb-0" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg> **Edit**" button, you can return to the original page of the question to revise your rating.

<br>
<img src="/uploads/rob-assessment-2.webp" width="340" style="box-shadow: 0px 0px 10px gray; pointer-events: none;" class="user-select-none">
<br>

At the bottom of the assessment page, you can find three options to **download/copy the generated rating**:

- **Download .xlsx (long)**: Downloads an MS Excel file containing columns for each signaling question, domain rating, and the overall rating.
- **Download .xlsx (short)**: Downloads an abridged version of the MS Excel file, which includes only the domain ratings and overall risk of bias rating.
- **Copy Table**: Copies a table with ratings (long format) to your **clipboard**. This functionality is useful if you plan to rate multiple studies and want to collect all ratings in a single MS Excel file. To collect the data, open an empty MS Excel sheet and paste the copied data into the sheet.

After saving your results, you can click the "**<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square mb-0" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> Rate New Study**" button (top-right) to start a new rating. **Please note that this will delete the current rating.**

<br></br>
