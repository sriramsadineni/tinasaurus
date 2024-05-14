const docusaurusData = require("./config/docusaurus/index.json");
import {themes as prismThemes} from 'prism-react-renderer';
import type { ScalarOptions } from '@scalar/docusaurus'
import type * as Preset from '@docusaurus/preset-classic';


const getDocId = (doc) => {
  return doc
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(1)
    .join("/");
};

const getPageRoute = (page) => {
  return page
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(2)
    .join("/");
};

const getPath = (page) => {
  return page.replace(/\.mdx?$/, "");
};

const formatFooterItem = (item) => {
  if (item.title) {
    return {
      title: item.title,
      items: item.items.map((subItem) => {
        return formatFooterItem(subItem);
      }),
    };
  } else {
    let linkObject:any = {
      label: item.label,
    };

    if (item.to) {
      linkObject.to = getPath(item.to);
    } else if (item.href) {
      linkObject.href = item.href;
    } else {
      linkObject.to = "/blog";
    }

    return linkObject;
  }
};

const formatNavbarItem = (item, subnav = false) => {

  let navItem:any = {
    label: item.label,
  };

  if (!subnav) {
    navItem.position = item.position;
  }

  if (item.link === "external" && item.externalLink) {
    navItem.href = item.externalLink;
  }

  if (item.link === "blog") {
    navItem.to = "/blog";
  }

  if (item.link === "page" && item.pageLink) {
    navItem.to = getPageRoute(item.pageLink);
  }
  if (item.link === "doc" && item.docLink) {
    navItem.type = "doc";
    navItem.docId = getDocId(item.docLink);
  }

  if (item.items) {
    navItem.type = "dropdown";
    navItem.items = item.items.map((subItem) => {
      return formatNavbarItem(subItem, true);
    });
  }

  return navItem;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: docusaurusData.title || "My Site",
  tagline: docusaurusData.tagline || "Dinosaurs are cool",
  url: docusaurusData.url || "https://tinasaurus.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  staticDirectories: ['public', 'static','.attachments'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: docusaurusData.url + "/admin/#/collections/doc",
          docItemComponent: "@theme/ApiItem",
          docRootComponent: "@theme/DocRoot", 
        },
        blog: {
          showReadingTime: true,
          editUrl: docusaurusData.url + "/admin/#/collections/post",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],
  
  plugins: [ 'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-openapi-docs',{
        id: "openapi", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          api: {
            
            specPath: "https://cdn.scalar.com/spec/openapi_petstore.json",
            outputDir: "docs/api-reference", // No trailing slash
          
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "info",
              sidebarCollapsible:true,
              sidebarCollapsed:false
            },
          }
    
        }
    }],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    navbar: {
      title: docusaurusData.title || "",
      logo: {
        alt: docusaurusData?.logo?.alt
          ? docusaurusData?.logo?.alt
          : "My Logo",
        src: docusaurusData?.logo?.src
          ? docusaurusData?.logo?.src
          : "img/logo.svg",
        srcDark:  docusaurusData?.logo?.srcDark
        ? docusaurusData?.logo?.srcDark
        : "img/logo.svg",
      },

      items: [].concat(docusaurusData.navbar.map((item) => {
        return formatNavbarItem(item);
      })),
    },
    footer: {
      style: docusaurusData.footer?.style || "dark",
      links: docusaurusData.footer?.links.map((item) => {
        return formatFooterItem(item);
      }),
      copyright:
        `Copyright © ${new Date().getFullYear()} ` +
        (docusaurusData.footer?.copyright || docusaurusData.title),
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '9K527TJ8A7',

      // Public API key: it is safe to commit it
      apiKey: '58dc48cbd0fef8810580478258d293e1',

      indexName: 'docs_piyovi',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig
};

export default config;
