import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DevKnowledgeBase",
  tagline: "Explore, Learn, Innovate",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://asafarim.be",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "asafarim", // Usually your GitHub org/user name.
  projectName: "DevDocsCentral", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DevDocsCentral",
      logo: {
        alt: "DevDocsCentral Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "TechTutorialVault",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "DevDocsCentral",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/code-n-create", label: "Code & Create", position: "left" },
        { to: "/ideahub", label: "Idea Hub", position: "left" },
        { to: "/about", label: "About", position: "right" },
        { to: "/contact", label: "Contact", position: "right" },
        {
          href: "https://github.com/AliSafari-IT",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "TechDocsHub",
          items: [
            {
              label: "Tutorial Vault",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/10703628/ali-safari",
            },
            {
              label: "X",
              href: "https://x.com/asafarim",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Code & Create",
              to: "/code-n-create",
            },
            {
              label: "GitHub",
              href: "https://github.com/AliSafari-IT",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ASAFARIM, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
