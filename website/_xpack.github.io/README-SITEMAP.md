# List of addresses in the Jekyll site

## Blog posts

```console
$ grep 'https://xpack' sitemap.xml | sed -e 's|    <loc>|- |' -e 's|</loc>||' |  grep '/blog/' | sort -t '/' -k 8,8
- https://xpack.github.io/blog/2022/05/15/aarch64-none-elf-gcc-v11-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2022/05/31/aarch64-none-elf-gcc-v11-2-1-1-2-released/ ✓
- https://xpack.github.io/blog/2022/08/25/aarch64-none-elf-gcc-v11-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2022/08/27/aarch64-none-elf-gcc-v11-3-1-1-2-released/ ✓
- https://xpack.github.io/blog/2023/02/03/aarch64-none-elf-gcc-v12-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/02/05/aarch64-none-elf-gcc-v12-2-1-1-2-released/ ✓
- https://xpack.github.io/blog/2023/08/21/aarch64-none-elf-gcc-v12-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/09/20/aarch64-none-elf-gcc-v12-3-1-2-1-released/ ✓
- https://xpack.github.io/blog/2023/11/08/aarch64-none-elf-gcc-v13-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2020/12/19/arm-none-eabi-gcc-v10-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2021/10/25/arm-none-eabi-gcc-v10-3-1-2-1-released/ ✓
- https://xpack.github.io/blog/2021/11/12/arm-none-eabi-gcc-v10-3-1-2-2-released/ ✓
- https://xpack.github.io/blog/2021/12/07/arm-none-eabi-gcc-v10-3-1-2-3-released/ ✓
- https://xpack.github.io/blog/2022/05/15/arm-none-eabi-gcc-v11-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2022/05/16/arm-none-eabi-gcc-v11-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2022/05/29/arm-none-eabi-gcc-v11-2-1-1-2-released/ ✓
- https://xpack.github.io/blog/2022/05/30/arm-none-eabi-gcc-v11-2-1-1-2-released/ ✓
- https://xpack.github.io/blog/2022/08/28/arm-none-eabi-gcc-v11-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/02/04/arm-none-eabi-gcc-v12-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/02/05/arm-none-eabi-gcc-v12-2-1-1-2-released/ ✓
- https://xpack.github.io/blog/2023/08/21/arm-none-eabi-gcc-v12-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/09/21/arm-none-eabi-gcc-v12-3-1-1-2-released/ ✓
- https://xpack.github.io/blog/2023/11/09/arm-none-eabi-gcc-v13-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2018/03/31/arm-none-eabi-gcc-v6-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2018/04/01/arm-none-eabi-gcc-v7-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2018/07/24/arm-none-eabi-gcc-v7-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2019/07/26/arm-none-eabi-gcc-v7-3-1-1-2-released/ ✓
- https://xpack.github.io/blog/2019/01/03/arm-none-eabi-gcc-v8-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2019/01/19/arm-none-eabi-gcc-v8-2-1-1-2-released/ ✓ +redirect
- https://xpack.github.io/blog/2019/02/02/arm-none-eabi-gcc-v8-2-1-1-3-released/ ✓
- https://xpack.github.io/blog/2019/02/14/arm-none-eabi-gcc-v8-2-1-1-4-released/ ✓
- https://xpack.github.io/blog/2019/04/26/arm-none-eabi-gcc-v8-2-1-1-5-released/ ✓
- https://xpack.github.io/blog/2019/05/10/arm-none-eabi-gcc-v8-2-1-1-6-released/ ✓ +redirect
- https://xpack.github.io/blog/2019/05/24/arm-none-eabi-gcc-v8-2-1-1-7-released/ ✓
- https://xpack.github.io/blog/2019/07/29/arm-none-eabi-gcc-v8-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2019/10/11/arm-none-eabi-gcc-v8-3-1-1-2-released/ ✓
- https://xpack.github.io/blog/2019/11/02/arm-none-eabi-gcc-v8-3-1-1-3-released/ ✓
- https://xpack.github.io/blog/2019/12/06/arm-none-eabi-gcc-v8-3-1-1-4-released/ ✓
- https://xpack.github.io/blog/2019/12/06/arm-none-eabi-gcc-v9-2-1-1-1-released/ ✓
- https://xpack.github.io/blog/2020/07/03/arm-none-eabi-gcc-v9-3-1-1-1-released/ ✓
- https://xpack.github.io/blog/2020/07/27/arm-none-eabi-gcc-v9-3-1-1-2-released/ ✓
- https://xpack.github.io/blog/2020/10/12/arm-none-eabi-gcc-v9-3-1-1-3-released/ ✓
- https://xpack.github.io/blog/2020/10/23/arm-none-eabi-gcc-v9-3-1-1-4-released/ ✓
- https://xpack.github.io/blog/2023/08/17/bison-v3-8-2-1-released/ ✓
- https://xpack.github.io/blog/2021/10/21/clang-v12-0-1-1-released/ ✓
- https://xpack.github.io/blog/2021/10/22/clang-v12-0-1-1-released/ ✓
- https://xpack.github.io/blog/2022/02/08/clang-v12-0-1-2-released/ ✓
- https://xpack.github.io/blog/2022/03/24/clang-v13-0-1-1-released/ ✓
- https://xpack.github.io/blog/2022/08/21/clang-v14-0-6-1-released/ ✓
- https://xpack.github.io/blog/2022/08/31/clang-v14-0-6-2-released/ ✓
- https://xpack.github.io/blog/2023/01/22/clang-v15-0-7-1-released/ ✓
- https://xpack.github.io/blog/2023/01/28/clang-v15-0-7-2-released/ ✓
- https://xpack.github.io/blog/2023/08/04/clang-v15-0-7-3-released/ ✓
- https://xpack.github.io/blog/2023/08/05/clang-v15-0-7-4-released/ ✓
- https://xpack.github.io/blog/2023/08/06/clang-v16-0-6-1-released/ ✓
- https://xpack.github.io/blog/2023/12/04/clang-v17-0-6-1-released/ ✓
- https://xpack.github.io/blog/2024/05/28/clang-v17-0-6-2-released/ ✓
- https://xpack.github.io/blog/2024/06/21/clang-v17-0-6-3-released/ ✓
- https://xpack.github.io/blog/2024/06/25/clang-v18-1-8-1-released/ ✓
- https://xpack.github.io/blog/2020/09/29/cmake-v3-18-3-1-released/ ✓
- https://xpack.github.io/blog/2020/12/10/cmake-v3-18-5-1-released/ ✓
- https://xpack.github.io/blog/2021/03/16/cmake-v3-18-6-1-released/ ✓
- https://xpack.github.io/blog/2020/12/15/cmake-v3-19-1-1-released/ ✓
- https://xpack.github.io/blog/2021/01/06/cmake-v3-19-2-1-released/ ✓
- https://xpack.github.io/blog/2021/03/16/cmake-v3-19-2-2-released/ ✓ +redirect
- https://xpack.github.io/blog/2021/05/19/cmake-v3-19-8-1-released/ ✓
- https://xpack.github.io/blog/2021/10/18/cmake-v3-20-6-1-released/ ✓
- https://xpack.github.io/blog/2021/10/19/cmake-v3-20-6-1-released/ ✓
- https://xpack.github.io/blog/2021/12/06/cmake-v3-20-6-2-released/ ✓
- https://xpack.github.io/blog/2022/03/25/cmake-v3-21-6-1-released/ ✓
- https://xpack.github.io/blog/2022/09/01/cmake-v3-22-6-1-released/ ✓
- https://xpack.github.io/blog/2023/01/24/cmake-v3-23-5-1-released/ ✓
- https://xpack.github.io/blog/2023/07/26/cmake-v3-24-4-1-released/ ✓
- https://xpack.github.io/blog/2023/07/27/cmake-v3-25-3-1-released/ ✓
- https://xpack.github.io/blog/2023/08/25/cmake-v3-26-5-1-released/ ✓
- https://xpack.github.io/blog/2024/04/02/cmake-v3-27-9-1-released/ ✓
- https://xpack.github.io/blog/2023/08/17/flex-v2-6-4-1-released/ ✓
- https://xpack.github.io/blog/2021/10/20/gcc-v11-2-0-1-released/ ✓
- https://xpack.github.io/blog/2022/02/11/gcc-v11-2-0-3-released/ ✓
- https://xpack.github.io/blog/2022/05/31/gcc-v11-3-0-1-released/ ✓
- https://xpack.github.io/blog/2023/12/05/gcc-v11-4-0-1-released/ ✓
- https://xpack.github.io/blog/2024/02/23/gcc-v11-4-0-2-released/ ✓
- https://xpack.github.io/blog/2024/07/22/gcc-v11-5-0-1-released/ ✓
- https://xpack.github.io/blog/2022/06/16/gcc-v12-1-0-1-released/ ✓
- https://xpack.github.io/blog/2022/08/30/gcc-v12-2-0-1-released/ ✓
- https://xpack.github.io/blog/2022/12/27/gcc-v12-2-0-2-released/ ✓
- https://xpack.github.io/blog/2023/08/31/gcc-v12-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/02/24/gcc-v12-3-0-2-released/ ✓
- https://xpack.github.io/blog/2024/06/26/gcc-v12-4-0-1-released/ ✓
- https://xpack.github.io/blog/2023/08/31/gcc-v13-2-0-1-released/ ✓
- https://xpack.github.io/blog/2024/02/24/gcc-v13-2-0-2-released/ ✓
- https://xpack.github.io/blog/2024/06/05/gcc-v13-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/05/31/gcc-v14-1-0-1-released/ ✓
- https://xpack.github.io/blog/2021/05/24/gcc-v8-5-0-1-released/ ✓
- https://xpack.github.io/blog/2022/11/03/m4-v1-4-19-1-released/ ✓
- https://xpack.github.io/blog/2023/01/29/m4-v1-4-19-2-released/ ✓
- https://xpack.github.io/blog/2023/09/06/m4-v1-4-19-3-released/ ✓
- https://xpack.github.io/blog/2020/09/30/meson-build-v0-55-3-1-released/ ✓
- https://xpack.github.io/blog/2020/10/16/meson-build-v0-55-3-2-released/ ✓
- https://xpack.github.io/blog/2021/02/02/meson-build-v0-56-2-1-released/ ✓
- https://xpack.github.io/blog/2021/04/27/meson-build-v0-56-2-2-released/ ✓
- https://xpack.github.io/blog/2021/05/26/meson-build-v0-57-2-1-released/ ✓
- https://xpack.github.io/blog/2021/10/19/meson-build-v0-58-2-1-released/ ✓
- https://xpack.github.io/blog/2021/12/06/meson-build-v0-59-4-1-released/ ✓
- https://xpack.github.io/blog/2022/03/24/meson-build-v0-60-3-1-released/ ✓
- https://xpack.github.io/blog/2022/09/01/meson-build-v0-61-5-1-released/ ✓
- https://xpack.github.io/blog/2023/01/28/meson-build-v0-62-2-1-released/ ✓
- https://xpack.github.io/blog/2023/01/28/meson-build-v0-63-3-1-released/ ✓
- https://xpack.github.io/blog/2023/07/28/meson-build-v0-64-1-1-released/ ✓
- https://xpack.github.io/blog/2023/07/28/meson-build-v1-0-2-1-released/ ✓
- https://xpack.github.io/blog/2023/11/25/meson-build-v1-1-1-1-released/ ✓
- https://xpack.github.io/blog/2023/11/25/meson-build-v1-2-3-1-released/ ✓
- https://xpack.github.io/blog/2023/11/26/meson-build-v1-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/04/01/meson-build-v1-3-2-1-released/ ✓
- https://xpack.github.io/blog/2022/09/25/mingw-w64-gcc-v11-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/07/28/mingw-w64-gcc-v11-5-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/03/mingw-w64-gcc-v12-2-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/01/mingw-w64-gcc-v12-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/06/28/mingw-w64-gcc-v12-4-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/01/mingw-w64-gcc-v13-2-0-1-released/ ✓
- https://xpack.github.io/blog/2024/06/28/mingw-w64-gcc-v13-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/06/27/mingw-w64-gcc-v14-1-0-1-released/ ✓
- https://xpack.github.io/blog/2019/07/18/new-web-look/ ✓
- https://xpack.github.io/blog/2020/09/28/ninja-build-v1-10-0-1-released/ ✓
- https://xpack.github.io/blog/2020/09/28/ninja-build-v1-10-1-1-released/ ✓
- https://xpack.github.io/blog/2020/12/19/ninja-build-v1-10-2-1-released/ ✓
- https://xpack.github.io/blog/2021/03/16/ninja-build-v1-10-2-2-released/ ✓
- https://xpack.github.io/blog/2021/04/28/ninja-build-v1-10-2-3-released/ ✓
- https://xpack.github.io/blog/2021/10/19/ninja-build-v1-10-2-4-released/ ✓
- https://xpack.github.io/blog/2021/12/06/ninja-build-v1-10-2-5-released/ ✓
- https://xpack.github.io/blog/2022/05/17/ninja-build-v1-11-0-1-released/ ✓
- https://xpack.github.io/blog/2022/08/31/ninja-build-v1-11-1-1-released/ ✓
- https://xpack.github.io/blog/2023/01/23/ninja-build-v1-11-1-2-released/ ✓
- https://xpack.github.io/blog/2023/09/05/ninja-build-v1-11-1-3-released/ ✓
- https://xpack.github.io/blog/2018/10/20/openocd-v0-10-0-10-20181020-released/ ✓
- https://xpack.github.io/blog/2019/01/18/openocd-v0-10-0-11-20190118-released/ ✓
- https://xpack.github.io/blog/2019/04/22/openocd-v0-10-0-12-20190422-released/ ✓
- https://xpack.github.io/blog/2019/07/17/openocd-v0-10-0-13-released/ ✓
- https://xpack.github.io/blog/2020/06/24/openocd-v0-10-0-14-released/ ✓ +redirect
- https://xpack.github.io/blog/2020/10/13/openocd-v0-10-0-15-released/ ✓
- https://xpack.github.io/blog/2016/10/28/openocd-v0-10-0-20161028-dev-released/ ✓
- https://xpack.github.io/blog/2017/01/24/openocd-v0-10-0-20170124-released/ ✓
- https://xpack.github.io/blog/2017/04/19/openocd-v0-10-0-20170418-released/ ✓ +redirect
- https://xpack.github.io/blog/2017/08/26/openocd-v0-10-0-3-20170826-dev-released/ ✓
- https://xpack.github.io/blog/2017/10/04/openocd-v0-10-0-4-20171004-dev-released/ ✓
- https://xpack.github.io/blog/2017/11/10/openocd-v0-10-0-5-20171110-released/ ✓
- https://xpack.github.io/blog/2018/01/12/openocd-v0-10-0-6-20180112-released/ ✓
- https://xpack.github.io/blog/2018/01/23/openocd-v0-10-0-7-20180123-released/ ✓
- https://xpack.github.io/blog/2018/05/13/openocd-v0-10-0-8-20180512-released/ ✓ +redirect
- https://xpack.github.io/blog/2018/10/16/openocd-v0-10-0-9-20181016-released/ ✓
- https://xpack.github.io/blog/2021/03/15/openocd-v0-11-0-1-released/ ✓
- https://xpack.github.io/blog/2021/10/16/openocd-v0-11-0-2-released/ ✓
- https://xpack.github.io/blog/2021/10/17/openocd-v0-11-0-2-released/ ✓
- https://xpack.github.io/blog/2021/12/07/openocd-v0-11-0-3-released/ ✓
- https://xpack.github.io/blog/2022/03/25/openocd-v0-11-0-4-released/ ✓
- https://xpack.github.io/blog/2022/09/01/openocd-v0-11-0-5-released/ ✓
- https://xpack.github.io/blog/2023/01/30/openocd-v0-12-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/04/openocd-v0-12-0-2-released/ ✓
- https://xpack.github.io/blog/2024/04/02/openocd-v0-12-0-3-released/ ✓
- https://xpack.github.io/blog/2015/10/28/openocd-v0.10.0-20151028-dev-released/ ✓
- https://xpack.github.io/blog/2016/01/11/openocd-v0.10.0-201601101000-dev-released/ ✓
- https://xpack.github.io/blog/2015/01/19/openocd-v0.8.0-20150119-released/ ✓
- https://xpack.github.io/blog/2015/01/31/openocd-v0.8.0-20150131-released/ ✓
- https://xpack.github.io/blog/2015/03/20/openocd-v0.8.0-20150320-released/ ✓
- https://xpack.github.io/blog/2015/03/24/openocd-v0.8.0-20150324-released/ ✓
- https://xpack.github.io/blog/2015/03/20/openocd-v0.9.0-20150320-released/ ✓
- https://xpack.github.io/blog/2015/03/24/openocd-v0.9.0-20150324-dev-released/ ✓
- https://xpack.github.io/blog/2015/05/19/openocd-v0.9.0-20150519-released/ ✓
- https://xpack.github.io/blog/2022/10/24/patchelf-v0-15-0-1-released/ ✓
- https://xpack.github.io/blog/2022/12/27/patchelf-v0-16-1-1-released/ ✓
- https://xpack.github.io/blog/2022/12/27/patchelf-v0-17-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/23/patchelf-v0-17-2-1-released/ ✓
- https://xpack.github.io/blog/2023/09/05/patchelf-v0-18-0-1-released/ ✓
- https://xpack.github.io/blog/2022/10/25/pkg-config-v0-29-2-1-released/ ✓
- https://xpack.github.io/blog/2023/01/29/pkg-config-v0-29-2-2-released/ ✓
- https://xpack.github.io/blog/2023/09/06/pkg-config-v0-29-2-3-released/ ✓
- https://xpack.github.io/blog/2020/10/14/qemu-arm-v2-8-0-10-released/ ✓
- https://xpack.github.io/blog/2020/12/20/qemu-arm-v2-8-0-11-released/ ✓
- https://xpack.github.io/blog/2021/02/02/qemu-arm-v2-8-0-12-released/ ✓
- https://xpack.github.io/blog/2021/10/17/qemu-arm-v2-8-0-13-released/ ✓
- https://xpack.github.io/blog/2019/07/22/qemu-arm-v2-8-0-7-released/ ✓
- https://xpack.github.io/blog/2019/11/05/qemu-arm-v2-8-0-8-released/ ✓ +redirect
- https://xpack.github.io/blog/2020/07/01/qemu-arm-v2-8-0-9-released/ ✓
- https://xpack.github.io/blog/2022/01/13/qemu-arm-v6-2-0-1-released/ ✓
- https://xpack.github.io/blog/2022/01/19/qemu-arm-v6-2-0-2-released/ ✓
- https://xpack.github.io/blog/2022/05/04/qemu-arm-v7-0-0-1-released/ ✓
- https://xpack.github.io/blog/2022/05/05/qemu-arm-v7-0-0-1-released/ ✓
- https://xpack.github.io/blog/2022/09/06/qemu-arm-v7-1-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/31/qemu-arm-v7-2-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/03/qemu-arm-v7-2-5-1-released/ ✓
- https://xpack.github.io/blog/2024/04/02/qemu-arm-v8-2-2-1-released/ ✓
- https://xpack.github.io/blog/2022/05/04/qemu-riscv-v7-0-0-1-released/ ✓
- https://xpack.github.io/blog/2022/09/06/qemu-riscv-v7-1-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/31/qemu-riscv-v7-2-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/03/qemu-riscv-v7-2-5-1-released/ ✓
- https://xpack.github.io/blog/2024/04/02/qemu-riscv-v8-2-2-1-released/ ✓
- https://xpack.github.io/blog/2015/04/04/qemu-v2-2-92-20150404-released/ ✓
- https://xpack.github.io/blog/2015/08/02/qemu-v2-3-50-20150801-released/ ✓
- https://xpack.github.io/blog/2015/08/04/qemu-v2-3-50-20150804-released/ ✓
- https://xpack.github.io/blog/2015/08/05/qemu-v2-3-50-20150805-released/ ✓
- https://xpack.github.io/blog/2015/08/16/qemu-v2-3-50-20150816-released/ ✓
- https://xpack.github.io/blog/2015/10/29/qemu-v2-4-50-20151029-released/ ✓
- https://xpack.github.io/blog/2016/07/28/qemu-v2-6-0-20160728-released/ ✓
- https://xpack.github.io/blog/2016/10/29/qemu-v2-7-0-20161029-released/ ✓
- https://xpack.github.io/blog/2016/11/28/qemu-v2-7-0-20161128-released/ ✓
- https://xpack.github.io/blog/2016/12/27/qemu-v2-8-0-20161227-released/ ✓
- https://xpack.github.io/blog/2018/05/23/qemu-v2-8-0-3-20180523-released/ ✓
- https://xpack.github.io/blog/2019/02/11/qemu-v2-8-0-4-20190211-released/ ✓
- https://xpack.github.io/blog/2019/04/24/qemu-v2-8-0-5-20190424-released/ ✓
- https://xpack.github.io/blog/2019/05/17/qemu-v2-8-0-6-20190517-released/ ✓
- https://xpack.github.io/blog/2022/10/21/realpath-v9-1-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/29/realpath-v9-1-0-2-released/ ✓
- https://xpack.github.io/blog/2023/09/05/realpath-v9-4-0-1-released/ ✓
- https://xpack.github.io/blog/2022/05/14/riscv-none-elf-gcc-v11-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/07/27/riscv-none-elf-gcc-v11-5-0-1-released/ ✓
- https://xpack.github.io/blog/2022/05/15/riscv-none-elf-gcc-v12-1-0-1-released/ ✓
- https://xpack.github.io/blog/2022/05/18/riscv-none-elf-gcc-v12-1-0-2-released/ ✓
- https://xpack.github.io/blog/2022/08/30/riscv-none-elf-gcc-v12-2-0-1-released/ ✓
- https://xpack.github.io/blog/2023/02/02/riscv-none-elf-gcc-v12-2-0-2-released/ ✓
- https://xpack.github.io/blog/2023/02/05/riscv-none-elf-gcc-v12-2-0-3-released/ ✓
- https://xpack.github.io/blog/2023/08/25/riscv-none-elf-gcc-v12-3-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/22/riscv-none-elf-gcc-v12-3-0-2-released/ ✓
- https://xpack.github.io/blog/2024/07/26/riscv-none-elf-gcc-v12-4-0-1-released/ ✓
- https://xpack.github.io/blog/2023/08/24/riscv-none-elf-gcc-v13-2-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/25/riscv-none-elf-gcc-v13-2-0-2-released/ ✓
- https://xpack.github.io/blog/2024/07/25/riscv-none-elf-gcc-v13-3-0-1-released/ ✓
- https://xpack.github.io/blog/2024/07/24/riscv-none-elf-gcc-v14-1-0-1-released/ ✓
- https://xpack.github.io/blog/2021/01/05/riscv-none-embed-gcc-v10-1-0-1-1-released/ ✓
- https://xpack.github.io/blog/2021/11/04/riscv-none-embed-gcc-v10-1-0-1-2-released/ ✓
- https://xpack.github.io/blog/2021/11/06/riscv-none-embed-gcc-v10-2-0-1-1-released/ ✓
- https://xpack.github.io/blog/2021/11/11/riscv-none-embed-gcc-v10-2-0-1-2-released/ ✓
- https://xpack.github.io/blog/2019/07/31/riscv-none-embed-gcc-v8-2-0-3-1-released/ ✓
- https://xpack.github.io/blog/2019/11/01/riscv-none-embed-gcc-v8-3-0-1-1-released/ ✓
- https://xpack.github.io/blog/2020/07/04/riscv-none-embed-gcc-v8-3-0-1-2-released/ ✓
- https://xpack.github.io/blog/2020/10/10/riscv-none-embed-gcc-v8-3-0-2-1-released/ ✓
- https://xpack.github.io/blog/2020/10/13/riscv-none-embed-gcc-v8-3-0-2-2-released/ ✓
- https://xpack.github.io/blog/2020/10/25/riscv-none-embed-gcc-v8-3-0-2-3-released/ ✓
- https://xpack.github.io/blog/2017/07/02/riscv-none-gcc-v7-1-1-1-20170702-released/ ✓
- https://xpack.github.io/blog/2017/09/13/riscv-none-gcc-v7-1-1-2-20170912-released/ ✓
- https://xpack.github.io/blog/2017/11/09/riscv-none-gcc-v7-2-0-1-20171109-released/ ✓
- https://xpack.github.io/blog/2018/01/13/riscv-none-gcc-v7-2-0-2-20180111-released/ ✓
- https://xpack.github.io/blog/2018/05/06/riscv-none-gcc-v7-2-0-3-20180506-released/ ✓
- https://xpack.github.io/blog/2018/06/07/riscv-none-gcc-v7-2-0-4-20180606-released/ ✓
- https://xpack.github.io/blog/2018/10/19/riscv-none-gcc-v8-1-0-2-20181019-released/ ✓
- https://xpack.github.io/blog/2019/04/25/riscv-none-gcc-v8-2-0-2-1-20190425-released/ ✓
- https://xpack.github.io/blog/2019/05/21/riscv-none-gcc-v8-2-0-2-2-20190521-released/ ✓
- https://xpack.github.io/blog/2022/12/11/sed-v4-9-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/29/sed-v4-9-0-2-released/ ✓
- https://xpack.github.io/blog/2023/09/06/sed-v4-9-0-3-released/ ✓
- https://xpack.github.io/blog/2023/08/22/texinfo-v7-0-3-1-released/ ✓
- https://xpack.github.io/blog/2021/04/09/vscode-xpack-v0-1-5-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/14/vscode-xpack-v0-2-2-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/19/vscode-xpack-v0-3-2-released/ ✓ Archive
- https://xpack.github.io/blog/2021/05/04/vscode-xpack-v0-4-10-released/ ✓ Archive
- https://xpack.github.io/blog/2021/05/05/vscode-xpack-v0-4-10-released/ ✓ Archive
- https://xpack.github.io/blog/2021/05/05/vscode-xpack-v0-4-11-released/ ✓ Archive
- https://xpack.github.io/blog/2021/05/05/vscode-xpack-v0-4-12-released/ ✓ Archive
- https://xpack.github.io/blog/2021/05/12/vscode-xpack-v0-4-13-released/ ✓ Archive
- https://xpack.github.io/blog/2021/06/20/vscode-xpack-v0-4-14-released/ ✓ Archive
- https://xpack.github.io/blog/2021/07/15/vscode-xpack-v0-4-15-released/ ✓ Archive
- https://xpack.github.io/blog/2021/08/10/vscode-xpack-v0-4-16-released/ ✓ Archive
- https://xpack.github.io/blog/2022/04/17/vscode-xpack-v0-4-17-released/ ✓ Archive
- https://xpack.github.io/blog/2022/05/21/vscode-xpack-v0-4-18-released/ ✓ Archive
- https://xpack.github.io/blog/2022/07/30/vscode-xpack-v0-4-19-released/ ✓ Archive
- https://xpack.github.io/blog/2022/10/20/vscode-xpack-v0-4-20-released/ ✓ Archive
- https://xpack.github.io/blog/2023/02/14/vscode-xpack-v0-4-21-released/ ✓ Archive
- https://xpack.github.io/blog/2023/02/16/vscode-xpack-v0-4-22-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/22/vscode-xpack-v0-4-4-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/24/vscode-xpack-v0-4-7-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/27/vscode-xpack-v0-4-8-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/27/vscode-xpack-v0-4-9-released/ ✓ Archive
- https://xpack.github.io/blog/2021/04/28/vscode-xpack-v0-4-9-released/ ✓ Archive
- https://xpack.github.io/blog/2023/06/16/vscode-xpack-v0-5-0-released/ ✓ Archive
- https://xpack.github.io/blog/2023/06/20/vscode-xpack-v0-5-1-released/ ✓ Archive
- https://xpack.github.io/blog/2024/02/20/vscode-xpack-v0-5-2-released/ ✓ Archive
- https://xpack.github.io/blog/2018/01/03/windows-build-tools-v2-10-20180103-released/ ✓
- https://xpack.github.io/blog/2018/04/28/windows-build-tools-v2-11-20180428-released/ ✓
- https://xpack.github.io/blog/2020/07/14/windows-build-tools-v2-12-2-released/ ✓
- https://xpack.github.io/blog/2019/04/22/windows-build-tools-v2-12-20190422-released/ ✓
- https://xpack.github.io/blog/2016/11/22/windows-build-tools-v2-8-20161122-released/ ✓
- https://xpack.github.io/blog/2017/06/29/windows-build-tools-v2-9-20170629-released/ ✓
- https://xpack.github.io/blog/2014/12/02/windows-build-tools-v2.0-20141202-released/ ✓
- https://xpack.github.io/blog/2015/01/21/windows-build-tools-v2.1-20150121-released/ ✓
- https://xpack.github.io/blog/2015/01/23/windows-build-tools-v2.2-20150123-released/ ✓
- https://xpack.github.io/blog/2015/01/24/windows-build-tools-v2.3-20150124-released/ ✓
- https://xpack.github.io/blog/2015/03/21/windows-build-tools-v2.4-20150321-released/ ✓
- https://xpack.github.io/blog/2015/03/24/windows-build-tools-v2.4-20150324-released/ ✓
- https://xpack.github.io/blog/2015/07/15/windows-build-tools-v2.6-20150715-released/ ✓
- https://xpack.github.io/blog/2016/10/28/windows-build-tools-v2.7-20161028-released/ ✓
- https://xpack.github.io/blog/2020/12/27/windows-build-tools-v4-2-1-1-released/ ✓
- https://xpack.github.io/blog/2020/12/28/windows-build-tools-v4-2-1-2-released/ ✓
- https://xpack.github.io/blog/2021/10/18/windows-build-tools-v4-2-1-3-released/ ✓
- https://xpack.github.io/blog/2022/03/05/windows-build-tools-v4-3-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/29/windows-build-tools-v4-4-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/05/windows-build-tools-v4-4-1-1-released/ ✓
- https://xpack.github.io/blog/2023/11/14/windows-build-tools-v4-4-1-2-released/ ✓
- https://xpack.github.io/blog/2022/09/26/wine-v6-17-0-1-released/ ✓
- https://xpack.github.io/blog/2023/01/03/wine-v7-22-0-1-released/ ✓
- https://xpack.github.io/blog/2023/09/04/wine-v8-0-2-1-released/ ✓
- https://xpack.github.io/blog/2022/10/03/xbb-bootstrap-v4-0-released/ ✓ Archive
- https://xpack.github.io/blog/2021/10/13/xbb-v3.3-released/ ✓
- https://xpack.github.io/blog/2021/12/16/xbb-v3.4-released/ ✓
- https://xpack.github.io/blog/2023/02/07/xbb-v5.0.0-released/ ✓
- https://xpack.github.io/blog/2023/09/11/xbb-v5.1.1-released/ ✓
- https://xpack.github.io/blog/2021/05/12/xpm-v0-10-1-released/ ✓
- https://xpack.github.io/blog/2021/05/19/xpm-v0-10-2-released/ ✓
- https://xpack.github.io/blog/2021/05/26/xpm-v0-10-3-released/ ✓
- https://xpack.github.io/blog/2021/06/20/xpm-v0-10-5-released/ ✓
- https://xpack.github.io/blog/2021/07/20/xpm-v0-10-6-released/ ✓
- https://xpack.github.io/blog/2021/08/09/xpm-v0-10-7-released/ ✓
- https://xpack.github.io/blog/2021/09/03/xpm-v0-10-8-released/ ✓
- https://xpack.github.io/blog/2021/12/26/xpm-v0-11-0-released/ ✓
- https://xpack.github.io/blog/2021/12/30/xpm-v0-12-1-released/ ✓
- https://xpack.github.io/blog/2022/04/03/xpm-v0-12-10-released/ ✓
- https://xpack.github.io/blog/2021/12/28/xpm-v0-12-2-released/ ✓
- https://xpack.github.io/blog/2021/01/06/xpm-v0-12-6-released/ ✓
- https://xpack.github.io/blog/2022/01/14/xpm-v0-12-9-released/ ✓
- https://xpack.github.io/blog/2022/04/17/xpm-v0-13-0-released/ ✓
- https://xpack.github.io/blog/2022/04/18/xpm-v0-13-1-released/ ✓
- https://xpack.github.io/blog/2022/04/30/xpm-v0-13-2-released/ ✓
- https://xpack.github.io/blog/2022/05/03/xpm-v0-13-3-released/ ✓
- https://xpack.github.io/blog/2022/05/18/xpm-v0-13-4-released/ ✓
- https://xpack.github.io/blog/2022/05/26/xpm-v0-13-5-released/ ✓
- https://xpack.github.io/blog/2022/06/15/xpm-v0-13-6-released/ ✓
- https://xpack.github.io/blog/2022/07/13/xpm-v0-13-7-released/ ✓
- https://xpack.github.io/blog/2022/08/15/xpm-v0-14-0-released/ ✓
- https://xpack.github.io/blog/2022/10/16/xpm-v0-14-2-released/ ✓
- https://xpack.github.io/blog/2023/01/03/xpm-v0-14-3-released/ ✓
- https://xpack.github.io/blog/2023/01/23/xpm-v0-14-4-released/ ✓
- https://xpack.github.io/blog/2023/01/23/xpm-v0-14-4-released/ ✓
- https://xpack.github.io/blog/2023/02/07/xpm-v0-14-9-released/ ✓
- https://xpack.github.io/blog/2023/02/07/xpm-v0-15-0-released/ ✓
- https://xpack.github.io/blog/2023/03/19/xpm-v0-15-1-released/ ✓
- https://xpack.github.io/blog/2023/05/19/xpm-v0-15-1-released/ ✓
- https://xpack.github.io/blog/2023/05/23/xpm-v0-15-2-released/ ✓
- https://xpack.github.io/blog/2023/06/03/xpm-v0-16-1-released/ ✓
- https://xpack.github.io/blog/2023/07/02/xpm-v0-16-2-released/ ✓
- https://xpack.github.io/blog/2023/07/23/xpm-v0-16-3-released/ ✓
- https://xpack.github.io/blog/2023/09/12/xpm-v0-16-4-released/ ✓
- https://xpack.github.io/blog/2023/09/22/xpm-v0-16-5-released/ ✓
- https://xpack.github.io/blog/2023/09/26/xpm-v0-17-0-released/ ✓
- https://xpack.github.io/blog/2023/11/17/xpm-v0-18-0-released/ ✓
- https://xpack.github.io/blog/2024/02/27/xpm-v0-19-0-released/ ✓
- https://xpack.github.io/blog/2024/03/10/xpm-v0-19-1-released/ ✓
- https://xpack.github.io/blog/2024/07/29/xpm-v0-19-2-released/ ✓
- https://xpack.github.io/blog/2021/01/27/xpm-v0-8-0-released/ ✓
- https://xpack.github.io/blog/2021/01/30/xpm-v0-8-1-released/ ✓
- https://xpack.github.io/blog/2021/03/27/xpm-v0-9-0-released/ ✓
- https://xpack.github.io/blog/2021/03/28/xpm-v0-9-1-released/ ✓
```

```console
% grep 'https://xpack' sitemap.xml | sed -e 's|    <loc>|- |' -e 's|</loc>||' |  grep '/blog/' | sort -t '/' -k 8,8 | sed -e 's|- https://xpack.github.io||' -e "s|\(/blog/[0-9]*/[0-9]*/[0-9]*/\)\([a-z0-9-]*\)-\(v[0-9].*-released/\)|  { from: '\1\2-\3', to: 'https://xpack-dev-tools.github.io/\2-xpack\1\2-\3' },|" -e 's|xpm-xpack|xpm|' -e 's|https://xpack-dev-tools.github.io/vscode-xpack-xpack|https://xpack.github.io/web-archive-jekyll|' -e 's|qemu-xpack|qemu-arm-xpack|' -e 's|https://xpack-dev-tools.github.io/xpm/|https://xpack.github.io/xpm/|'
```

## Pages

```console
% grep 'https://xpack' sitemap.xml | sed -e 's|    <loc>|- |' -e 's|</loc>||' | grep -v '/blog/' | sort
- https://xpack.github.io/
- https://xpack.github.io/README-MAINTAINER/ ---
- https://xpack.github.io/TODO/ ---
- https://xpack.github.io/about/ ✓
- https://xpack.github.io/arm-none-eabi-gcc/ ✓
- https://xpack.github.io/arm-none-eabi-gcc/install/ ✓
- https://xpack.github.io/arm-none-eabi-gcc/releases/ ✓
- https://xpack.github.io/arm-none-eabi-gcc/support/ ✓
- https://xpack.github.io/assets/css/ ---
- https://xpack.github.io/assets/css/style.css ---
- https://xpack.github.io/ci/ ✓ Archive
- https://xpack.github.io/core/ ✓
- https://xpack.github.io/dev-tools/ ✓ See below
- https://xpack.github.io/develop/ ✓
- https://xpack.github.io/develop/how-to-new-git/ ✓
- https://xpack.github.io/develop/js-style-guide/ ✓
- https://xpack.github.io/develop/links/ ✓
- https://xpack.github.io/develop/node-js-tricks/ ✓
- https://xpack.github.io/develop/schemas/ ✓ Archive ???
- https://xpack.github.io/develop/vs-code-settings/ ✓
- https://xpack.github.io/install/ ✓
- https://xpack.github.io/intro/ ✓ ??? How to use? 101
- https://xpack.github.io/maintain/ ✓
- https://xpack.github.io/maintain/how-to-release-web/ ✓ Archive empty
- https://xpack.github.io/metadata/ ✓ Archive deprecated
- https://xpack.github.io/metadata/build/ ✓ Archive deprecated
- https://xpack.github.io/metadata/components/ ✓ Archive deprecated
- https://xpack.github.io/metadata/devices/ ✓ Archive deprecated
- https://xpack.github.io/metadata/tools-collections/ ✓ Archive deprecated
- https://xpack.github.io/metadata/xsvd/ ✓ Archive deprecated
- https://xpack.github.io/openocd/ ✓
- https://xpack.github.io/openocd/install/ ✓
- https://xpack.github.io/openocd/releases/ ✓
- https://xpack.github.io/project/about/ ✓
- https://xpack.github.io/project/history/ ✓
- https://xpack.github.io/qemu-arm/ ✓
- https://xpack.github.io/qemu-arm/install/ ✓
- https://xpack.github.io/qemu-arm/options/ ✓ Archive GNU ARM QEMU
- https://xpack.github.io/qemu-arm/releases/ ✓
- https://xpack.github.io/riscv-none-embed-gcc/ ✓
- https://xpack.github.io/riscv-none-embed-gcc/install/ ✓
- https://xpack.github.io/riscv-none-embed-gcc/releases/ ✓
- https://xpack.github.io/riscv-none-embed-gcc/support/ ✓
- https://xpack.github.io/support/ ✓
- https://xpack.github.io/test/ ✓
- https://xpack.github.io/vscode/ ✓ Archive
- https://xpack.github.io/vscode/faq/ ✓ Archive
- https://xpack.github.io/vscode/install/ ✓ Archive
- https://xpack.github.io/vscode/intellisense/ ✓ Archive
- https://xpack.github.io/vscode/quick-start/ ✓ Archive
- https://xpack.github.io/vscode/support/ ✓ Archive
- https://xpack.github.io/windows-build-tools/ ✓
- https://xpack.github.io/windows-build-tools/install/ ✓
- https://xpack.github.io/windows-build-tools/releases/ ✓
- https://xpack.github.io/xbb/ ✓
- https://xpack.github.io/xbb/end-of-support/ ✓
- https://xpack.github.io/xbb/prerequisites/ ✓ Archive !!!
- https://xpack.github.io/xpbuild/ ✓ Archive outdated
- https://xpack.github.io/xpbuild/cli/ ✓ Archive outdated
- https://xpack.github.io/xpbuild/cli/init/ ✓ Archive outdated
- https://xpack.github.io/xpbuild/faq/ ✓ faArchive outdatedke
- https://xpack.github.io/xpbuild/install/ ✓ Archive outdated
- https://xpack.github.io/xpbuild/support/ ✓ Archive outdated
- https://xpack.github.io/xpcdl/ ✓ Archive empty
- https://xpack.github.io/xpm/ ✓
- https://xpack.github.io/xpm/cli/ ✓
- https://xpack.github.io/xpm/cli/init/ ✓
- https://xpack.github.io/xpm/cli/install/ ✓
- https://xpack.github.io/xpm/cli/link/ ✓
- https://xpack.github.io/xpm/cli/list/ ✓
- https://xpack.github.io/xpm/cli/run-script/ ✓
- https://xpack.github.io/xpm/cli/run/ ✓
- https://xpack.github.io/xpm/cli/uninstall/ ✓
- https://xpack.github.io/xpm/faq/ ✓
- https://xpack.github.io/xpm/files/ ✓
- https://xpack.github.io/xpm/files/folders/ ✓
- https://xpack.github.io/xpm/files/package.json/ ✓
- https://xpack.github.io/xpm/folders/ ✓
- https://xpack.github.io/xpm/install/ ✓
- https://xpack.github.io/xpm/policies/ ✓
- https://xpack.github.io/xpm/policies/0001/ ✓
- https://xpack.github.io/xpm/support/ ✓
- https://xpack.github.io/xpmake/ ✓ Archive empty
- https://xpack.github.io/xpninja/ ✓ Archive empty
- https://xpack.github.io/xsvd/files/xsvd-json/ ✓ Archive
```

```console
% grep 'https://xpack' sitemap-dev-tools.xml | sed -e 's|    <loc>|- |' -e 's|</loc>||' | grep -v '/blog/' | sort
- https://xpack.github.io/dev-tools/ ✓
- https://xpack.github.io/dev-tools/README-MAINTAINER/ --
- https://xpack.github.io/dev-tools/aarch64-none-elf-gcc/ ✓
- https://xpack.github.io/dev-tools/aarch64-none-elf-gcc/faq/ ✓
- https://xpack.github.io/dev-tools/aarch64-none-elf-gcc/install/ ✓
- https://xpack.github.io/dev-tools/aarch64-none-elf-gcc/support/ ✓
- https://xpack.github.io/dev-tools/arm-none-eabi-gcc/ ✓
- https://xpack.github.io/dev-tools/arm-none-eabi-gcc/faq/ ✓
- https://xpack.github.io/dev-tools/arm-none-eabi-gcc/install/ ✓
- https://xpack.github.io/dev-tools/arm-none-eabi-gcc/python/ ✓ Archive
- https://xpack.github.io/dev-tools/arm-none-eabi-gcc/support/ ✓
- https://xpack.github.io/dev-tools/assets/css/ --
- https://xpack.github.io/dev-tools/assets/css/style.css --
- https://xpack.github.io/dev-tools/clang/ ✓
- https://xpack.github.io/dev-tools/clang/faq/ ✓
- https://xpack.github.io/dev-tools/clang/install/ ✓
- https://xpack.github.io/dev-tools/clang/predefined-macros/ ✓
- https://xpack.github.io/dev-tools/clang/support/ ✓
- https://xpack.github.io/dev-tools/clang/tests/16.0.6-1/ ✓
- https://xpack.github.io/dev-tools/clang/tests/17.0.6-2/ ✓
- https://xpack.github.io/dev-tools/clang/tests/17.0.6-3/ ✓
- https://xpack.github.io/dev-tools/clang/tests/18.1.8-1/ ✓
- https://xpack.github.io/dev-tools/cmake/ ✓
- https://xpack.github.io/dev-tools/cmake/faq/ ✓
- https://xpack.github.io/dev-tools/cmake/install/ ✓
- https://xpack.github.io/dev-tools/cmake/support/ ✓
- https://xpack.github.io/dev-tools/gcc/ ✓
- https://xpack.github.io/dev-tools/gcc/faq/ ✓
- https://xpack.github.io/dev-tools/gcc/install/ ✓
- https://xpack.github.io/dev-tools/gcc/predefined-macros/ ✓
- https://xpack.github.io/dev-tools/gcc/support/ ✓
- https://xpack.github.io/dev-tools/gcc/tests/11.5.0-1/ ✓
- https://xpack.github.io/dev-tools/gcc/tests/12.4.0-1/ ✓
- https://xpack.github.io/dev-tools/gcc/tests/13.3.0-1/ ✓
- https://xpack.github.io/dev-tools/gcc/tests/14.1.0-1/ ✓
- https://xpack.github.io/dev-tools/m4/ ✓
- https://xpack.github.io/dev-tools/m4/faq/ ✓
- https://xpack.github.io/dev-tools/m4/install/ ✓
- https://xpack.github.io/dev-tools/m4/support/ ✓
- https://xpack.github.io/dev-tools/meson-build/ ✓
- https://xpack.github.io/dev-tools/meson-build/faq/ ✓
- https://xpack.github.io/dev-tools/meson-build/install/ ✓
- https://xpack.github.io/dev-tools/meson-build/support/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/faq/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/install/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/support/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/tests/11.5.0-1/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/tests/12.4.0-1/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/tests/13.3.0-1/ ✓
- https://xpack.github.io/dev-tools/mingw-w64-gcc/tests/14.1.0-1/ ✓
- https://xpack.github.io/dev-tools/ninja-build/ ✓
- https://xpack.github.io/dev-tools/ninja-build/faq/ ✓
- https://xpack.github.io/dev-tools/ninja-build/install/ ✓
- https://xpack.github.io/dev-tools/ninja-build/support/ ✓
- https://xpack.github.io/dev-tools/openocd/ ✓
- https://xpack.github.io/dev-tools/openocd/faq/ ✓
- https://xpack.github.io/dev-tools/openocd/install/ ✓
- https://xpack.github.io/dev-tools/openocd/support/ ✓
- https://xpack.github.io/dev-tools/patchelf/ ✓
- https://xpack.github.io/dev-tools/patchelf/faq/ ✓
- https://xpack.github.io/dev-tools/patchelf/install/ ✓
- https://xpack.github.io/dev-tools/patchelf/support/ ✓
- https://xpack.github.io/dev-tools/pkg-config/ ✓
- https://xpack.github.io/dev-tools/pkg-config/faq/ ✓
- https://xpack.github.io/dev-tools/pkg-config/install/ ✓
- https://xpack.github.io/dev-tools/pkg-config/support/ ✓
- https://xpack.github.io/dev-tools/qemu-arm/ ✓
- https://xpack.github.io/dev-tools/qemu-arm/faq/ ✓
- https://xpack.github.io/dev-tools/qemu-arm/gnuarmeclipse/ ✓ Archive
- https://xpack.github.io/dev-tools/qemu-arm/install/ ✓
- https://xpack.github.io/dev-tools/qemu-arm/options/ ✓ Archive
- https://xpack.github.io/dev-tools/qemu-arm/support/ ✓
- https://xpack.github.io/dev-tools/qemu-riscv/ ✓
- https://xpack.github.io/dev-tools/qemu-riscv/faq/ ✓
- https://xpack.github.io/dev-tools/qemu-riscv/install/ ✓
- https://xpack.github.io/dev-tools/qemu-riscv/support/ ✓
- https://xpack.github.io/dev-tools/realpath/ ✓
- https://xpack.github.io/dev-tools/realpath/faq/ ✓
- https://xpack.github.io/dev-tools/realpath/install/ ✓
- https://xpack.github.io/dev-tools/realpath/support/ ✓
- https://xpack.github.io/dev-tools/riscv-none-elf-gcc/ ✓
- https://xpack.github.io/dev-tools/riscv-none-elf-gcc/faq/ ✓
- https://xpack.github.io/dev-tools/riscv-none-elf-gcc/install/ ✓
- https://xpack.github.io/dev-tools/riscv-none-elf-gcc/support/ ✓
- https://xpack.github.io/dev-tools/riscv-none-embed-gcc/ ✓
- https://xpack.github.io/dev-tools/riscv-none-embed-gcc/faq/ ✓
- https://xpack.github.io/dev-tools/riscv-none-embed-gcc/install/ ✓
- https://xpack.github.io/dev-tools/riscv-none-embed-gcc/releases/ ✓
- https://xpack.github.io/dev-tools/riscv-none-embed-gcc/support/ ✓
- https://xpack.github.io/dev-tools/sed/ ✓
- https://xpack.github.io/dev-tools/sed/faq/ ✓
- https://xpack.github.io/dev-tools/sed/install/ ✓
- https://xpack.github.io/dev-tools/sed/support/ ✓
- https://xpack.github.io/dev-tools/windows-build-tools/ ✓
- https://xpack.github.io/dev-tools/windows-build-tools/faq/ ✓
- https://xpack.github.io/dev-tools/windows-build-tools/install/ ✓
- https://xpack.github.io/dev-tools/windows-build-tools/support/ ✓
- https://xpack.github.io/dev-tools/wine/ ✓
- https://xpack.github.io/dev-tools/wine/faq/ ✓
- https://xpack.github.io/dev-tools/wine/install/ ✓
- https://xpack.github.io/dev-tools/wine/support/ ✓
- https://xpack.github.io/dev-tools/xbb-bootstrap/ ✓ - Archive
- https://xpack.github.io/dev-tools/xbb-bootstrap/faq/ ✓ - Archive
- https://xpack.github.io/dev-tools/xbb-bootstrap/install/ ✓ - Archive
- https://xpack.github.io/dev-tools/xbb-bootstrap/support/ ✓ - Archive
```

```console
% grep 'https://xpack' sitemap-dev-tools.xml | sed -e 's|    <loc>|- |' -e 's|</loc>||' | grep -v '/blog/' | sort | sed -e 's|- https://xpack.github.io||' -e "s|/dev-tools/\([a-z0-9-]*\)\(.*\)|    { from: '/dev-tools/\1\2', to: 'https://xpack-dev-tools.github.io/\1-xpack/docs\2' },|" -e "s|/docs/'|/'|" -e 's|/riscv-none-embed-gcc-xpack/|/riscv-none-elf-gcc-xpack/|'
```

