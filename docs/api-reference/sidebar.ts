import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "pet",
      link: {
        type: "doc",
        id: "api-reference/swagger-petstore-openapi-3-0",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-reference/update-pet",
          label: "Update an existing pet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/add-pet",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/find-pets-by-status",
          label: "Finds Pets by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/find-pets-by-tags",
          label: "Finds Pets by tags",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-pet-by-id",
          label: "Find pet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-pet-with-form",
          label: "Updates a pet in the store with form data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/delete-pet",
          label: "Deletes a pet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/upload-file",
          label: "uploads an image",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "store",
      link: {
        type: "doc",
        id: "api-reference/swagger-petstore-openapi-3-0",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-reference/get-inventory",
          label: "Returns pet inventories by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/place-order",
          label: "Place an order for a pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-order-by-id",
          label: "Find purchase order by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/delete-order",
          label: "Delete purchase order by ID",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      link: {
        type: "doc",
        id: "api-reference/swagger-petstore-openapi-3-0",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-reference/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/create-users-with-list-input",
          label: "Creates list of users with given input array",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/login-user",
          label: "Logs user into the system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/logout-user",
          label: "Logs out current logged in user session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-user",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
