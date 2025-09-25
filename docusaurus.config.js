const prism = require("prism-react-renderer");
const path = require("path");

const url = "https://api-reference.swan.io";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Swan Docs",
  tagline:
    "Discover the features that power Swan. Unlock your integration’s full potential with Swan’s comprehensive documentation.",
  url,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "swan-io", // Usually your GitHub org/user name.
  projectName: "api-reference", // Usually your repo name.
  clientModules: [
    require.resolve('./src/theme/ApiRefEnhancer/index.js'),
    require.resolve('./src/theme/ApiRefEnhancer/memberOf.js'),
  ],
  themeConfig: {
    algolia: {
      appId: "PWGO6EETLK",
      apiKey: "55d34883c659e60e4d4d625f78c01fbc",
      indexName: "swan-ioio",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
      externalUrlRegex: "docs\\.swan\\.io",
    },
    navbar: {
      logo: {
        alt: "Swan",
        src: "img/logo-swan.svg",
        width: 130,
        href: "https://docs.swan.io",
        target: "_self",
      },
      items: [
        {
          to: "https://docs.swan.io/welcome",
          label: "Documentation",
          position: "left",
          target: "_self",
        },
        {
          to: "https://docs.swan.io/partnership/",
          label: "Partnership",
          position: "left",
          target: "_self",
        },
        {
          to: "https://docs.swan.io/developers",
          label: "Developers",
          position: "left",
          target: "_self",
        },
        {
          label: "API Reference",
          position: "left",
          docId: "index",
          to: "/",
        },
        {
          position: "right",
          href: "https://explorer.swan.io/",
          label: "API Explorer", 
          className: "swan-api-explorer"
        },
        {
          type: "html",
          position: "right", 
          value: `<div class="swan-unified-nav">
            <a href="https://docs.swan.io/changelog">Changelog</a>
            <div class="separator"></div>
            <a href="https://docs.swan.io/preview">Preview</a>
          </div>`
        }
      ],
    },
    // footer: {
    //   // style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Swan`,
    // },
    prism: {
      theme: prism.themes.palenight,
      darkTheme: prism.themes.oceanicNext,
    },
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${url}/img/share.jpg` },
      { property: "og:image:width", content: `1500` },
      { property: "og:image:height", content: `777` },
      { name: "twitter:image", content: `${url}/img/share.jpg` },
    ],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [
    {
      src: "https://app.outverse.com/widgetverse/swan.js",
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: 'GTM-NWPK43X',
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/swan-io/api-reference/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@graphql-markdown/docusaurus",
      {
        schema: path.join(
          process.cwd(),
          "scripts/graphql/dist/partner-schema.gql"
        ),
        rootPath: "./docs",
        baseURL: "",
        printTypeOptions: {
          useApiGroup: false,
        },
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
      },
    ],
  ],
};
