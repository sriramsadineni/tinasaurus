import React from "react";
import { slugify } from "../../util";
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.


const AdmonitionTemplate = {
  name: "Admonition",
  ui: {
    defaultItem: {
      type: "note",
      title: "Note",
    },
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "type",
      label: "Type",
      type: "string",
      options: [
        {
          label: "Note",
          value: "note",
        },
        {
          label: "Tip",
          value: "tip",
        },
        {
          label: "Info",
          value: "info",
        },
        {
          label: "Caution",
          value: "caution",
        },
        {
          label: "Danger",
          value: "danger",
        },
      ],
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
    },
  ],
};

const DetailsTemplate = {
  name: "Details",
  fields: [
    {
      name: "summary",
      label: "Summary",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "children",
      label: "Details",
      type: "rich-text",
    },
  ],
};

const CodeBlockTemplate = {
  name: "CodeBlock",
  label: "Code Block",
  fields: [
    {
      name: "title",
      label: "Filename",
      type: "string",
    },
    {
      name: "language",
      label: "Language",
      type: "string",
    },
    {
      name: "children",
      label: "Code",
      type: "rich-text",
      required: true,
    },
  ],
};

const ScalarApiTemplate = {
  name: "ApiReference",
  label: "Api Reference",
  fields: [
    {
      name: "url",
      label: "Spec Url",
      type: "string",
    },
  ],
};
const TabsTemplate = {
  name: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tabs",
      type: "rich-text",
      templates: [
        {
          name: "TabItem",
          label: "Tab",
          ui: {
            defaultItem: {
              label: "Tab",
              value: "tab",
            },
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
              isTitle: true,
              required: true,
            },
            {
              name: "value",
              type: "string",
              ui: {
                component: ({ input, tinaForm }) => {
                  React.useEffect(() => {
                    input.onChange(slugify(tinaForm.values.label));
                  }, [JSON.stringify(tinaForm.values)]);

                  return (
                    <input
                      type="text"
                      id={input.name}
                      className="hidden"
                      {...input}
                    />
                  );
                },
              },
            },
            {
              name: "children",
              label: "Content",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ],
};
const DocCardListTemplate = {
  name: "DocCardList",
  label: "Doc Card List",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
  ],
};
const FontAwesomeIconTemplate = {
  name: "FontAwesomeIcon",
  label: "Font Awesome Icon",
  fields: [
    {
      name: "icon",
      label: "iIcon",
      type: "string",
    },
    {
      name: "size",
      label: "Size",
      type: "string",
    },
  ],
};

export const MDXTemplates = [
  AdmonitionTemplate,
  DetailsTemplate,
  CodeBlockTemplate,
  TabsTemplate,
  DocCardListTemplate,
  ScalarApiTemplate,
  FontAwesomeIconTemplate
];
