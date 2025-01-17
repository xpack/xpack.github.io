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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

// import tools from '@site/tools';

const coreTools = [
  {
    gitHubBaseUrl: 'xpack/xpm-js',
    webBaseUrl: 'xpm',
    npmName: 'xpm',
    shortName: 'xpm',
    longName: 'xPack Project Manager'
  },
  {
    gitHubBaseUrl: 'xpack/xcdl-cli-ts',
    webBaseUrl: 'xcdl',
    npmName: 'xcdl',
    shortName: 'xcdl',
    longName: 'xCDL Component Manager (work in progress)'
  },
]

const npmModules = [
  {
    gitHubBaseUrl: 'xpack/logger-ts',
    webBaseUrl: 'logger-ts',
    npmName: '@xpack/logger',
    shortName: '@xpack/logger',
    longName: 'The xPack Logger'
  },
  {
    gitHubBaseUrl: 'xpack/mock-console-ts',
    webBaseUrl: 'mock-console-ts',
    npmName: '@xpack/mock-console',
    shortName: '@xpack/mock-console',
    longName: 'The xPack Mock Console'
  },
  {
    gitHubBaseUrl: 'xpack/xpm-liquid-ts',
    webBaseUrl: 'xpm-liquid-ts',
    npmName: '@xpack/xpm-liquid',
    shortName: '@xpack/xpm-liquid',
    longName: 'The xPack Liquid Substitutions'
  },
  {
    gitHubBaseUrl: 'xpack/update-checker-ts',
    webBaseUrl: 'update-checker-ts',
    npmName: '@xpack/update-checker',
    shortName: '@xpack/update-checker',
    longName: 'The xPack Update Checker'
  },
]


function NpmModule({ gitHubBaseUrl, webBaseUrl, npmName, shortName, longName }) {
  return (
    <>
      <div className="padding-vert--sm">
        <div>
          <b><Link to={'https://xpack.github.io/' + webBaseUrl + '/'}><span className="sub-web-home-link">{shortName}</span></Link></b> - <b>{longName}</b>
        </div>
        <div className="padding-top--xs">
          {/* <Link to={'https://github.com/' + gitHubBaseUrl + '/blob/master/package.json'}><img alt="GitHub package.json version" src={'https://img.shields.io/github/package-json/v/' + gitHubBaseUrl + '?&color=YellowGreen'} /></Link>
          &nbsp; */}<Link to={'https://www.npmjs.com/package/'+npmName+'/'}><img alt="npm (scoped)" src={'https://img.shields.io/npm/v/'+npmName+'.svg?color=blue)'} /></Link>
          &nbsp;<Link to={'https://www.npmjs.com/package/'+npmName+'/'}><img alt="NPM Weekly Downloads" src={'https://img.shields.io/npm/dw/'+npmName} /></Link>
          &nbsp;<Link to={'https://www.npmjs.com/package/'+npmName+'/'}><img alt="NPM Downloads" src={'https://img.shields.io/npm/d18m/'+npmName} /></Link>
          &nbsp;<Link to={'https://github.com/' + gitHubBaseUrl + '/'}><img alt="GitHub Repo stars" src={'https://img.shields.io/github/stars/' + gitHubBaseUrl} /></Link>
        </div>
      </div>
    </>
  )
}

function ToolsLeft() {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h2">Core Tools</Heading>
        {coreTools.map((props, idx) => (
          <NpmModule {...props} />
        ))}
      </div>
      <hr className="hero__hr2 hero__hr2_margin" />
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">npm Modules</Heading>
        {npmModules.map((props, idx) => (
          <NpmModule {...props} />
        ))}
      </div>
    </div>
  );
}

function ToolsRight() {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h2">Binary Tools</Heading>
        <div><b><Link to={'https://xpack-dev-tools.github.io/'}><span className="sub-web-home-link">xpack-dev-tools</span></Link></b> - <b>xPack Binary Development Tools</b></div>
      </div>
      <hr className="hero__hr2 hero__hr2_margin" />
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">Project Templates</Heading>
        <div><b><Link to={'https://github.com/xpack/hello-world-template-xpack/'}><span className="sub-web-github-link">@xpack/hello-world-template</span></Link></b> - <b>A Hello World template</b></div>
      </div>
      <hr className="hero__hr2 hero__hr2_margin" />
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">Visual Studio Code Extensions</Heading>
        <div><b><Link to={'https://github.com/xpack/vscode-xpack-extension-ts/'}><span className="sub-web-github-link">ilg-vscode.xpack</span></Link></b> - <b>xPack C/C++ Managed Build</b></div>
      </div>
      <hr className="hero__hr2 hero__hr2_margin" />
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">Other</Heading>
        <div><b><Link to={'https://github.com/xpack/npm-packages-helper'}><span className="sub-web-github-link">npm-packages-helper</span></Link></b> - <b>npm Packages Helper</b></div>
        <div><b><Link to={'https://github.com/xpack/docusaurus-template-liquid'}><span className="sub-web-github-link">docusaurus-template-liquid</span></Link></b> - <b>Docusaurus LiquidJS Template</b></div>
      </div>
    </div>
  );
}

export default function HomepageTools(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row padding-bottom--lg">
          <ToolsLeft key={0} />
          <ToolsRight key={1} />
        </div>
      </div>
    </section>
  );
}
