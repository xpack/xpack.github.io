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

export const customDocsNavbarItem = {
    type: 'dropdown',
    label: 'Getting Started',
    to: 'docs/getting-started',
    position: 'left',
    items: [
        {
            label: 'Getting Started',
            to: '/docs/getting-started'
        },
        {
            label: 'Contributor\'s Guides',
            to: '/docs/developer'
        },
        {
            label: 'Maintainer\'s Guides',
            to: '/docs/maintainer'
        },
        {
            label: 'Help Centre',
            to: '/docs/support'
        },
        {
            label: 'About',
            to: '/docs/project/about'
        }
    ],
}
