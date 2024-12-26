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

import Link from '@docusaurus/Link';

import type { FeatureItem } from './FeatureItem'

export const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-configurations, cross-platform',
    Svg: require('@site/static/img/mosaic.svg').default,
    description: (
      <>
        The <b>xPack Framework</b> is designed to automate building and testing of <b>multiple configuration</b> projects, and installing <b>multiple versions</b> of packages, across multiple platforms (<b>Windows</b>, <b>macOS</b>, <b>GNU/Linux</b>).
      </>
    ),
  },
  {
    title: 'Easy to Use & Reproducible',
    Svg: require('@site/static/img/check-badge.svg').default,
    description: (
      <>
        Source libraries and binary packages can be added to projects as <b>dependencies</b>, and conveniently installed with <code>xpm install</code>. This feature also ensures reproducibility, which is particularly beneficial in <b>CI/CD</b> environments.
      </>
    ),
  },
  {
    title: 'Part of the Node.js ecosystem',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        The <b><Link to="https://xpack.github.io/xpm/">xpm</Link></b> CLI tool complements <b><Link to="https://docs.npmjs.com/cli/npm">npm</Link></b> with several extra features specific to <b>C/C++ projects</b>. This enables source libraries and binary packages to nicely integrate into the Node.js ecosystem, while still allowing them to be installed manually.
      </>
    ),
  },
];
