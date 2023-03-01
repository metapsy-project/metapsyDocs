import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  branch,
  clientId: "6e0a80a7-d1af-447a-8297-3a7953affb1a", // Get this from tina.io
  token: "c7df2adb038f3e5171e020adffe7dcdb1cc37000", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Home",
        name: "home",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "General",
        name: "general",
        path: "content/general",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "number",
            name: "weight",
            label: "weight",
          },
          {
            type: "string",
            name: "keywords",
            label: "keywords",
            list: true,
          },
        ],
      },
      {
        label: "Databases",
        name: "databases",
        path: "content/databases",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "number",
            name: "weight",
            label: "weight",
          },
          {
            type: "string",
            name: "keywords",
            label: "keywords",
            list: true,
          },
        ],
      },
      {
        label: "Data preparation",
        name: "data_preparation",
        path: "content/data-preparation",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "number",
            name: "weight",
            label: "weight",
          },
          {
            type: "string",
            name: "keywords",
            label: "keywords",
            list: true,
          },
        ],
      },
      {
        label: "Data release",
        name: "data_release",
        path: "content/release",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "R packages",
        name: "r_packages",
        path: "content/r-packages",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "number",
            name: "weight",
            label: "weight",
          },
          {
            type: "string",
            name: "keywords",
            label: "keywords",
            list: true,
          },
        ],
      },
      {
        label: "Meta-Analysis Tool",
        name: "meta_analysis_tool",
        path: "content/meta-analysis-tool",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
