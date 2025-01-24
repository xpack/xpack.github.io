/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

export const customDocsSidebar = [
  {
    type: 'category',
    label: 'Getting Started',
    link: {
      type: 'doc',
      id: 'getting-started/index'
    },
    collapsed: false,
    items: [
      {
        type: 'doc',
        id: 'getting-started/glossary/index',
        label: 'Glossary'
      },
      {
        type: 'doc',
        id: 'getting-started/prerequisites/index',
        label: 'Prerequisites'
      },
    ]
  },
  {
    type: 'doc',
    id: 'user/index',
    label: 'User\'s Guides'
  },
  {
    type: 'category',
    label: 'Contributor\'s Guides',
    link: {
      type: 'doc',
      id: 'developer/index',
    },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'developer/js-style-guide/index',
        label: 'JS Style Guide'
      },
      {
        type: 'doc',
        id: 'developer/node-js-tricks/index',
        label: 'Node.js Tips & Tricks'
      },
      {
        type: 'doc',
        id: 'developer/vs-code-settings/index',
        label: 'VS Code Settings'
      },
      {
        type: 'doc',
        id: 'developer/links/index',
        label: 'Links'
      },
    ]
  },
  {
    type: 'doc',
    id: 'maintainer/index',
    label: 'Maintainer\‘s Guides'
  },
  {
    type: 'doc',
    id: 'support/index',
    label: 'Help Centre'
  },
  {
    type: 'category',
    label: 'Project',
    link: {
      type: 'doc',
      id: 'project/about/index',
    },
    collapsed: false,
    items: [
      {
        type: 'doc',
        id: 'project/about/index',
        label: 'About'
      },
      {
        type: 'doc',
        id: 'project/history/index',
        label: 'History'
      },
    ]
  },
]
