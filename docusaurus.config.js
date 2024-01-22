const prism = require("prism-react-renderer");
const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Swan Docs",
  tagline: "Onboarding & Banking clients for Swan",
  url: "https://api-reference.swan.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "swan-io", // Usually your GitHub org/user name.
  projectName: "api-reference", // Usually your repo name.
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
        width: 70,
      },
      items: [
        {
          to: "https://beta.docs.swan.io",
          label: "Documentation",
          position: "left",
          target: "_self",
        },
        {
          to: "https://beta.docs.swan.io/partnership/",
          label: "Partnership",
          position: "left",
          target: "_self",
        },
        {
          to: "https://beta.docs.swan.io/developers",
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
          href: "https://docs.swan.io/help/changelog",
          label: "Changelog",
        },
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
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
      },
    ],
  ],
};
