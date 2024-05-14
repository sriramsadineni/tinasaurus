import React from "react";
import { defineConfig, wrapFieldsWithMeta } from 'tinacms'
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const FeaturesBlockTemplate = {
  name: "features",
  label: "Features",
  fields: [
    {
      name: "items",
      label: "Features",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.title,
        }),
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "icon",
          label: "Icon",
          type: 'string',
        },
        {
          name: "size",
          label: "icon Size",
          type: 'string',
        },
      ],
    },
  ],
};
