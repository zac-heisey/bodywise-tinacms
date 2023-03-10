import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        label: "Team Members",
        name: "team_members",
        path: "_team-members",
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
            name: "name",
            label: "Name",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
        ],
      },
      {
        label: "Locations",
        name: "locations",
        path: "_locations",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "fax",
            label: "Fax Number",
          },
          {
            type: "string",
            name: "address_1",
            label: "Address Line 1",
          },
          {
            type: "string",
            name: "address_2",
            label: "Address Line 2",
          },
          {
            type: "string",
            name: "city_state_zip",
            label: "City, State, and Zip Code",
          },
          {
            type: "string",
            name: "google_maps_embed",
            label: "Google Maps Embed Link",
          }
        ],
      },
    ],
  },
});
