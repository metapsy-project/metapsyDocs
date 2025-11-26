---
title: Risk of Bias
icon: ti-check-box
description: Documentation and Guidance on the Metapsy RoB-2 Tool Adaptation
type: docs
weight: "7"

---
***

<img src="/uploads/glass-header.webp" width="100%" style="border-radius: 5px;">

<br>

#### Introduction
---

As part of the Metapsy initiative, we developed a version of the widely used **Cochrane RoB 2 tool** ([Sterne et al., 2019](https://www.bmj.com/content/366/bmj.l4898.short)). Our version is tailored for psychological intervention trials and provides clear, detailed guidance for answering RoB 2's signalling questions in this field. To make it easier to use, we also created digital assistants to help with the rating process. All materials and tools are freely available at [**metapsy.org/rob**](https://www.metapsy.org/rob).

The tool can be applied in two ways: using (1) an **online RoB assistant**, or (2) **Excel** version of the tool.

{{< notice info >}}
The Metapsy RoB guidance and 24-item operationalization **do not modify or replace** Cochrane’s official RoB 2 tool. They serve as independent, supplementary implementation support and must always be used alongside the official Cochrane documentation.
{{</notice>}}

<br>

##### 🤖 Online RoB Tool

The most user-friendly option is the [**online RoB assistant**](https://www.metapsy.org/rob/assistant/), in which each of the items can be directly answered as an online questionnaire. Brief guidance is provided with each item, and extended guideline can be found in the [online handbook](#online-handbook) or in the current PDF version of the handbook. 

With this assistant, reviewers can go through all relevant signalling questions step by step. Based on their answers, the assistant automatically skips any questions that aren't needed for the rating. Once all questions are answered, domain scores and overall scores are calculated instantly by the built-in algorithm. The results can then be downloaded in various formats.

<br>

##### 📄 Excel Version

If you prefer using **Excel**, you can rate studies with the [**rob-template**](https://www.metapsy.org/assets/files/rob-template.xlsx). This version is more flexible than the online RoB assistant and can be quicker for experienced users.

One key benefit is that some items (like unbalanced clinical severity) in the Excel can be calculated automatically from a [Metapsy database](/data-preparation/), _if_ certain data has already been collected. This includes the baseline means and standard deviations, the type of rating (clinician or self-report), the number of participants and dropouts in each group, and the randomization ratio. To link this data correctly, the extraction sheet of the database should follow the [Metapsy data standard](https://docs.metapsy.org/data-preparation/format/) (see the “Metapsy database” [example](https://www.metapsy.org/assets/files/data.xlsx)).

You can then use the [**Database Application**](https://www.metapsy.org/rob/database-app/) or the [**`createRobRatings`**](https://tools.metapsy.org/reference/createrobratings) function from the metapsyTools R package to populate some of the domain ratings in the RoB template, and generate overall RoB ratings.

The Excel tool also works with other useful functions in metapsyTools. The [`checkRobDiscrepancies`](https://tools.metapsy.org/reference/checkrobdiscrepancies), for example, can be used to check for differences between reviewers and provides Cohen’s kappa as a measure of agreement in the end.


<br>

#### Online Handbook
---

On [metapsy.org/rob/handbook](https://www.metapsy.org/rob/handbook), you can find an **online handbook**. This handbook provides further explanations on how to answer the signaling questions and includes all [algorithms](https://www.metapsy.org/rob/handbook/rating) used to obtain the ratings. The handbook is always based on the latest version of the **guidance document** (see ["Versioning"](#versioning)).


<br>

#### Versioning
---

The key document for the Metapsy risk of bias tool is the PDF **guidance document**, which is assigned a **new version** when changes are made. Updates to the guidance document will also be reflected in the [Risk of Bias Assistant](/rob/assistant/), the [Database Application](/rob/db-application/), [R functions](/rob/r-functions/), and the [online handbook](#online-handbook).

The latest version will be displayed at [metapsy.org/rob](https://www.metapsy.org/rob/) in the <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fingerprint mb-0" viewBox="0 0 16 16">
  <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"/>
  <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329"/>
  <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"/>
  <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456"/>
  <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49"/>
</svg> **fingerprint** widget, like this:


<img src="/uploads/fingerprint.png" width="100" style="pointer-events: none;">

By clicking on the fingerprint button, you can copy a **permalink** to the current version to your clipboard (e.g., [metapsy.org/rob/#v1.0-0](https://www.metapsy.org/rob/#v1.0-0) for version 1.0-0). This permalink ensures rating decisions can be reproduced even when new versions are released.


<br>

#### Downloads
---

- 📄 [Guidance Document](https://www.metapsy.org/rob/#:~:text=%C2%A0%C2%B7-,Guidance%20Document,-%C2%B7%C2%A0%20Cite) (latest version; click on <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf mb-0" viewBox="0 0 16 16">
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
  <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
</svg> symbol to open).
- 📄 [Extraction Sheet Template](https://www.metapsy.org/assets/files/rob-template.xlsx)
- 📄 [Completed Extraction Sheet (Example)](https://www.metapsy.org/assets/files/rob_data.xlsx) <sup><a href="#fn-1">1</a></sup>


<div style="font-size: 14px;">
<sup id="fn-1">1</sup> <i>The first five rows of this sheet have already been removed for use in the <a href="/rob/db-application">database application</a>.</i> 
</div>

<br></br>