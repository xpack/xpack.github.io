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

    // Redirects for the pages in the old Jekyll site.
    { from: '/about', to: '/docs/project/about' },
    { from: '/arm-none-eabi-gcc', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/' },
    { from: '/arm-none-eabi-gcc/install', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/install/' },
    { from: '/arm-none-eabi-gcc/releases', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/releases/' },
    { from: '/arm-none-eabi-gcc/support', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/support/' },

    { from: '/ci', to: 'https://xpack.github.io/web-archive-jekyll/ci/' }, // Archive

    { from: '/core', to: '/' },

    // { from: '/dev-tools', to: 'https://xpack.github.io/dev-tools' }, // Separate redirector

    { from: '/develop', to: '/docs/developer' },
    { from: '/develop/how-to-new-git', to: 'https://xpack.github.io/xpm/docs/guide/new-github-project/' },
    { from: '/develop/js-style-guide', to: '/docs/developer/js-style-guide' },
    { from: '/develop/links', to: '/docs/developer/links' },
    { from: '/develop/node-js-tricks', to: '/docs/developer/node-js-tricks' },

    { from: '/develop/schemas', to: 'https://xpack.github.io/web-archive-jekyll/develop/schemas/' }, // Archive

    { from: '/develop/vs-code-settings', to: '/docs/developer/vs-code-settings' },
    { from: '/history', to: '/docs/project/history' },
    { from: '/install', to: '/docs/getting-started/prerequisites' },
    { from: '/intro', to: 'https://xpack.github.io/xpm/docs/user/' },
    { from: '/maintain', to: '/docs/maintainer' },

    { from: '/maintain/how-to-release-web', to: 'https://xpack.github.io/web-archive-jekyll/maintain/how-to-release-web/' }, // Archive
    { from: '/metadata', to: 'https://xpack.github.io/web-archive-jekyll/metadata/' }, // Archive
    { from: '/metadata/build', to: 'https://xpack.github.io/web-archive-jekyll/metadata/build/' }, // Archive
    { from: '/metadata/components', to: 'https://xpack.github.io/web-archive-jekyll/metadata/components/' }, // Archive
    { from: '/metadata/devices', to: 'https://xpack.github.io/web-archive-jekyll/metadata/devices/' }, // Archive
    { from: '/metadata/tools-collections', to: 'https://xpack.github.io/web-archive-jekyll/metadata/tools-collections/' }, // Archive
    { from: '/metadata/xsvd', to: 'https://xpack.github.io/web-archive-jekyll/metadata/xsvd/' }, // Archive

    { from: '/openocd', to: 'https://xpack-dev-tools.github.io/openocd-xpack/' },
    { from: '/openocd/install', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/install/' },
    { from: '/openocd/releases', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/releases/' },
    { from: '/project/about', to: '/docs/project/about' },
    { from: '/project/history', to: '/docs/project/history' },
    { from: '/qemu-arm', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/' },
    { from: '/qemu-arm/install', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/install/' },

    { from: '/qemu-arm/options', to: 'https://xpack.github.io/web-archive-jekyll/qemu-arm/options/' }, // Archive

    { from: '/qemu-arm/releases', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/releases/' },
    { from: '/riscv-none-embed-gcc', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/' },
    { from: '/riscv-none-embed-gcc/install', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/install/' },
    { from: '/riscv-none-embed-gcc/releases', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/releases/' },
    { from: '/riscv-none-embed-gcc/support', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/support' },
    { from: '/support', to: '/docs/support' },
    { from: '/test', to: '/docs/test' },

    { from: '/vscode', to: 'https://xpack.github.io/web-archive-jekyll/vscode/' }, // Archive
    { from: '/vscode/faq', to: 'https://xpack.github.io/web-archive-jekyll/vscode/faq/' }, // Archive
    { from: '/vscode/install', to: 'https://xpack.github.io/web-archive-jekyll/vscode/install/' }, // Archive
    { from: '/vscode/intellisense', to: 'https://xpack.github.io/web-archive-jekyll/vscode/intellisense/' }, // Archive
    { from: '/vscode/quick-start', to: 'https://xpack.github.io/web-archive-jekyll/vscode/quick-start/' }, // Archive
    { from: '/vscode/support', to: 'https://xpack.github.io/web-archive-jekyll/vscode/support/' }, // Archive

    { from: '/windows-build-tools', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/' },
    { from: '/windows-build-tools/install', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/install/' },
    { from: '/windows-build-tools/releases', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/releases/' },
    { from: '/xbb', to: 'https://xpack-dev-tools.github.io/xpack-build-box/' },
    { from: '/xbb/end-of-support', to: 'https://xpack-dev-tools.github.io/xpack-build-box/docs/end-of-support/' },

    { from: '/xbb/prerequisites', to: 'https://xpack.github.io/web-archive-jekyll/xbb/prerequisites/' }, // Archive
    { from: '/xpbuild', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/' }, // Archive
    { from: '/xpbuild/cli', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/cli/' }, // Archive
    { from: '/xpbuild/cli/init', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/cli/init/' }, // Archive
    { from: '/xpbuild/faq', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/faq/' }, // Archive
    { from: '/xpbuild/install', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/install/' }, // Archive
    { from: '/xpbuild/support', to: 'https://xpack.github.io/web-archive-jekyll/xpbuild/support/' }, // Archive
    { from: '/xpcdl', to: 'https://xpack.github.io/web-archive-jekyll/xpcdl/' }, // Archive
    { from: '/xpmake', to: 'https://xpack.github.io/web-archive-jekyll/xpmake/' }, // Archive
    { from: '/xpninja', to: 'https://xpack.github.io/web-archive-jekyll/xpninja/' }, // Archive
    { from: '/xsvd/files/xsvd-json', to: 'https://xpack.github.io/web-archive-jekyll/xsvd/files/xsvd-json/' }, // Archive

    // Redirects for blog posts in the old Jekyll site.
    // - https://xpack.github.io/blog/2019/07/18/new-web-look/

    { from: '/blog/2022/05/15/aarch64-none-elf-gcc-v11-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2022/05/15/aarch64-none-elf-gcc-v11-2-1-1-1-released/' },
    { from: '/blog/2022/05/31/aarch64-none-elf-gcc-v11-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2022/05/31/aarch64-none-elf-gcc-v11-2-1-1-2-released/' },
    { from: '/blog/2022/08/25/aarch64-none-elf-gcc-v11-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2022/08/25/aarch64-none-elf-gcc-v11-3-1-1-1-released/' },
    { from: '/blog/2022/08/27/aarch64-none-elf-gcc-v11-3-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2022/08/27/aarch64-none-elf-gcc-v11-3-1-1-2-released/' },
    { from: '/blog/2023/02/03/aarch64-none-elf-gcc-v12-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2023/02/05/aarch64-none-elf-gcc-v12-2-1-1-2-released/' }, // R
    { from: '/blog/2023/02/05/aarch64-none-elf-gcc-v12-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2023/02/05/aarch64-none-elf-gcc-v12-2-1-1-2-released/' },
    { from: '/blog/2023/08/21/aarch64-none-elf-gcc-v12-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2023/08/21/aarch64-none-elf-gcc-v12-3-1-1-1-released/' },
    { from: '/blog/2023/09/20/aarch64-none-elf-gcc-v12-3-1-2-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2023/09/20/aarch64-none-elf-gcc-v12-3-1-2-1-released/' },
    { from: '/blog/2023/11/08/aarch64-none-elf-gcc-v13-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/blog/2023/11/08/aarch64-none-elf-gcc-v13-2-1-1-1-released/' },
    { from: '/blog/2020/12/19/arm-none-eabi-gcc-v10-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2020/12/19/arm-none-eabi-gcc-v10-2-1-1-1-released/' },
    { from: '/blog/2021/10/25/arm-none-eabi-gcc-v10-3-1-2-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2021/10/25/arm-none-eabi-gcc-v10-3-1-2-1-released/' },
    { from: '/blog/2021/11/12/arm-none-eabi-gcc-v10-3-1-2-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2021/11/12/arm-none-eabi-gcc-v10-3-1-2-2-released/' },
    { from: '/blog/2021/12/07/arm-none-eabi-gcc-v10-3-1-2-3-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2021/12/07/arm-none-eabi-gcc-v10-3-1-2-3-released/' },
    { from: '/blog/2022/05/15/arm-none-eabi-gcc-v11-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2022/05/15/arm-none-eabi-gcc-v11-2-1-1-1-released/' },
    { from: '/blog/2022/05/16/arm-none-eabi-gcc-v11-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2022/05/15/arm-none-eabi-gcc-v11-2-1-1-1-released/' }, // R
    { from: '/blog/2022/05/29/arm-none-eabi-gcc-v11-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2022/05/30/arm-none-eabi-gcc-v11-2-1-1-2-released/' }, // R
    { from: '/blog/2022/05/30/arm-none-eabi-gcc-v11-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2022/05/30/arm-none-eabi-gcc-v11-2-1-1-2-released/' },
    { from: '/blog/2022/08/28/arm-none-eabi-gcc-v11-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2022/08/28/arm-none-eabi-gcc-v11-3-1-1-1-released/' },
    { from: '/blog/2023/02/04/arm-none-eabi-gcc-v12-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2023/02/05/arm-none-eabi-gcc-v12-2-1-1-2-released/' }, // R
    { from: '/blog/2023/02/05/arm-none-eabi-gcc-v12-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2023/02/05/arm-none-eabi-gcc-v12-2-1-1-2-released/' },
    { from: '/blog/2023/08/21/arm-none-eabi-gcc-v12-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2023/08/21/arm-none-eabi-gcc-v12-3-1-1-1-released/' },
    { from: '/blog/2023/09/21/arm-none-eabi-gcc-v12-3-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2023/09/21/arm-none-eabi-gcc-v12-3-1-1-2-released/' },
    { from: '/blog/2023/11/09/arm-none-eabi-gcc-v13-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2023/11/09/arm-none-eabi-gcc-v13-2-1-1-1-released/' },
    { from: '/blog/2018/03/31/arm-none-eabi-gcc-v6-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2018/03/31/arm-none-eabi-gcc-v6-3-1-1-1-released/' },
    { from: '/blog/2018/04/01/arm-none-eabi-gcc-v7-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2018/04/01/arm-none-eabi-gcc-v7-2-1-1-1-released/' },
    { from: '/blog/2018/07/24/arm-none-eabi-gcc-v7-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2018/07/24/arm-none-eabi-gcc-v7-3-1-1-1-released/' },
    { from: '/blog/2019/07/26/arm-none-eabi-gcc-v7-3-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/07/26/arm-none-eabi-gcc-v7-3-1-1-2-released/' },
    { from: '/blog/2019/01/03/arm-none-eabi-gcc-v8-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/01/03/arm-none-eabi-gcc-v8-2-1-1-1-released/' },
    { from: '/blog/2019/01/19/arm-none-eabi-gcc-v8-2-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/01/19/arm-none-eabi-gcc-v8-2-1-1-2-released/' }, // ?
    { from: '/blog/2019/02/02/arm-none-eabi-gcc-v8-2-1-1-3-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/02/02/arm-none-eabi-gcc-v8-2-1-1-3-released/' },
    { from: '/blog/2019/02/14/arm-none-eabi-gcc-v8-2-1-1-4-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/02/14/arm-none-eabi-gcc-v8-2-1-1-4-released/' },
    { from: '/blog/2019/04/26/arm-none-eabi-gcc-v8-2-1-1-5-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/04/26/arm-none-eabi-gcc-v8-2-1-1-5-released/' },
    { from: '/blog/2019/05/10/arm-none-eabi-gcc-v8-2-1-1-6-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/05/10/arm-none-eabi-gcc-v8-2-1-1-6-released/' }, // ?
    { from: '/blog/2019/05/24/arm-none-eabi-gcc-v8-2-1-1-7-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/05/24/arm-none-eabi-gcc-v8-2-1-1-7-released/' },
    { from: '/blog/2019/07/29/arm-none-eabi-gcc-v8-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/07/29/arm-none-eabi-gcc-v8-3-1-1-1-released/' },
    { from: '/blog/2019/10/11/arm-none-eabi-gcc-v8-3-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/10/11/arm-none-eabi-gcc-v8-3-1-1-2-released/' },
    { from: '/blog/2019/11/02/arm-none-eabi-gcc-v8-3-1-1-3-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/11/02/arm-none-eabi-gcc-v8-3-1-1-3-released/' },
    { from: '/blog/2019/12/06/arm-none-eabi-gcc-v8-3-1-1-4-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/12/06/arm-none-eabi-gcc-v8-3-1-1-4-released/' },
    { from: '/blog/2019/12/06/arm-none-eabi-gcc-v9-2-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2019/12/06/arm-none-eabi-gcc-v9-2-1-1-1-released/' },
    { from: '/blog/2020/07/03/arm-none-eabi-gcc-v9-3-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2020/07/03/arm-none-eabi-gcc-v9-3-1-1-1-released/' },
    { from: '/blog/2020/07/27/arm-none-eabi-gcc-v9-3-1-1-2-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2020/07/27/arm-none-eabi-gcc-v9-3-1-1-2-released/' },
    { from: '/blog/2020/10/12/arm-none-eabi-gcc-v9-3-1-1-3-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2020/10/12/arm-none-eabi-gcc-v9-3-1-1-3-released/' },
    { from: '/blog/2020/10/23/arm-none-eabi-gcc-v9-3-1-1-4-released/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/blog/2020/10/23/arm-none-eabi-gcc-v9-3-1-1-4-released/' },
    { from: '/blog/2023/08/17/bison-v3-8-2-1-released/', to: 'https://xpack-dev-tools.github.io/bison-xpack/blog/2023/08/17/bison-v3-8-2-1-released/' },
    { from: '/blog/2021/10/21/clang-v12-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2021/10/21/clang-v12-0-1-1-released/' },
    { from: '/blog/2021/10/22/clang-v12-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2021/10/21/clang-v12-0-1-1-released/' }, // R
    { from: '/blog/2022/02/08/clang-v12-0-1-2-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2022/02/08/clang-v12-0-1-2-released/' },
    { from: '/blog/2022/03/24/clang-v13-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2022/03/24/clang-v13-0-1-1-released/' },
    { from: '/blog/2022/08/21/clang-v14-0-6-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2022/08/21/clang-v14-0-6-1-released/' },
    { from: '/blog/2022/08/31/clang-v14-0-6-2-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2022/08/31/clang-v14-0-6-2-released/' },
    { from: '/blog/2023/01/22/clang-v15-0-7-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/01/22/clang-v15-0-7-1-released/' },
    { from: '/blog/2023/01/28/clang-v15-0-7-2-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/01/28/clang-v15-0-7-2-released/' },
    { from: '/blog/2023/08/04/clang-v15-0-7-3-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/08/04/clang-v15-0-7-3-released/' },
    { from: '/blog/2023/08/05/clang-v15-0-7-4-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/08/05/clang-v15-0-7-4-released/' },
    { from: '/blog/2023/08/06/clang-v16-0-6-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/08/06/clang-v16-0-6-1-released/' },
    { from: '/blog/2023/12/04/clang-v17-0-6-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2023/12/04/clang-v17-0-6-1-released/' },
    { from: '/blog/2024/05/28/clang-v17-0-6-2-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2024/05/28/clang-v17-0-6-2-released/' },
    { from: '/blog/2024/06/21/clang-v17-0-6-3-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2024/06/21/clang-v17-0-6-3-released/' },
    { from: '/blog/2024/06/25/clang-v18-1-8-1-released/', to: 'https://xpack-dev-tools.github.io/clang-xpack/blog/2024/06/25/clang-v18-1-8-1-released/' },
    { from: '/blog/2020/09/29/cmake-v3-18-3-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2020/09/29/cmake-v3-18-3-1-released/' },
    { from: '/blog/2020/12/10/cmake-v3-18-5-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2020/12/10/cmake-v3-18-5-1-released/' },
    { from: '/blog/2021/03/16/cmake-v3-18-6-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/03/16/cmake-v3-18-6-1-released/' },
    { from: '/blog/2020/12/15/cmake-v3-19-1-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2020/12/15/cmake-v3-19-1-1-released/' },
    { from: '/blog/2021/01/06/cmake-v3-19-2-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/01/06/cmake-v3-19-2-1-released/' },
    { from: '/blog/2021/03/16/cmake-v3-19-2-2-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/03/16/cmake-v3-19-2-2-released/' }, // ?
    { from: '/blog/2021/05/19/cmake-v3-19-8-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/05/19/cmake-v3-19-8-1-released/' },
    { from: '/blog/2021/10/18/cmake-v3-20-6-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/10/18/cmake-v3-20-6-1-released/' },
    { from: '/blog/2021/10/19/cmake-v3-20-6-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/10/18/cmake-v3-20-6-1-released/' }, // R
    { from: '/blog/2021/12/06/cmake-v3-20-6-2-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2021/12/06/cmake-v3-20-6-2-released/' },
    { from: '/blog/2022/03/25/cmake-v3-21-6-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2022/03/25/cmake-v3-21-6-1-released/' },
    { from: '/blog/2022/09/01/cmake-v3-22-6-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2022/09/01/cmake-v3-22-6-1-released/' },
    { from: '/blog/2023/01/24/cmake-v3-23-5-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2023/01/24/cmake-v3-23-5-1-released/' },
    { from: '/blog/2023/07/26/cmake-v3-24-4-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2023/07/26/cmake-v3-24-4-1-released/' },
    { from: '/blog/2023/07/27/cmake-v3-25-3-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2023/07/27/cmake-v3-25-3-1-released/' },
    { from: '/blog/2023/08/25/cmake-v3-26-5-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2023/08/25/cmake-v3-26-5-1-released/' },
    { from: '/blog/2024/04/02/cmake-v3-27-9-1-released/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/blog/2024/04/02/cmake-v3-27-9-1-released/' },
    { from: '/blog/2023/08/17/flex-v2-6-4-1-released/', to: 'https://xpack-dev-tools.github.io/flex-xpack/blog/2023/08/17/flex-v2-6-4-1-released/' },
    { from: '/blog/2021/10/20/gcc-v11-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2021/10/20/gcc-v11-2-0-1-released/' },
    { from: '/blog/2022/02/11/gcc-v11-2-0-3-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2022/02/11/gcc-v11-2-0-3-released/' },
    { from: '/blog/2022/05/31/gcc-v11-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2022/05/31/gcc-v11-3-0-1-released/' },
    { from: '/blog/2023/12/05/gcc-v11-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2023/12/05/gcc-v11-4-0-1-released/' },
    { from: '/blog/2024/02/23/gcc-v11-4-0-2-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/02/23/gcc-v11-4-0-2-released/' },
    { from: '/blog/2024/07/22/gcc-v11-5-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/07/22/gcc-v11-5-0-1-released/' },
    { from: '/blog/2022/06/16/gcc-v12-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2022/06/16/gcc-v12-1-0-1-released/' },
    { from: '/blog/2022/08/30/gcc-v12-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2022/08/30/gcc-v12-2-0-1-released/' },
    { from: '/blog/2022/12/27/gcc-v12-2-0-2-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2022/12/27/gcc-v12-2-0-2-released/' },
    { from: '/blog/2023/08/31/gcc-v12-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2023/08/31/gcc-v12-3-0-1-released/' },
    { from: '/blog/2024/02/24/gcc-v12-3-0-2-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/02/24/gcc-v12-3-0-2-released/' },
    { from: '/blog/2024/06/26/gcc-v12-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/06/26/gcc-v12-4-0-1-released/' },
    { from: '/blog/2023/08/31/gcc-v13-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2023/08/31/gcc-v13-2-0-1-released/' },
    { from: '/blog/2024/02/24/gcc-v13-2-0-2-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/02/24/gcc-v13-2-0-2-released/' },
    { from: '/blog/2024/06/05/gcc-v13-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/06/05/gcc-v13-3-0-1-released/' },
    { from: '/blog/2024/05/31/gcc-v14-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2024/05/31/gcc-v14-1-0-1-released/' },
    { from: '/blog/2021/05/24/gcc-v8-5-0-1-released/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/blog/2021/05/24/gcc-v8-5-0-1-released/' },
    { from: '/blog/2022/11/03/m4-v1-4-19-1-released/', to: 'https://xpack-dev-tools.github.io/m4-xpack/blog/2022/11/03/m4-v1-4-19-1-released/' },
    { from: '/blog/2023/01/29/m4-v1-4-19-2-released/', to: 'https://xpack-dev-tools.github.io/m4-xpack/blog/2023/01/29/m4-v1-4-19-2-released/' },
    { from: '/blog/2023/09/06/m4-v1-4-19-3-released/', to: 'https://xpack-dev-tools.github.io/m4-xpack/blog/2023/09/06/m4-v1-4-19-3-released/' },
    { from: '/blog/2020/09/30/meson-build-v0-55-3-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2020/09/30/meson-build-v0-55-3-1-released/' },
    { from: '/blog/2020/10/16/meson-build-v0-55-3-2-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2020/10/16/meson-build-v0-55-3-2-released/' },
    { from: '/blog/2021/02/02/meson-build-v0-56-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2021/02/02/meson-build-v0-56-2-1-released/' },
    { from: '/blog/2021/04/27/meson-build-v0-56-2-2-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2021/04/27/meson-build-v0-56-2-2-released/' },
    { from: '/blog/2021/05/26/meson-build-v0-57-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2021/05/26/meson-build-v0-57-2-1-released/' },
    { from: '/blog/2021/10/19/meson-build-v0-58-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2021/10/19/meson-build-v0-58-2-1-released/' },
    { from: '/blog/2021/12/06/meson-build-v0-59-4-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2021/12/06/meson-build-v0-59-4-1-released/' },
    { from: '/blog/2022/03/24/meson-build-v0-60-3-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2022/03/24/meson-build-v0-60-3-1-released/' },
    { from: '/blog/2022/09/01/meson-build-v0-61-5-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2022/09/01/meson-build-v0-61-5-1-released/' },
    { from: '/blog/2023/01/28/meson-build-v0-62-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/01/28/meson-build-v0-62-2-1-released/' },
    { from: '/blog/2023/01/28/meson-build-v0-63-3-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/01/28/meson-build-v0-63-3-1-released/' },
    { from: '/blog/2023/07/28/meson-build-v0-64-1-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/07/28/meson-build-v0-64-1-1-released/' },
    { from: '/blog/2023/07/28/meson-build-v1-0-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/07/28/meson-build-v1-0-2-1-released/' },
    { from: '/blog/2023/11/25/meson-build-v1-1-1-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/11/25/meson-build-v1-1-1-1-released/' },
    { from: '/blog/2023/11/25/meson-build-v1-2-3-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/11/25/meson-build-v1-2-3-1-released/' },
    { from: '/blog/2023/11/26/meson-build-v1-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2023/11/26/meson-build-v1-3-0-1-released/' },
    { from: '/blog/2024/04/01/meson-build-v1-3-2-1-released/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/blog/2024/04/01/meson-build-v1-3-2-1-released/' },
    { from: '/blog/2022/09/25/mingw-w64-gcc-v11-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2022/09/25/mingw-w64-gcc-v11-3-0-1-released/' },
    { from: '/blog/2024/07/28/mingw-w64-gcc-v11-5-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2024/07/28/mingw-w64-gcc-v11-5-0-1-released/' },
    { from: '/blog/2023/01/03/mingw-w64-gcc-v12-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2023/01/03/mingw-w64-gcc-v12-2-0-1-released/' },
    { from: '/blog/2023/09/01/mingw-w64-gcc-v12-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2023/09/01/mingw-w64-gcc-v12-3-0-1-released/' },
    { from: '/blog/2024/06/28/mingw-w64-gcc-v12-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2024/06/28/mingw-w64-gcc-v12-4-0-1-released/' },
    { from: '/blog/2023/09/01/mingw-w64-gcc-v13-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2023/09/01/mingw-w64-gcc-v13-2-0-1-released/' },
    { from: '/blog/2024/06/28/mingw-w64-gcc-v13-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2024/06/28/mingw-w64-gcc-v13-3-0-1-released/' },
    { from: '/blog/2024/06/27/mingw-w64-gcc-v14-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/blog/2024/06/27/mingw-w64-gcc-v14-1-0-1-released/' },
    { from: '/blog/2020/09/28/ninja-build-v1-10-0-1-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2020/09/28/ninja-build-v1-10-0-1-released/' },
    { from: '/blog/2020/09/28/ninja-build-v1-10-1-1-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2020/09/28/ninja-build-v1-10-1-1-released/' },
    { from: '/blog/2020/12/19/ninja-build-v1-10-2-1-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2020/12/19/ninja-build-v1-10-2-1-released/' },
    { from: '/blog/2021/03/16/ninja-build-v1-10-2-2-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2021/03/16/ninja-build-v1-10-2-2-released/' },
    { from: '/blog/2021/04/28/ninja-build-v1-10-2-3-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2021/04/28/ninja-build-v1-10-2-3-released/' },
    { from: '/blog/2021/10/19/ninja-build-v1-10-2-4-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2021/10/19/ninja-build-v1-10-2-4-released/' },
    { from: '/blog/2021/12/06/ninja-build-v1-10-2-5-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2021/12/06/ninja-build-v1-10-2-5-released/' },
    { from: '/blog/2022/05/17/ninja-build-v1-11-0-1-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2022/05/17/ninja-build-v1-11-0-1-released/' },
    { from: '/blog/2022/08/31/ninja-build-v1-11-1-1-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2022/08/31/ninja-build-v1-11-1-1-released/' },
    { from: '/blog/2023/01/23/ninja-build-v1-11-1-2-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2023/01/23/ninja-build-v1-11-1-2-released/' },
    { from: '/blog/2023/09/05/ninja-build-v1-11-1-3-released/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/blog/2023/09/05/ninja-build-v1-11-1-3-released/' },
    { from: '/blog/2018/10/20/openocd-v0-10-0-10-20181020-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2018/10/20/openocd-v0-10-0-10-20181020-released/' },
    { from: '/blog/2019/01/18/openocd-v0-10-0-11-20190118-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2019/01/18/openocd-v0-10-0-11-20190118-released/' },
    { from: '/blog/2019/04/22/openocd-v0-10-0-12-20190422-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2019/04/22/openocd-v0-10-0-12-20190422-released/' },
    { from: '/blog/2019/07/17/openocd-v0-10-0-13-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2019/07/17/openocd-v0-10-0-13-released/' },
    { from: '/blog/2020/06/24/openocd-v0-10-0-14-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2020/06/24/openocd-v0-10-0-14-released/' }, // ?
    { from: '/blog/2020/10/13/openocd-v0-10-0-15-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2020/10/13/openocd-v0-10-0-15-released/' },
    { from: '/blog/2016/10/28/openocd-v0-10-0-20161028-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2016/10/28/openocd-v0-10-0-20161028-dev-released/' },
    { from: '/blog/2017/01/24/openocd-v0-10-0-20170124-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2017/01/24/openocd-v0-10-0-20170124-released/' },
    { from: '/blog/2017/04/19/openocd-v0-10-0-20170418-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2017/04/19/openocd-v0-10-0-20170418-released/' }, // ?
    { from: '/blog/2017/08/26/openocd-v0-10-0-3-20170826-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2017/08/26/openocd-v0-10-0-3-20170826-dev-released/' },
    { from: '/blog/2017/10/04/openocd-v0-10-0-4-20171004-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2017/10/04/openocd-v0-10-0-4-20171004-dev-released/' },
    { from: '/blog/2017/11/10/openocd-v0-10-0-5-20171110-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2017/11/10/openocd-v0-10-0-5-20171110-released/' },
    { from: '/blog/2018/01/12/openocd-v0-10-0-6-20180112-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2018/01/12/openocd-v0-10-0-6-20180112-released/' },
    { from: '/blog/2018/01/23/openocd-v0-10-0-7-20180123-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2018/01/23/openocd-v0-10-0-7-20180123-released/' },
    { from: '/blog/2018/05/13/openocd-v0-10-0-8-20180512-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2018/05/13/openocd-v0-10-0-8-20180512-released/' }, // ?
    { from: '/blog/2018/10/16/openocd-v0-10-0-9-20181016-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2018/10/16/openocd-v0-10-0-9-20181016-released/' },
    { from: '/blog/2021/03/15/openocd-v0-11-0-1-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2021/03/15/openocd-v0-11-0-1-released/' },
    { from: '/blog/2021/10/16/openocd-v0-11-0-2-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2021/10/16/openocd-v0-11-0-2-released/' },
    { from: '/blog/2021/10/17/openocd-v0-11-0-2-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2021/10/16/openocd-v0-11-0-2-released/' }, // R
    { from: '/blog/2021/12/07/openocd-v0-11-0-3-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2021/12/07/openocd-v0-11-0-3-released/' },
    { from: '/blog/2022/03/25/openocd-v0-11-0-4-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2022/03/25/openocd-v0-11-0-4-released/' },
    { from: '/blog/2022/09/01/openocd-v0-11-0-5-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2022/09/01/openocd-v0-11-0-5-released/' },
    { from: '/blog/2023/01/30/openocd-v0-12-0-1-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2023/01/30/openocd-v0-12-0-1-released/' },
    { from: '/blog/2023/09/04/openocd-v0-12-0-2-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2023/09/04/openocd-v0-12-0-2-released/' },
    { from: '/blog/2024/04/02/openocd-v0-12-0-3-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2024/04/02/openocd-v0-12-0-3-released/' },
    { from: '/blog/2015/10/28/openocd-v0.10.0-20151028-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/10/28/openocd-v0.10.0-20151028-dev-released/' },
    { from: '/blog/2016/01/11/openocd-v0.10.0-201601101000-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2016/01/11/openocd-v0.10.0-201601101000-dev-released/' },
    { from: '/blog/2015/01/19/openocd-v0.8.0-20150119-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/01/19/openocd-v0.8.0-20150119-released/' },
    { from: '/blog/2015/01/31/openocd-v0.8.0-20150131-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/01/31/openocd-v0.8.0-20150131-released/' },
    { from: '/blog/2015/03/20/openocd-v0.8.0-20150320-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/03/20/openocd-v0.8.0-20150320-released/' },
    { from: '/blog/2015/03/24/openocd-v0.8.0-20150324-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/03/24/openocd-v0.8.0-20150324-released/' },
    { from: '/blog/2015/03/20/openocd-v0.9.0-20150320-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/03/20/openocd-v0.9.0-20150320-released/' },
    { from: '/blog/2015/03/24/openocd-v0.9.0-20150324-dev-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/03/24/openocd-v0.9.0-20150324-dev-released/' },
    { from: '/blog/2015/05/19/openocd-v0.9.0-20150519-released/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/blog/2015/05/19/openocd-v0.9.0-20150519-released/' },
    { from: '/blog/2022/10/24/patchelf-v0-15-0-1-released/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/blog/2022/10/24/patchelf-v0-15-0-1-released/' },
    { from: '/blog/2022/12/27/patchelf-v0-16-1-1-released/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/blog/2022/12/27/patchelf-v0-16-1-1-released/' },
    { from: '/blog/2022/12/27/patchelf-v0-17-0-1-released/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/blog/2022/12/27/patchelf-v0-17-0-1-released/' },
    { from: '/blog/2023/01/23/patchelf-v0-17-2-1-released/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/blog/2023/01/23/patchelf-v0-17-2-1-released/' },
    { from: '/blog/2023/09/05/patchelf-v0-18-0-1-released/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/blog/2023/09/05/patchelf-v0-18-0-1-released/' },
    { from: '/blog/2022/10/25/pkg-config-v0-29-2-1-released/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/blog/2022/10/25/pkg-config-v0-29-2-1-released/' },
    { from: '/blog/2023/01/29/pkg-config-v0-29-2-2-released/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/blog/2023/01/29/pkg-config-v0-29-2-2-released/' },
    { from: '/blog/2023/09/06/pkg-config-v0-29-2-3-released/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/blog/2023/09/06/pkg-config-v0-29-2-3-released/' },
    { from: '/blog/2020/10/14/qemu-arm-v2-8-0-10-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2020/10/14/qemu-arm-v2-8-0-10-released/' },
    { from: '/blog/2020/12/20/qemu-arm-v2-8-0-11-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2020/12/20/qemu-arm-v2-8-0-11-released/' },
    { from: '/blog/2021/02/02/qemu-arm-v2-8-0-12-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2021/02/02/qemu-arm-v2-8-0-12-released/' },
    { from: '/blog/2021/10/17/qemu-arm-v2-8-0-13-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2021/10/17/qemu-arm-v2-8-0-13-released/' },
    { from: '/blog/2019/07/22/qemu-arm-v2-8-0-7-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2019/07/22/qemu-arm-v2-8-0-7-released/' },
    { from: '/blog/2019/11/05/qemu-arm-v2-8-0-8-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2019/11/05/qemu-arm-v2-8-0-8-released/' }, // ?
    { from: '/blog/2020/07/01/qemu-arm-v2-8-0-9-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2020/07/01/qemu-arm-v2-8-0-9-released/' },
    { from: '/blog/2022/01/13/qemu-arm-v6-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2022/01/13/qemu-arm-v6-2-0-1-released/' },
    { from: '/blog/2022/01/19/qemu-arm-v6-2-0-2-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2022/01/19/qemu-arm-v6-2-0-2-released/' },
    { from: '/blog/2022/05/04/qemu-arm-v7-0-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2022/05/04/qemu-arm-v7-0-0-1-released/' },
    { from: '/blog/2022/05/05/qemu-arm-v7-0-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2022/05/04/qemu-arm-v7-0-0-1-released/' }, // R
    { from: '/blog/2022/09/06/qemu-arm-v7-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2022/09/06/qemu-arm-v7-1-0-1-released/' },
    { from: '/blog/2023/01/31/qemu-arm-v7-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2023/01/31/qemu-arm-v7-2-0-1-released/' },
    { from: '/blog/2023/09/03/qemu-arm-v7-2-5-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2023/09/03/qemu-arm-v7-2-5-1-released/' },
    { from: '/blog/2024/04/02/qemu-arm-v8-2-2-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2024/04/02/qemu-arm-v8-2-2-1-released/' },
    { from: '/blog/2022/05/04/qemu-riscv-v7-0-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/blog/2022/05/04/qemu-riscv-v7-0-0-1-released/' },
    { from: '/blog/2022/09/06/qemu-riscv-v7-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/blog/2022/09/06/qemu-riscv-v7-1-0-1-released/' },
    { from: '/blog/2023/01/31/qemu-riscv-v7-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/blog/2023/01/31/qemu-riscv-v7-2-0-1-released/' },
    { from: '/blog/2023/09/03/qemu-riscv-v7-2-5-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/blog/2023/09/03/qemu-riscv-v7-2-5-1-released/' },
    { from: '/blog/2024/04/02/qemu-riscv-v8-2-2-1-released/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/blog/2024/04/02/qemu-riscv-v8-2-2-1-released/' },
    { from: '/blog/2015/04/04/qemu-v2-2-92-20150404-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/04/04/qemu-v2-2-92-20150404-released/' },
    { from: '/blog/2015/08/02/qemu-v2-3-50-20150801-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/08/02/qemu-v2-3-50-20150801-released/' },
    { from: '/blog/2015/08/04/qemu-v2-3-50-20150804-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/08/04/qemu-v2-3-50-20150804-released/' },
    { from: '/blog/2015/08/05/qemu-v2-3-50-20150805-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/08/05/qemu-v2-3-50-20150805-released/' },
    { from: '/blog/2015/08/16/qemu-v2-3-50-20150816-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/08/16/qemu-v2-3-50-20150816-released/' },
    { from: '/blog/2015/10/29/qemu-v2-4-50-20151029-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2015/10/29/qemu-v2-4-50-20151029-released/' },
    { from: '/blog/2016/07/28/qemu-v2-6-0-20160728-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2016/07/28/qemu-v2-6-0-20160728-released/' },
    { from: '/blog/2016/10/29/qemu-v2-7-0-20161029-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2016/10/29/qemu-v2-7-0-20161029-released/' },
    { from: '/blog/2016/11/28/qemu-v2-7-0-20161128-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2016/11/28/qemu-v2-7-0-20161128-released/' },
    { from: '/blog/2016/12/27/qemu-v2-8-0-20161227-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2016/12/27/qemu-v2-8-0-20161227-released/' },
    { from: '/blog/2018/05/23/qemu-v2-8-0-3-20180523-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2018/05/23/qemu-v2-8-0-3-20180523-released/' },
    { from: '/blog/2019/02/11/qemu-v2-8-0-4-20190211-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2019/02/11/qemu-v2-8-0-4-20190211-released/' },
    { from: '/blog/2019/04/24/qemu-v2-8-0-5-20190424-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2019/04/24/qemu-v2-8-0-5-20190424-released/' },
    { from: '/blog/2019/05/17/qemu-v2-8-0-6-20190517-released/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/blog/2019/05/17/qemu-v2-8-0-6-20190517-released/' },
    { from: '/blog/2022/10/21/realpath-v9-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/blog/2022/10/21/realpath-v9-1-0-1-released/' },
    { from: '/blog/2023/01/29/realpath-v9-1-0-2-released/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/blog/2023/01/29/realpath-v9-1-0-2-released/' },
    { from: '/blog/2023/09/05/realpath-v9-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/blog/2023/09/05/realpath-v9-4-0-1-released/' },
    { from: '/blog/2022/05/14/riscv-none-elf-gcc-v11-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2022/05/14/riscv-none-elf-gcc-v11-3-0-1-released/' },
    { from: '/blog/2024/07/27/riscv-none-elf-gcc-v11-5-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2024/07/27/riscv-none-elf-gcc-v11-5-0-1-released/' },
    { from: '/blog/2022/05/15/riscv-none-elf-gcc-v12-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2022/05/15/riscv-none-elf-gcc-v12-1-0-1-released/' },
    { from: '/blog/2022/05/18/riscv-none-elf-gcc-v12-1-0-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2022/05/18/riscv-none-elf-gcc-v12-1-0-2-released/' },
    { from: '/blog/2022/08/30/riscv-none-elf-gcc-v12-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2022/08/30/riscv-none-elf-gcc-v12-2-0-1-released/' },
    { from: '/blog/2023/02/02/riscv-none-elf-gcc-v12-2-0-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/02/05/riscv-none-elf-gcc-v12-2-0-3-released/' }, // R
    { from: '/blog/2023/02/05/riscv-none-elf-gcc-v12-2-0-3-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/02/05/riscv-none-elf-gcc-v12-2-0-3-released/' },
    { from: '/blog/2023/08/25/riscv-none-elf-gcc-v12-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/08/25/riscv-none-elf-gcc-v12-3-0-1-released/' },
    { from: '/blog/2023/09/22/riscv-none-elf-gcc-v12-3-0-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/09/22/riscv-none-elf-gcc-v12-3-0-2-released/' },
    { from: '/blog/2024/07/26/riscv-none-elf-gcc-v12-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2024/07/26/riscv-none-elf-gcc-v12-4-0-1-released/' },
    { from: '/blog/2023/08/24/riscv-none-elf-gcc-v13-2-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/08/24/riscv-none-elf-gcc-v13-2-0-1-released/' },
    { from: '/blog/2023/09/25/riscv-none-elf-gcc-v13-2-0-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2023/09/25/riscv-none-elf-gcc-v13-2-0-2-released/' },
    { from: '/blog/2024/07/25/riscv-none-elf-gcc-v13-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2024/07/25/riscv-none-elf-gcc-v13-3-0-1-released/' },
    { from: '/blog/2024/07/24/riscv-none-elf-gcc-v14-1-0-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2024/07/24/riscv-none-elf-gcc-v14-1-0-1-released/' },
    { from: '/blog/2021/01/05/riscv-none-embed-gcc-v10-1-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2021/01/05/riscv-none-embed-gcc-v10-1-0-1-1-released/' },
    { from: '/blog/2021/11/04/riscv-none-embed-gcc-v10-1-0-1-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2021/11/04/riscv-none-embed-gcc-v10-1-0-1-2-released/' },
    { from: '/blog/2021/11/06/riscv-none-embed-gcc-v10-2-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2021/11/06/riscv-none-embed-gcc-v10-2-0-1-1-released/' },
    { from: '/blog/2021/11/11/riscv-none-embed-gcc-v10-2-0-1-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2021/11/11/riscv-none-embed-gcc-v10-2-0-1-2-released/' },
    { from: '/blog/2019/07/31/riscv-none-embed-gcc-v8-2-0-3-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2019/07/31/riscv-none-embed-gcc-v8-2-0-3-1-released/' },
    { from: '/blog/2019/11/01/riscv-none-embed-gcc-v8-3-0-1-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2019/11/01/riscv-none-embed-gcc-v8-3-0-1-1-released/' },
    { from: '/blog/2020/07/04/riscv-none-embed-gcc-v8-3-0-1-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2020/07/04/riscv-none-embed-gcc-v8-3-0-1-2-released/' },
    { from: '/blog/2020/10/10/riscv-none-embed-gcc-v8-3-0-2-1-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2020/10/10/riscv-none-embed-gcc-v8-3-0-2-1-released/' },
    { from: '/blog/2020/10/13/riscv-none-embed-gcc-v8-3-0-2-2-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2020/10/13/riscv-none-embed-gcc-v8-3-0-2-2-released/' },
    { from: '/blog/2020/10/25/riscv-none-embed-gcc-v8-3-0-2-3-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2020/10/25/riscv-none-embed-gcc-v8-3-0-2-3-released/' },
    { from: '/blog/2017/07/02/riscv-none-gcc-v7-1-1-1-20170702-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2017/07/02/riscv-none-gcc-v7-1-1-1-20170702-released/' },
    { from: '/blog/2017/09/13/riscv-none-gcc-v7-1-1-2-20170912-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2017/09/13/riscv-none-gcc-v7-1-1-2-20170912-released/' },
    { from: '/blog/2017/11/09/riscv-none-gcc-v7-2-0-1-20171109-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2017/11/09/riscv-none-gcc-v7-2-0-1-20171109-released/' },
    { from: '/blog/2018/01/13/riscv-none-gcc-v7-2-0-2-20180111-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2018/01/13/riscv-none-gcc-v7-2-0-2-20180111-released/' },
    { from: '/blog/2018/05/06/riscv-none-gcc-v7-2-0-3-20180506-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2018/05/06/riscv-none-gcc-v7-2-0-3-20180506-released/' },
    { from: '/blog/2018/06/07/riscv-none-gcc-v7-2-0-4-20180606-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2018/06/06/riscv-none-gcc-v7-2-0-4-20180606-released/' }, // ?
    { from: '/blog/2018/10/19/riscv-none-gcc-v8-1-0-2-20181019-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2018/10/19/riscv-none-gcc-v8-1-0-2-20181019-released/' },
    { from: '/blog/2019/04/25/riscv-none-gcc-v8-2-0-2-1-20190425-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2019/04/25/riscv-none-gcc-v8-2-0-2-1-20190425-released/' },
    { from: '/blog/2019/05/21/riscv-none-gcc-v8-2-0-2-2-20190521-released/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/blog/2019/05/21/riscv-none-gcc-v8-2-0-2-2-20190521-released/' },
    { from: '/blog/2022/12/11/sed-v4-9-0-1-released/', to: 'https://xpack-dev-tools.github.io/sed-xpack/blog/2022/12/11/sed-v4-9-0-1-released/' },
    { from: '/blog/2023/01/29/sed-v4-9-0-2-released/', to: 'https://xpack-dev-tools.github.io/sed-xpack/blog/2023/01/29/sed-v4-9-0-2-released/' },
    { from: '/blog/2023/09/06/sed-v4-9-0-3-released/', to: 'https://xpack-dev-tools.github.io/sed-xpack/blog/2023/09/06/sed-v4-9-0-3-released/' },
    { from: '/blog/2023/08/22/texinfo-v7-0-3-1-released/', to: 'https://xpack-dev-tools.github.io/texinfo-xpack/blog/2023/08/22/texinfo-v7-0-3-1-released/' },

    { from: '/blog/2021/04/09/vscode-xpack-v0-1-5-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/09/vscode-xpack-v0-1-5-released/' },
    { from: '/blog/2021/04/14/vscode-xpack-v0-2-2-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/14/vscode-xpack-v0-2-2-released/' },
    { from: '/blog/2021/04/19/vscode-xpack-v0-3-2-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/19/vscode-xpack-v0-3-2-released/' },
    { from: '/blog/2021/05/04/vscode-xpack-v0-4-10-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/05/04/vscode-xpack-v0-4-10-released/' },
    { from: '/blog/2021/05/05/vscode-xpack-v0-4-10-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/05/05/vscode-xpack-v0-4-10-released/' },
    { from: '/blog/2021/05/05/vscode-xpack-v0-4-11-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/05/05/vscode-xpack-v0-4-11-released/' },
    { from: '/blog/2021/05/05/vscode-xpack-v0-4-12-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/05/05/vscode-xpack-v0-4-12-released/' },
    { from: '/blog/2021/05/12/vscode-xpack-v0-4-13-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/05/12/vscode-xpack-v0-4-13-released/' },
    { from: '/blog/2021/06/20/vscode-xpack-v0-4-14-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/06/20/vscode-xpack-v0-4-14-released/' },
    { from: '/blog/2021/07/15/vscode-xpack-v0-4-15-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/07/15/vscode-xpack-v0-4-15-released/' },
    { from: '/blog/2021/08/10/vscode-xpack-v0-4-16-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/08/10/vscode-xpack-v0-4-16-released/' },
    { from: '/blog/2022/04/17/vscode-xpack-v0-4-17-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2022/04/17/vscode-xpack-v0-4-17-released/' },
    { from: '/blog/2022/05/21/vscode-xpack-v0-4-18-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2022/05/21/vscode-xpack-v0-4-18-released/' },
    { from: '/blog/2022/07/30/vscode-xpack-v0-4-19-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2022/07/30/vscode-xpack-v0-4-19-released/' },
    { from: '/blog/2022/10/20/vscode-xpack-v0-4-20-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2022/10/20/vscode-xpack-v0-4-20-released/' },
    { from: '/blog/2023/02/14/vscode-xpack-v0-4-21-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2023/02/14/vscode-xpack-v0-4-21-released/' },
    { from: '/blog/2023/02/16/vscode-xpack-v0-4-22-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2023/02/16/vscode-xpack-v0-4-22-released/' },
    { from: '/blog/2021/04/22/vscode-xpack-v0-4-4-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/22/vscode-xpack-v0-4-4-released/' },
    { from: '/blog/2021/04/24/vscode-xpack-v0-4-7-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/24/vscode-xpack-v0-4-7-released/' },
    { from: '/blog/2021/04/27/vscode-xpack-v0-4-8-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/27/vscode-xpack-v0-4-8-released/' },
    { from: '/blog/2021/04/27/vscode-xpack-v0-4-9-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/27/vscode-xpack-v0-4-9-released/' },
    { from: '/blog/2021/04/28/vscode-xpack-v0-4-9-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2021/04/28/vscode-xpack-v0-4-9-released/' },
    { from: '/blog/2023/06/16/vscode-xpack-v0-5-0-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2023/06/16/vscode-xpack-v0-5-0-released/' },
    { from: '/blog/2023/06/20/vscode-xpack-v0-5-1-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2023/06/20/vscode-xpack-v0-5-1-released/' },
    { from: '/blog/2024/02/20/vscode-xpack-v0-5-2-released/', to: 'https://xpack.github.io/web-archive-jekyll/blog/2024/02/20/vscode-xpack-v0-5-2-released/' },

    { from: '/blog/2018/01/03/windows-build-tools-v2-10-20180103-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2018/01/03/windows-build-tools-v2-10-20180103-released/' },
    { from: '/blog/2018/04/28/windows-build-tools-v2-11-20180428-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2018/04/28/windows-build-tools-v2-11-20180428-released/' },
    { from: '/blog/2020/07/14/windows-build-tools-v2-12-2-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2020/07/14/windows-build-tools-v2-12-2-released/' },
    { from: '/blog/2019/04/22/windows-build-tools-v2-12-20190422-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2019/04/22/windows-build-tools-v2-12-20190422-released/' },
    { from: '/blog/2016/11/22/windows-build-tools-v2-8-20161122-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2016/11/22/windows-build-tools-v2-8-20161122-released/' },
    { from: '/blog/2017/06/29/windows-build-tools-v2-9-20170629-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2017/06/29/windows-build-tools-v2-9-20170629-released/' },
    { from: '/blog/2014/12/02/windows-build-tools-v2.0-20141202-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2014/12/02/windows-build-tools-v2.0-20141202-released/' },
    { from: '/blog/2015/01/21/windows-build-tools-v2.1-20150121-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/01/21/windows-build-tools-v2.1-20150121-released/' },
    { from: '/blog/2015/01/23/windows-build-tools-v2.2-20150123-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/01/23/windows-build-tools-v2.2-20150123-released/' },
    { from: '/blog/2015/01/24/windows-build-tools-v2.3-20150124-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/01/24/windows-build-tools-v2.3-20150124-released/' },
    { from: '/blog/2015/03/21/windows-build-tools-v2.4-20150321-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/03/21/windows-build-tools-v2.4-20150321-released/' },
    { from: '/blog/2015/03/24/windows-build-tools-v2.4-20150324-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/03/24/windows-build-tools-v2.4-20150324-released/' },
    { from: '/blog/2015/07/15/windows-build-tools-v2.6-20150715-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2015/07/15/windows-build-tools-v2.6-20150715-released/' },
    { from: '/blog/2016/10/28/windows-build-tools-v2.7-20161028-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2016/10/28/windows-build-tools-v2.7-20161028-released/' },
    { from: '/blog/2020/12/27/windows-build-tools-v4-2-1-1-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2020/12/27/windows-build-tools-v4-2-1-1-released/' },
    { from: '/blog/2020/12/28/windows-build-tools-v4-2-1-2-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2020/12/28/windows-build-tools-v4-2-1-2-released/' },
    { from: '/blog/2021/10/18/windows-build-tools-v4-2-1-3-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2021/10/18/windows-build-tools-v4-2-1-3-released/' },
    { from: '/blog/2022/03/05/windows-build-tools-v4-3-0-1-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2022/03/05/windows-build-tools-v4-3-0-1-released/' },
    { from: '/blog/2023/01/29/windows-build-tools-v4-4-0-1-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2023/01/29/windows-build-tools-v4-4-0-1-released/' },
    { from: '/blog/2023/09/05/windows-build-tools-v4-4-1-1-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2023/09/05/windows-build-tools-v4-4-1-1-released/' },
    { from: '/blog/2023/11/14/windows-build-tools-v4-4-1-2-released/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/blog/2023/11/14/windows-build-tools-v4-4-1-2-released/' },
    { from: '/blog/2022/09/26/wine-v6-17-0-1-released/', to: 'https://xpack-dev-tools.github.io/wine-xpack/blog/2022/09/26/wine-v6-17-0-1-released/' },
    { from: '/blog/2023/01/03/wine-v7-22-0-1-released/', to: 'https://xpack-dev-tools.github.io/wine-xpack/blog/2023/01/03/wine-v7-22-0-1-released/' },
    { from: '/blog/2023/09/04/wine-v8-0-2-1-released/', to: 'https://xpack-dev-tools.github.io/wine-xpack/blog/2023/09/04/wine-v8-0-2-1-released/' },

    { from: '/blog/2022/10/03/xbb-bootstrap-v4-0-released/', to: 'https://xpack-dev-tools.github.io/xbb-bootstrap-xpack/blog/2022/10/03/xbb-bootstrap-v4-0-released/' }, // ?
    { from: '/blog/2021/10/13/xbb-v3.3-released/', to: 'https://xpack-dev-tools.github.io/xbb-xpack/blog/2021/10/13/xbb-v3.3-released/' }, // ?
    { from: '/blog/2021/12/16/xbb-v3.4-released/', to: 'https://xpack-dev-tools.github.io/xbb-xpack/blog/2021/12/16/xbb-v3.4-released/' }, // ?
    { from: '/blog/2023/02/07/xbb-v5.0.0-released/', to: 'https://xpack-dev-tools.github.io/xbb-xpack/blog/2023/02/07/xbb-v5.0.0-released/' }, // ?
    { from: '/blog/2023/09/11/xbb-v5.1.1-released/', to: 'https://xpack-dev-tools.github.io/xbb-xpack/blog/2023/09/11/xbb-v5.1.1-released/' }, // ?

    { from: '/blog/2021/05/12/xpm-v0-10-1-released/', to: 'https://xpack.github.io/xpm/blog/2021/05/12/xpm-v0-10-1-released/' },
    { from: '/blog/2021/05/19/xpm-v0-10-2-released/', to: 'https://xpack.github.io/xpm/blog/2021/05/19/xpm-v0-10-2-released/' },
    { from: '/blog/2021/05/26/xpm-v0-10-3-released/', to: 'https://xpack.github.io/xpm/blog/2021/05/26/xpm-v0-10-3-released/' },
    { from: '/blog/2021/06/20/xpm-v0-10-5-released/', to: 'https://xpack.github.io/xpm/blog/2021/06/20/xpm-v0-10-5-released/' },
    { from: '/blog/2021/07/20/xpm-v0-10-6-released/', to: 'https://xpack.github.io/xpm/blog/2021/07/21/xpm-v0-10-6-released/' }, // R date
    { from: '/blog/2021/08/09/xpm-v0-10-7-released/', to: 'https://xpack.github.io/xpm/blog/2021/08/09/xpm-v0-10-7-released/' },
    { from: '/blog/2021/09/03/xpm-v0-10-8-released/', to: 'https://xpack.github.io/xpm/blog/2021/09/05/xpm-v0-10-8-released/' }, // R date
    { from: '/blog/2021/12/26/xpm-v0-11-0-released/', to: 'https://xpack.github.io/xpm/blog/2021/12/26/xpm-v0-11-0-released/' },
    { from: '/blog/2021/12/30/xpm-v0-12-1-released/', to: 'https://xpack.github.io/xpm/blog/2022/01/14/xpm-v0-12-9-released/' }, // R
    { from: '/blog/2022/04/03/xpm-v0-12-10-released/', to: 'https://xpack.github.io/xpm/blog/2022/04/03/xpm-v0-12-10-released/' },
    { from: '/blog/2021/12/28/xpm-v0-12-2-released/', to: 'https://xpack.github.io/xpm/blog/2022/01/14/xpm-v0-12-9-released/' }, // R
    { from: '/blog/2021/01/06/xpm-v0-12-6-released/', to: 'https://xpack.github.io/xpm/blog/2022/01/14/xpm-v0-12-9-released/' }, // R
    { from: '/blog/2022/01/14/xpm-v0-12-9-released/', to: 'https://xpack.github.io/xpm/blog/2022/01/14/xpm-v0-12-9-released/' },
    { from: '/blog/2022/04/17/xpm-v0-13-0-released/', to: 'https://xpack.github.io/xpm/blog/2022/04/18/xpm-v0-13-1-released/' }, // R
    { from: '/blog/2022/04/18/xpm-v0-13-1-released/', to: 'https://xpack.github.io/xpm/blog/2022/04/18/xpm-v0-13-1-released/' },
    { from: '/blog/2022/04/30/xpm-v0-13-2-released/', to: 'https://xpack.github.io/xpm/blog/2022/04/30/xpm-v0-13-2-released/' },
    { from: '/blog/2022/05/03/xpm-v0-13-3-released/', to: 'https://xpack.github.io/xpm/blog/2022/05/03/xpm-v0-13-3-released/' },
    { from: '/blog/2022/05/18/xpm-v0-13-4-released/', to: 'https://xpack.github.io/xpm/blog/2022/05/18/xpm-v0-13-4-released/' },
    { from: '/blog/2022/05/26/xpm-v0-13-5-released/', to: 'https://xpack.github.io/xpm/blog/2022/05/26/xpm-v0-13-5-released/' },
    { from: '/blog/2022/06/15/xpm-v0-13-6-released/', to: 'https://xpack.github.io/xpm/blog/2022/06/15/xpm-v0-13-6-released/' },
    { from: '/blog/2022/07/13/xpm-v0-13-7-released/', to: 'https://xpack.github.io/xpm/blog/2022/07/13/xpm-v0-13-7-released/' },
    { from: '/blog/2022/08/15/xpm-v0-14-0-released/', to: 'https://xpack.github.io/xpm/blog/2022/08/15/xpm-v0-14-0-released/' },
    { from: '/blog/2022/10/16/xpm-v0-14-2-released/', to: 'https://xpack.github.io/xpm/blog/2022/10/16/xpm-v0-14-2-released/' },
    { from: '/blog/2023/01/03/xpm-v0-14-3-released/', to: 'https://xpack.github.io/xpm/blog/2023/01/03/xpm-v0-14-3-released/' },
    { from: '/blog/2023/01/23/xpm-v0-14-4-released/', to: 'https://xpack.github.io/xpm/blog/2023/02/07/xpm-v0-15-0-released/' }, // R
    { from: '/blog/2023/02/07/xpm-v0-14-9-released/', to: 'https://xpack.github.io/xpm/blog/2023/02/07/xpm-v0-14-9-released/' },
    { from: '/blog/2023/02/07/xpm-v0-15-0-released/', to: 'https://xpack.github.io/xpm/blog/2023/03/02/xpm-v0-15-0-released/' }, // R
    { from: '/blog/2023/03/02/xpm-v0-15-0-released/', to: 'https://xpack.github.io/xpm/blog/2023/03/02/xpm-v0-15-0-released/' }, // R date
    { from: '/blog/2023/03/19/xpm-v0-15-1-released/', to: 'https://xpack.github.io/xpm/blog/2023/05/19/xpm-v0-15-1-released/' }, // R
    { from: '/blog/2023/05/19/xpm-v0-15-1-released/', to: 'https://xpack.github.io/xpm/blog/2023/05/19/xpm-v0-15-1-released/' },
    { from: '/blog/2023/05/23/xpm-v0-15-2-released/', to: 'https://xpack.github.io/xpm/blog/2023/05/23/xpm-v0-15-2-released/' },
    { from: '/blog/2023/06/03/xpm-v0-16-1-released/', to: 'https://xpack.github.io/xpm/blog/2023/06/03/xpm-v0-16-1-released/' },
    { from: '/blog/2023/07/02/xpm-v0-16-2-released/', to: 'https://xpack.github.io/xpm/blog/2023/07/02/xpm-v0-16-2-released/' },
    { from: '/blog/2023/07/23/xpm-v0-16-3-released/', to: 'https://xpack.github.io/xpm/blog/2023/07/23/xpm-v0-16-3-released/' },
    { from: '/blog/2023/09/12/xpm-v0-16-4-released/', to: 'https://xpack.github.io/xpm/blog/2023/09/12/xpm-v0-16-4-released/' },
    { from: '/blog/2023/09/22/xpm-v0-16-5-released/', to: 'https://xpack.github.io/xpm/blog/2023/09/22/xpm-v0-16-5-released/' },
    { from: '/blog/2023/09/26/xpm-v0-17-0-released/', to: 'https://xpack.github.io/xpm/blog/2023/09/26/xpm-v0-17-0-released/' },
    { from: '/blog/2023/11/17/xpm-v0-18-0-released/', to: 'https://xpack.github.io/xpm/blog/2023/11/17/xpm-v0-18-0-released/' },
    { from: '/blog/2024/02/27/xpm-v0-19-0-released/', to: 'https://xpack.github.io/xpm/blog/2024/02/27/xpm-v0-19-0-released/' },
    { from: '/blog/2024/03/10/xpm-v0-19-1-released/', to: 'https://xpack.github.io/xpm/blog/2024/03/10/xpm-v0-19-1-released/' },
    { from: '/blog/2024/07/29/xpm-v0-19-2-released/', to: 'https://xpack.github.io/xpm/blog/2024/07/29/xpm-v0-19-2-released/' },
    { from: '/blog/2021/01/27/xpm-v0-8-0-released/', to: 'https://xpack.github.io/xpm/blog/2021/01/30/xpm-v0-8-1-released/' }, // R
    { from: '/blog/2021/01/30/xpm-v0-8-1-released/', to: 'https://xpack.github.io/xpm/blog/2021/01/30/xpm-v0-8-1-released/' },
    { from: '/blog/2021/03/27/xpm-v0-9-0-released/', to: 'https://xpack.github.io/xpm/blog/2021/03/27/xpm-v0-9-0-released/' },
    { from: '/blog/2021/03/28/xpm-v0-9-1-released/', to: 'https://xpack.github.io/xpm/blog/2021/03/28/xpm-v0-9-1-released/' },

    // /dev-tools/ posts.
    { from: '/dev-tools/aarch64-none-elf-gcc/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/' },
    { from: '/dev-tools/aarch64-none-elf-gcc/faq/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/docs/faq/' },
    { from: '/dev-tools/aarch64-none-elf-gcc/install/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/docs/install/' },
    { from: '/dev-tools/aarch64-none-elf-gcc/support/', to: 'https://xpack-dev-tools.github.io/aarch64-none-elf-gcc-xpack/docs/support/' },
    { from: '/dev-tools/arm-none-eabi-gcc/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/' },
    { from: '/dev-tools/arm-none-eabi-gcc/faq/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/faq/' },
    { from: '/dev-tools/arm-none-eabi-gcc/install/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/install/' },
    { from: '/dev-tools/arm-none-eabi-gcc/python/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/arm-none-eabi-gcc/python/' }, // Archive
    { from: '/dev-tools/arm-none-eabi-gcc/support/', to: 'https://xpack-dev-tools.github.io/arm-none-eabi-gcc-xpack/docs/support/' },
    { from: '/dev-tools/clang/', to: 'https://xpack-dev-tools.github.io/clang-xpack/' },
    { from: '/dev-tools/clang/faq/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/faq/' },
    { from: '/dev-tools/clang/install/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/install/' },
    { from: '/dev-tools/clang/predefined-macros/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/clang/predefined-macros/' }, // Archive
    { from: '/dev-tools/clang/support/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/support/' },
    { from: '/dev-tools/clang/tests/16.0.6-1/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/tests/16.0.6-1/' },
    { from: '/dev-tools/clang/tests/17.0.6-2/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/tests/17.0.6-2/' },
    { from: '/dev-tools/clang/tests/17.0.6-3/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/tests/17.0.6-3/' },
    { from: '/dev-tools/clang/tests/18.1.8-1/', to: 'https://xpack-dev-tools.github.io/clang-xpack/docs/tests/18.1.8-1/' },
    { from: '/dev-tools/cmake/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/' },
    { from: '/dev-tools/cmake/faq/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/docs/faq/' },
    { from: '/dev-tools/cmake/install/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/docs/install/' },
    { from: '/dev-tools/cmake/support/', to: 'https://xpack-dev-tools.github.io/cmake-xpack/docs/support/' },
    { from: '/dev-tools/gcc/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/' },
    { from: '/dev-tools/gcc/faq/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/faq/' },
    { from: '/dev-tools/gcc/install/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/install/' },
    { from: '/dev-tools/gcc/predefined-macros/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/gcc/predefined-macros/' }, // Archive
    { from: '/dev-tools/gcc/support/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/support/' },
    { from: '/dev-tools/gcc/tests/11.5.0-1/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/tests/11.5.0-1/' },
    { from: '/dev-tools/gcc/tests/12.4.0-1/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/tests/12.4.0-1/' },
    { from: '/dev-tools/gcc/tests/13.3.0-1/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/tests/13.3.0-1/' },
    { from: '/dev-tools/gcc/tests/14.1.0-1/', to: 'https://xpack-dev-tools.github.io/gcc-xpack/docs/tests/14.1.0-1/' },
    { from: '/dev-tools/m4/', to: 'https://xpack-dev-tools.github.io/m4-xpack/' },
    { from: '/dev-tools/m4/faq/', to: 'https://xpack-dev-tools.github.io/m4-xpack/docs/faq/' },
    { from: '/dev-tools/m4/install/', to: 'https://xpack-dev-tools.github.io/m4-xpack/docs/install/' },
    { from: '/dev-tools/m4/support/', to: 'https://xpack-dev-tools.github.io/m4-xpack/docs/support/' },
    { from: '/dev-tools/meson-build/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/' },
    { from: '/dev-tools/meson-build/faq/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/docs/faq/' },
    { from: '/dev-tools/meson-build/install/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/docs/install/' },
    { from: '/dev-tools/meson-build/support/', to: 'https://xpack-dev-tools.github.io/meson-build-xpack/docs/support/' },
    { from: '/dev-tools/mingw-w64-gcc/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/' },
    { from: '/dev-tools/mingw-w64-gcc/faq/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/faq/' },
    { from: '/dev-tools/mingw-w64-gcc/install/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/install/' },
    { from: '/dev-tools/mingw-w64-gcc/support/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/support/' },
    { from: '/dev-tools/mingw-w64-gcc/tests/11.5.0-1/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/tests/11.5.0-1/' },
    { from: '/dev-tools/mingw-w64-gcc/tests/12.4.0-1/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/tests/12.4.0-1/' },
    { from: '/dev-tools/mingw-w64-gcc/tests/13.3.0-1/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/tests/13.3.0-1/' },
    { from: '/dev-tools/mingw-w64-gcc/tests/14.1.0-1/', to: 'https://xpack-dev-tools.github.io/mingw-w64-gcc-xpack/docs/tests/14.1.0-1/' },
    { from: '/dev-tools/ninja-build/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/' },
    { from: '/dev-tools/ninja-build/faq/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/docs/faq/' },
    { from: '/dev-tools/ninja-build/install/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/docs/install/' },
    { from: '/dev-tools/ninja-build/support/', to: 'https://xpack-dev-tools.github.io/ninja-build-xpack/docs/support/' },
    { from: '/dev-tools/openocd/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/' },
    { from: '/dev-tools/openocd/faq/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/faq/' },
    { from: '/dev-tools/openocd/install/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/install/' },
    { from: '/dev-tools/openocd/support/', to: 'https://xpack-dev-tools.github.io/openocd-xpack/docs/support/' },
    { from: '/dev-tools/patchelf/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/' },
    { from: '/dev-tools/patchelf/faq/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/docs/faq/' },
    { from: '/dev-tools/patchelf/install/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/docs/install/' },
    { from: '/dev-tools/patchelf/support/', to: 'https://xpack-dev-tools.github.io/patchelf-xpack/docs/support/' },
    { from: '/dev-tools/pkg-config/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/' },
    { from: '/dev-tools/pkg-config/faq/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/docs/faq/' },
    { from: '/dev-tools/pkg-config/install/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/docs/install/' },
    { from: '/dev-tools/pkg-config/support/', to: 'https://xpack-dev-tools.github.io/pkg-config-xpack/docs/support/' },
    { from: '/dev-tools/qemu-arm/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/' },
    { from: '/dev-tools/qemu-arm/faq/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/faq/' },
    { from: '/dev-tools/qemu-arm/gnuarmeclipse/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/qemu-arm/gnuarmeclipse/' }, // Archive
    { from: '/dev-tools/qemu-arm/install/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/install/' },
    { from: '/dev-tools/qemu-arm/options/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/options/' }, // ?
    { from: '/dev-tools/qemu-arm/support/', to: 'https://xpack-dev-tools.github.io/qemu-arm-xpack/docs/support/' },
    { from: '/dev-tools/qemu-riscv/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/' },
    { from: '/dev-tools/qemu-riscv/faq/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/docs/faq/' },
    { from: '/dev-tools/qemu-riscv/install/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/docs/install/' },
    { from: '/dev-tools/qemu-riscv/support/', to: 'https://xpack-dev-tools.github.io/qemu-riscv-xpack/docs/support/' },
    { from: '/dev-tools/realpath/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/' },
    { from: '/dev-tools/realpath/faq/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/docs/faq/' },
    { from: '/dev-tools/realpath/install/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/docs/install/' },
    { from: '/dev-tools/realpath/support/', to: 'https://xpack-dev-tools.github.io/realpath-xpack/docs/support/' },
    { from: '/dev-tools/riscv-none-elf-gcc/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/' },
    { from: '/dev-tools/riscv-none-elf-gcc/faq/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/faq/' },
    { from: '/dev-tools/riscv-none-elf-gcc/install/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/install/' },
    { from: '/dev-tools/riscv-none-elf-gcc/support/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/support/' },
    { from: '/dev-tools/riscv-none-embed-gcc/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/' },
    { from: '/dev-tools/riscv-none-embed-gcc/faq/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/faq/' },
    { from: '/dev-tools/riscv-none-embed-gcc/install/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/install/' },
    { from: '/dev-tools/riscv-none-embed-gcc/releases/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/releases/' },
    { from: '/dev-tools/riscv-none-embed-gcc/support/', to: 'https://xpack-dev-tools.github.io/riscv-none-elf-gcc-xpack/docs/support/' },
    { from: '/dev-tools/sed/', to: 'https://xpack-dev-tools.github.io/sed-xpack/' },
    { from: '/dev-tools/sed/faq/', to: 'https://xpack-dev-tools.github.io/sed-xpack/docs/faq/' },
    { from: '/dev-tools/sed/install/', to: 'https://xpack-dev-tools.github.io/sed-xpack/docs/install/' },
    { from: '/dev-tools/sed/support/', to: 'https://xpack-dev-tools.github.io/sed-xpack/docs/support/' },
    { from: '/dev-tools/windows-build-tools/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/' },
    { from: '/dev-tools/windows-build-tools/faq/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/faq/' },
    { from: '/dev-tools/windows-build-tools/install/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/install/' },
    { from: '/dev-tools/windows-build-tools/support/', to: 'https://xpack-dev-tools.github.io/windows-build-tools-xpack/docs/support/' },
    { from: '/dev-tools/wine/', to: 'https://xpack-dev-tools.github.io/wine-xpack/' },
    { from: '/dev-tools/wine/faq/', to: 'https://xpack-dev-tools.github.io/wine-xpack/docs/faq/' },
    { from: '/dev-tools/wine/install/', to: 'https://xpack-dev-tools.github.io/wine-xpack/docs/install/' },
    { from: '/dev-tools/wine/support/', to: 'https://xpack-dev-tools.github.io/wine-xpack/docs/support/' },
    { from: '/dev-tools/xbb-bootstrap/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/xbb-bootstrap/' }, // Archive
    { from: '/dev-tools/xbb-bootstrap/faq/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/xbb-bootstrap/faq/' }, // Archive
    { from: '/dev-tools/xbb-bootstrap/install/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/xbb-bootstrap/install/' }, // Archive
    { from: '/dev-tools/xbb-bootstrap/support/', to: 'https://xpack.github.io/web-archive-jekyll/dev-tools/xbb-bootstrap/support/' }, // Archive

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
