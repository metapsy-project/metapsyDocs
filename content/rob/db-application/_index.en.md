+++
keywords = []
title = "Database Application"
weight = 2
+++
***

The Metapsy risk of bias database application is designed for **developers and maintainers of meta-analytic databases** (particularly those adhering to the [Metapsy data standard](/data-preparation/format/)). 

{{< notice info >}}
The Risk of Bias database application can be found at [metapsy.org/rob/database-app](https://www.metapsy.org/rob/database-app/).
{{</notice>}}

The application allows for two files to be uploaded:

- 📄 **Risk of Bias Ratings**. This is an MS Excel (.xlsx) or .csv file containing risk of bias ratings for one or multiple studies. The file must strictly follow the Metapsy [RoB extraction sheet template](https://www.metapsy.org/assets/files/rob-template.xlsx), but the first five rows should be removed. An example dataset can be found [here](https://www.metapsy.org/assets/files/rob_data.xlsx).

- 📄 **Metapsy Database** (_optional_). A meta-analytic database formatted according to the [Metapsy data standard](/data-preparation/format/) (.xlsx or .csv).

<br>
<img src="/uploads/database-application.webp" width="500" style="box-shadow: 0px 0px 10px gray; pointer-events: none;">
<br>

{{< notice warning >}}
If both a risk of bias rating and a Metapsy database are uploaded, there should be at least one study that appears **in both datasets** (in the **"study"** column). Ensure that study names are written **exactly the same way** in both datasets. Otherwise, the studies cannot be matched.
{{</notice>}}

Once at least one file is uploaded, the "<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic mb-0" viewBox="0 0 16 16">
  <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/>
</svg> **Create Ratings**" button will be activated. Clicking this button triggers the [`createRobRatings`](/rob/r-functions) function internally to generate all domain-specific and overall risk of bias ratings (if applicable).

<br>
<img src="/uploads/popup-database.webp" width="500" style="box-shadow: 0px 0px 10px gray; pointer-events: none;">
<br>

After the process is completed, a **popup window** will appear. In this window, you can download the processed risk of bias rating sheet and, if applicable, the Metapsy database with added risk of bias ratings.

If both a risk of bias rating and a Metapsy database were provided, the window will also **alert you to studies that could _not_ be matched** between the two datasets.

<br></br>
