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

import logger from '@docusaurus/logger';

export const redirects = {
  // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
  // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
  redirects: [
    //   // /docs/oldDoc -> /docs/newDoc
    //   {
    //     from: '/docs/oldDoc',
    //     to: '/docs/newDoc',
    //   },
    //   // Redirect from multiple old paths to the new path
    //   {
    //     from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
    //     to: '/docs/newDoc2',
    //   },
    { from: '/about', to: '/docs/project/about' },
    { from: '/arm-none-eabi-gcc', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/' },
    { from: '/arm-none-eabi-gcc/install', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/install/' },
    { from: '/arm-none-eabi-gcc/releases', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/releases/' },
    { from: '/arm-none-eabi-gcc/support', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/support/' },
    { from: '/ci', to: 'https://xpack.github.io/web-archive-jekyll/ci/' },
    { from: '/core', to: '/' },
    { from: '/dev-tools', to: 'https://xpack-dev-tools.github.io/' },
    { from: '/develop', to: '/docs/developer' },
    { from: '/develop/how-to-new-git', to: 'https://xpack.github.io/xpm/docs/guide/new-github-project/' },
    { from: '/develop/js-style-guide', to: '/docs/developer/js-style-guide' },
    { from: '/develop/links', to: '/docs/developer/links' },
    { from: '/develop/node-js-tricks', to: '/docs/developer/node-js-tricks' },
    { from: '/develop/schemas', to: 'https://xpack.github.io/web-archive-jekyll/develop/schemas/' },
    { from: '/develop/vs-code-settings', to: '/docs/developer/vs-code-settings' },
    { from: '/history', to: '/docs/project/history' },
    { from: '/install', to: '/docs/getting-started/prerequisites' },
    { from: '/intro', to: 'https://xpack.github.io/xpm/docs/user/' },
    { from: '/maintain', to: '/docs/maintainer' },
    { from: '/maintain/how-to-release-web', to: 'https://xpack.github.io/xpm/docs/guide/new-github-project/' },
    { from: '/metadata', to: 'https://xpack.github.io/web-archive-jekyll/metadata/' },
    { from: '/metadata/build', to: 'https://xpack.github.io/web-archive-jekyll/metadata/build/' },
    { from: '/metadata/components', to: 'https://xpack.github.io/web-archive-jekyll/metadata/components/' },
    { from: '/metadata/devices', to: 'https://xpack.github.io/web-archive-jekyll/metadata/devices/' },
    { from: '/metadata/tools-collections', to: 'https://xpack.github.io/web-archive-jekyll/metadata/tools-collections/' },
    { from: '/metadata/xsvd', to: 'https://xpack.github.io/web-archive-jekyll/metadata/xsvd/' },
    { from: '/openocd', to: 'https://xpack-dev-tools.github.io/openocd-xpack/' },
    { from: '/openocd/install', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/install/' },
    { from: '/openocd/releases', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/releases/' },
    { from: '/project/about', to: '/docs/project/about' },
    { from: '/project/history', to: '/docs/project/history' },
    { from: '/qemu-arm', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/' },
    { from: '/qemu-arm/install', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/install/' },
    { from: '/qemu-arm/options', to: 'https://xpack.github.io/web-archive-jekyll/qemu-arm/options/' },
    { from: '/qemu-arm/releases', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/releases/' },
    { from: '/riscv-none-embed-gcc', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/' },
    { from: '/riscv-none-embed-gcc/install', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/install/' },
    { from: '/riscv-none-embed-gcc/releases', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/releases/' },
    { from: '/riscv-none-embed-gcc/support', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/support' },
    { from: '/support', to: '/docs/support' },
    { from: '/test', to: '/docs/test' },
    { from: '/vscode', to: 'https://xpack.github.io/web-archive-jekyll/vscode/' },
    { from: '/vscode/faq', to: 'https://xpack.github.io/web-archive-jekyll/vscode/faq/' },
    { from: '/vscode/install', to: 'https://xpack.github.io/web-archive-jekyll/vscode/install/' },
    { from: '/vscode/intellisense', to: 'https://xpack.github.io/web-archive-jekyll/vscode/intellisense/' },
    { from: '/vscode/quick-start', to: 'https://xpack.github.io/web-archive-jekyll/vscode/quick-start/' },
    { from: '/vscode/support', to: 'https://xpack.github.io/web-archive-jekyll/vscode/support/' },
    { from: '/windows-build-tools', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/' },
    { from: '/windows-build-tools/install', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/install/' },
    { from: '/windows-build-tools/releases', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/releases/' },
    { from: '/xbb', to: 'https://xpack-dev-tools.github.io/xpack-build-box/' },
    { from: '/xbb/end-of-support', to: 'https://xpack-dev-tools.github.io/xpack-build-box/docs/end-of-support/' },
    { from: '/xbb/prerequisites', to: 'https://xpack.github.io/web-archive-jekyll/xbb/prerequisites/' },
    { from: '/xpbuild', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/' },
    { from: '/xpbuild/cli', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/cli/' },
    { from: '/xpbuild/cli/ini', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/cli/init/' },
    { from: '/xpbuild/faq', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/faq/' },
    { from: '/xpbuild/install', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/install/' },
    { from: '/xpbuild/support', to: 'https://https://xpack.github.io/web-archive-jekyll/xpbuild/support/' },
    { from: '/xpcdl', to: 'https://https://xpack.github.io/web-archive-jekyll/xpcdl/' },
    { from: '/xpmake', to: 'https://https://xpack.github.io/web-archive-jekyll/xpmake/' },
    { from: '/xpninja', to: 'https://https://xpack.github.io/web-archive-jekyll/xpninja/' },
    { from: '/xsvd/files/xsvd-json', to: 'https://xpack.github.io/web-archive-jekyll/xsvd/files/xsvd-json/' },

  ],
  createRedirects(existingPath) {
    logger.info(existingPath);
    //   if (existingPath.includes('/evenimente')) {
    //     // logger.info(`to ${existingPath} from ${existingPath.replace('/evenimente', '/events')}`);
    //     // Redirect from /events/X to /evenimente/X
    //     return [
    //       existingPath.replace('/evenimente', '/events')
    //     ];
    //   } else if (existingPath.includes('/amintiri')) {
    //     // logger.info(`to ${existingPath} from ${existingPath.replace('/amintiri', '/blog')}`);
    //     // Redirect from /blog/Z to /amintiri/X
    //     return [
    //       existingPath.replace('/amintiri', '/blog')
    //     ];
    //   }
    //   return undefined; // Return a falsy value: no redirect created
    //   },
  }
}
