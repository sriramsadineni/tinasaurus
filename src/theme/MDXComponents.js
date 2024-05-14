import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import ApiReference from './../components/api-reference';
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.

import { fas } from '@fortawesome/pro-solid-svg-icons'; // Import all solid icons.
import { fal } from '@fortawesome/pro-light-svg-icons'; // Import all solid icons.
import { far } from '@fortawesome/pro-regular-svg-icons'; // Import all solid icons.
import { fat } from '@fortawesome/pro-thin-svg-icons'; // Import all solid icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default {
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
  ApiReference : ApiReference,
  FontAwesomeIcon:FontAwesomeIcon
};
library.add(fal, fas,far,fat); // Add all icons to the library so you can use them without importing them individually.
