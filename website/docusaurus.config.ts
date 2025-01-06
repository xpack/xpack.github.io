// DO NOT EDIT!
// Automatically generated from docusaurus-template-liquid/templates/docusaurus.

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// import logger from '@docusaurus/logger';
import util from 'node:util';

import {customDocsNavbarItem} from './navbar-docs-items'


import {redirects} from './docusaurus-config-redirects'

// The node.js modules cannot be used in modules imported in browser code:
// webpack < 5 used to include polyfills for node.js core modules by default.
// so the entire initialisation code must be in this file, that is
// not processed by webpack.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

// ----------------------------------------------------------------------------

function getCustomFields() {
  const pwd = fileURLToPath(import.meta.url);
  // console.log(pwd);

  // First get the version from the top package.json.
  const topFilePath = path.join(path.dirname(path.dirname(pwd)), 'package.json');
  // console.log(filePath);
  const topFileContent = fs.readFileSync(topFilePath);

  const topPackageJson = JSON.parse(topFileContent.toString());
  const releaseVersion = topPackageJson.version.replace(/[.-]pre/, '');

  console.log(`package version: ${topPackageJson.version}`);

  const enginesNodeVersion = topPackageJson.engines.node.replace(/[^0-9]*/, '') || '';
  const enginesNodeVersionMajor = enginesNodeVersion.replace(/[.].*/, '');
  const customFields = {
    enginesNodeVersion,
    enginesNodeVersionMajor
  }

  return {
    releaseVersion,
    docusaurusVersion: require('@docusaurus/core/package.json').version,
    buildTime: new Date().getTime(),
    ...customFields,
  }
}

// ----------------------------------------------------------------------------

const customFields = getCustomFields();
console.log('customFields: ' + util.inspect(customFields));

// ----------------------------------------------------------------------------

const config: Config = {
  title: 'The xPack Reproducible Build Framework' +
    ((process.env.DOCUSAURUS_IS_PREVIEW === 'true') ? ' (preview)' : ''),
  tagline: 'Tools to manage, configure and build complex, package based, multi-target projects, in a reproducible way',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xpack.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCUSAURUS_BASEURL ??
    '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpack', // Usually your GitHub org/user name.
  projectName: 'xpack.github.io', // Usually your repo name.

  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  onDuplicateRoutes: 'throw',

  // Useful for the sitemap.xml, to avoid redirects, since
  // GitHub redirects all to trailing slash.
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/xpack/xpack.github.io/edit/master/website/',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/xpack/xpack.github.io/edit/master/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        sitemap: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap
          changefreq: 'weekly',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      // https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-client-redirects#redirects
      '@docusaurus/plugin-client-redirects',
      redirects
    ],
    [
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag
      // https://tagassistant.google.com
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-T50NMR8JZ1',
        anonymizeIP: false,
      }
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],

    // Local plugins.
    './src/plugins/SelectReleasesPlugin',
  ],


  // https://docusaurus.io/docs/api/docusaurus-config#headTags
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-48x48.png',
        sizes: '48x48'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicons/favicon.svg'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: '/favicons/favicon.ico'
      }
    },
    {
      // This might also go to themeConfig.metadata.
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'xPack'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/favicons/site.webmanifest'
      }
    }
  ],

  // No longer needed.
  // themes: [ '@docusaurus/theme-search-algolia' ],

  themeConfig: {
    // The project's social card, og:image, twitter:image, 1200x630
    image: 'img/sunrise-og-image.jpg',

    metadata: [
      {
        name: 'keywords',
        content: 'xpack, project, manage, build, test, dependencies, xpm, npm, reproducibility'
      }
    ],
    navbar: {
      // Overriden by i18n/en/docusaurus-theme-classic.
      title: 'The xPack Project',

      logo: {
        alt: 'xPack Logo',
        src: 'img/components-256.png',
        href: 'https://xpack.github.io/',
      },
      items: [
        {
          to: '/',
          // label: 'Home',
          className: 'header-home-link',
          position: 'left'
        },
        customDocsNavbarItem,
        
        {
          type: 'dropdown',
          to: '/blog',
          label: 'Blog',
          position: 'left',
          items: [
            {
              label: 'Recent',
              to: '/blog'
            },
            {
              label: 'Archive',
              to: '/blog/archive'
            },
            {
              label: 'Tags',
              to: '/blog/tags'
            },
          ]
        },
        {
          href: 'https://github.com/xpack/xpack.github.io/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'dropdown',
          href: 'https://github.com/xpack/xpack.github.io/',
          position: 'right',
          label: 'GitHub',
          items: [
            {
              label: `xpack.github.io`,
              href: `https://github.com/xpack/xpack.github.io/`,
            },
            {
              label: 'xpack org',
              href: 'https://github.com/xpack/',
            },
            {
              label: 'xpack-dev-tools org',
              href: 'https://github.com/xpack-dev-tools/',
            },
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'About',
              to: '/docs/project/about',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/xpack/xpack.github.io/discussions',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/xpack',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/kbzWaJerFG',
            },
            {
              label: 'X/Twitter',
              href: 'https://twitter.com/xpack_project',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Donate via PayPal',
              href: 'https://www.paypal.com/donate/?hosted_button_id=5MFRG9ZRBETQ8',
            },
            {
              label: 'GitHub xpack.github.io',
              href: 'https://github.com/xpack/xpack.github.io/',
            },
            {
              label: 'GitHub xpack org',
              href: 'https://github.com/xpack/',
            },
            {
              label: 'GitHub xpack-dev-tools org',
              href: 'https://github.com/xpack-dev-tools/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Liviu Ionescu. Built with Docusaurus v${customFields.docusaurusVersion} on ${new Date(customFields.buildTime).toDateString()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // https://docusaurus.io/docs/search#using-algolia-docsearch
    // https://docsearch.algolia.com/docs/docsearch-v3/
    algolia: {
      // The application ID provided by Algolia
      appId: "KIDD7R4CL1",

      // Public API key: it is safe to commit it
      apiKey: "ca2ffc431941284609f2d50202fc5506",

      indexName: "xpackio",

      // It ensures that search results are relevant to the current
      // language and version. Enabled by default.
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur
      // through window.location instead on history.push. Useful when
      // our Algolia config crawls multiple documentation sites and
      // we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',
      externalUrlRegex: 'xpack\\.github\\.io|xpack-dev-tools\\.github\\.io',

      // Optional: Replace parts of the item URLs from Algolia.
      // Useful when using the same search index for multiple deployments
      // using a different baseUrl. You can use regexp or string in the
      // `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
      //  to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
  } satisfies Preset.ThemeConfig,

  customFields: customFields,
};

export default config;
