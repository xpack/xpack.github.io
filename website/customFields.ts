// DO NOT EDIT!
// Automatically generated from docusaurus-template-liquid/templates/docusaurus.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

// ----------------------------------------------------------------------------

export function getCustomFields() {
  const pwd = fileURLToPath(import.meta.url);
  // console.log(pwd);

  // First get the version from the top package.json.
  const topFilePath = path.join(path.dirname(path.dirname(pwd)), 'package.json');
  // console.log(filePath);
  const topFileContent = fs.readFileSync(topFilePath);

  const topPackageJson = JSON.parse(topFileContent.toString());
  const releaseVersion = topPackageJson.version.replace(/[.-]pre/, '');

  console.log(`package version: ${topPackageJson.version}`);

  let versionFields;

  if (topPackageJson.xpack && !releaseVersion.startsWith('0.0.0')) {
    // Remove the first part, up to the last dot.
    const npmSubversion = releaseVersion.replace(/^.*[.]/, '');

    // Remove from the last dot to the end.
    const xpackVersion = releaseVersion.replace(/[.][0-9]*$/, '');

    // Remove the pre-release.
    const xpackSemver = xpackVersion.replace(/[-].*$/, '');

    // Remove the first part, up to the dash.
    const xpackSubversion = xpackVersion.replace(/^.*[-]/, '');

    let upstreamVersion = xpackSemver;

    versionFields = {
      releaseVersion,
      xpackVersion,
      xpackSemver,
      xpackSubversion,
      npmSubversion,
      upstreamVersion,
    }
  } else {
    versionFields = {
      releaseVersion
    }
  }

  let engineVersionFields;

  if (topPackageJson?.engines?.node) {
    const enginesNodeVersion = topPackageJson.engines.node.replace(/[^0-9]*/, '') || '';
    const enginesNodeVersionMajor = enginesNodeVersion.replace(/[.].*/, '');
    engineVersionFields = {
      enginesNodeVersion,
      enginesNodeVersionMajor
    }
  } else {
    engineVersionFields = {};
  }

  const docusaurusFields = {
    docusaurusVersion: require('@docusaurus/core/package.json').version,
    buildTime: new Date().getTime(),
  }

  let websiteFields = {};
  try {
    const websiteFilePath = path.join(path.dirname(path.dirname(pwd)), 'website', 'package.json');
    // console.log(filePath);
    const websiteFileContent = fs.readFileSync(websiteFilePath);
    const websitePackageJson = JSON.parse(websiteFileContent.toString());
    websiteFields = websitePackageJson?.websiteConfig?.customFields ?? {};
  } catch (error) {
    // Most probably there is no website/package.json.
  }

  return {
    ...versionFields,
    ...engineVersionFields,
    ...docusaurusFields,
    ...websiteFields,
  }
}

// ----------------------------------------------------------------------------
