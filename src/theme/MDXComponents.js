import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import ApiReference from './../components/api-reference';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

export default {
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
  ApiReference : ApiReference,
  FAIcon:FontAwesomeIcon
};
