# Repository of the Metapsy documentation website

This is the code repository of the [docs.metapsy.org](https://luxury-syrniki-6a53eb.netlify.app/) documentation website. 📄


## Using the `forestry.io` CMS

The Metapsy documentation site is built using [Hugo](https://gohugo.io/). We have created a Content Management System (CMS) for the website, which is provided on [forestry.io](https://app.forestry.io/). If you want to have access to the backend, please approach [@cyplessen](www.github.com/cyplessen), [@clara-miguel](www.github.com/clara-miguel), or [@MathiasHarrer](www.github.com/MathiasHarrer).


The forestry CMS provides you with a code-free, visual text editor. Using the CMS, you can change existing content, add new pages and entries, and upload media files. It is also possible to **preview** your changes (please note that this functionality may not work at times). After clicking on **save**, your changes are automatically deployed to this Github repository, and then released to the website shortly after.

### Pre-Defined Elements

Besides the visual editing functionality, there are also several **elements** that you can add to the documentation page via **shortcodes**. Here is an overview of the most important ones:

#### Note Box

```
{{< notice note >}}
This is a simple note.
{{< /notice >}}
```

#### Tip Box

```
{{< notice tip >}}
This is a simple tip.
{{< /notice >}}
```

#### Info Box

```
{{< notice info >}}
This is a simple info.
{{< /notice >}}
```

#### Warning Box

```
{{< notice warning >}}
This is a simple warning.
{{< /notice >}}
```

#### Tabs

```
{{< tabs >}}

{{< tab "first" >}}
This is first tab
{{< /tab >}}

{{< tab "second" >}}
this is second tab
{{< /tab >}}

{{< tab "third" >}}
this is third tab
{{< /tab >}}

{{</ tabs >}}

```

#### R Code Chunk

To create an R code chunk, start with three [backticks](https://www.wikiwand.com/en/Backtick) and `r`, and end your code example with three backticks.

#### Tables

Colons can be used to align columns.

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

There must be at least 3 dashes separating each header cell.
The outer pipes (`|`) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

```
| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
```

### Media Upload

Using the `Media` menu in forestry, you can upload images, PDFs, files etc. After the upload, files are saved in the `upload` folder. So, if you want to use e.g. `sample.pdf` in a documentation entry, you have to use `/uploads/sample.pdf` as the URL. 

Please note that all uploads go directly into the Github repo of this website! So please only upload files that are actually used in the documentation, and make sure that the size is below 50MB.








