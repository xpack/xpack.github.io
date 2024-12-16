---
title: The xPack Build Definitions
permalink: /metadata/build/

summary: The metadata used by the build tools.

comments: true

date: 2017-10-09 16:46:00 +0300

---

{% include warning.html content="Preliminary specifications! Before the first stable release, they can change at any time, without notice." %}

## Overview

The `xbuild.json` files are intended to be consumed by
the xPack build tools.

The formal definitions are available in the JSON schema
[xbuild-0.3.0.json]({{ site.baseurl }}/schemas/xbuild-0.3.0.json) file.

As for other managed build systems, the result of the xPack build generator
process is a set of command lines to be passed to the builder.

To construct these command lines, the metadata files should
provide:

- a way to construct the list of source files that enter the build
  (explicit file names or recursive searches in folders)
- for each source file, a method to select a tool to be used to process it
- all the details required to fill in the command lines (compiler options,
  defined symbols, header folder/files, etc).

A typical blinky project might look like:

{% raw %}
```json
{
  "schemaVersion": "0.3.0",
  "includeMetadata": [
    "xpacks/toolchains-metadata/toolchains-gcc-xbuild.json"
  ],
  "description": "STM32F4DISCOVERY Blinky project",
  "name": "blinky",
  "target": {
    "platform": "stm32f4-discovery",
    "cpu": {
      "device": "stm32f407vg"
    }
  },
  "toolsCollections": [
    "xpack-arm-none-eabi-gcc"
  ],
  "language": "c++",
  "builder": "ninja",
  "buildConfigurations": {
    "debug": {
      "addSourcePaths": [
        "src"
      ],
      "removeSourcePaths": [
        "src/stm32f4-hal/stm32f4xx_ll_utils.c",
        "src/stm32f4-hal/stm32f4xx_ll_usb.c"
      ],
      "toolsSettings": {
        "c-compiler": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-O0",
            "-std=gnu11",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-DDEBUG",
            "-DTRACE",
            "-DUSE_FULL_ASSERT",
            "-DOS_USE_TRACE_SEMIHOSTING_DEBUG",
            "-DSTM32F407xx",
            "-DPLATFORM_STM32F4_DISCOVERY",
            "-DUSE_HAL_DRIVER",
            "-DHSE_VALUE=8000000",
            "-DOS_USE_SEMIHOSTING",
            "-I{{ project.absolutePath }}/include",
            "-I{{ project.absolutePath }}/system/include",
            "-I{{ project.absolutePath }}/system/include/cmsis",
            "-I{{ project.absolutePath }}/system/include/stm32f4-hal"
          ]
        },
        "cpp-compiler": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-O0",
            "-std=gnu++11",
            "-fabi-version=0",
            "-fno-exceptions",
            "-fno-rtti",
            "-fno-use-cxa-atexit",
            "-fno-threadsafe-statics",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-DDEBUG",
            "-DTRACE",
            "-DUSE_FULL_ASSERT",
            "-DOS_USE_TRACE_SEMIHOSTING_DEBUG",
            "-DSTM32F407xx",
            "-DPLATFORM_STM32F4_DISCOVERY",
            "-DUSE_HAL_DRIVER",
            "-DHSE_VALUE=8000000",
            "-DOS_USE_SEMIHOSTING",
            "-I{{ project.absolutePath }}/include",
            "-I{{ project.absolutePath }}/system/include",
            "-I{{ project.absolutePath }}/system/include/cmsis",
            "-I{{ project.absolutePath }}/system/include/stm32f4-hal"
          ]
        },
        "cpp-linker": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-O0",
            "-std=gnu11",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-Wl,--gc-sections",
            "-T{{ project.absolutePath }}/linker-scripts/mem.ld",
            "-T{{ project.absolutePath }}/linker-scripts/sections.ld",
            "-nostartfiles",
            "-Wl,-Map,\"{{ artefact.name }}.map\"",
            "--specs=nano.specs"
          ]
        }
      }
    },
    "release": {
      "addSourcePaths": [
        "src"
      ],
      "removeSourcePaths": [
        "src/stm32f4-hal/stm32f4xx_ll_utils.c",
        "src/stm32f4-hal/stm32f4xx_ll_usb.c"
      ],
      "toolsSettings": {
        "c-compiler": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-Os",
            "-std=gnu11",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-DNDEBUG",
            "-DSTM32F407xx",
            "-DPLATFORM_STM32F4_DISCOVERY",
            "-DUSE_HAL_DRIVER",
            "-DHSE_VALUE=8000000",
            "-DOS_USE_SEMIHOSTING",
            "-I{{ project.absolutePath }}/include",
            "-I{{ project.absolutePath }}/system/include",
            "-I{{ project.absolutePath }}/system/include/cmsis",
            "-I{{ project.absolutePath }}/system/include/stm32f4-hal"
          ]
        },
        "cpp-compiler": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-Os",
            "-std=gnu++11",
            "-fabi-version=0",
            "-fno-exceptions",
            "-fno-rtti",
            "-fno-use-cxa-atexit",
            "-fno-threadsafe-statics",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-DNDEBUG",
            "-DSTM32F407xx",
            "-DPLATFORM_STM32F4_DISCOVERY",
            "-DUSE_HAL_DRIVER",
            "-DHSE_VALUE=8000000",
            "-DOS_USE_SEMIHOSTING",
            "-I{{ project.absolutePath }}/include",
            "-I{{ project.absolutePath }}/system/include",
            "-I{{ project.absolutePath }}/system/include/cmsis",
            "-I{{ project.absolutePath }}/system/include/stm32f4-hal"
          ]
        },
        "cpp-linker": {
          "addOptions": [
            "-mcpu=cortex-m4",
            "-mthumb",
            "-mfloat-abi=soft",
            "-g3",
            "-Wall",
            "-Wextra",
            "-Os",
            "-std=gnu11",
            "-fmessage-length=0",
            "-fsigned-char",
            "-ffunction-sections",
            "-fdata-sections",
            "-Wl,--gc-sections",
            "-T{{ project.absolutePath }}/linker-scripts/mem.ld",
            "-T{{ project.absolutePath }}/linker-scripts/sections.ld",
            "-nostartfiles",
            "-Wl,-Map,\"{{ artefact.name }}.map\"",
            "--specs=nano.specs"
          ]
        }
      }
    }
  }
}
```
{% endraw %}

## Generalities

### Definitions

- **build configuration**: a complete group of definitions which will
  eventually result in an artefact; in a project, the build
  configuration names (including those used for tests), must be unique;
  for simple projects usually there are only two top configurations,
  `debug`/`release`; for
  complex projects there can be more, for different targets or,
  in test cases, even for different toolchains;
- **artefact**: the result of a build; as of now, it
  can be an executable or a library;
- **toolsCollections**: collections of tools, usually toolchains;
- **target platform**: the platform that the artefact is supposed to
  run on; usually a board or a physical machine, but can also be
  a synthetic platform, like a POSIX process running on a GNU/Linux or
  macOS system;

### Contexts

The `*xbuild.json` files can be located in multiple contexts:

- package root folder
- test root folder
- sub-folders

When xPack aware tools start, they read-in  the `xbuild.json` file
located in the project root folder.

If needed, these top files
can include files from any sub-folders, local to the project or from
dependencies.

Inner files can include other files, at any depth.

Multiple occurrences of the same definitions trigger warnings and are
ignored.

Example:

```json
{
  "includeMetadata": [
    "sub-folder/.xbuild.json"
  ]
}
```

### Definitions hierarchies

For each build configuration, the build process
constructs a tree with folder and files nodes,
which follow the file system hierarchy.

The file nodes are leaves in this tree, while folder nodes may
have other children.

Each new sub-level may contribute additional compiler options to the build,
such that files located deeper in the hierarchy may be compiled with different
options.

### Add/remove

For each node of the hierarchy, the definitions are kept in
ordered lists. The common behaviour when creating a new node is to
copy the definitions from the parent and append the new definitions
to the end of the list; thus the `addOptions` properties.

If a definition from the parent is not needed, the child can
instruct the builder to avoid copying it, by using the
`removeOptions` properties.

## Folder/file specific metadata

The definitions in the top `*xbuild.json` file apply to all files that enter
the build.

However it is possible to enter specific definitions for folders, and
in this case they apply for all files in the folder, or for a specific file.

Two kinds of data can be defined:

- for source folders, a list of exclusions (folders and/or files)
- for source folders/files, possible different compiler settings.

The folder/file settings may be distributed
in each folder, with file paths local to the folder.

### Project and/or test folders

To identify a folder as an xPack build project, a full `xbuild.json` file,
which includes the `build.name` property, is expected in the project root.

Tests are a specific kind of executable projects, and are also identified
by a full `xbuild.json` in each test folder.

## Objects

The `xbuild.json` file defines a hierarchy of objects with properties,
with the JSON root on top.

### The root object

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `schemaVersion` | string | The version in [semver](https://semver.org) format, that identifies the expected structure of the JSON content (see [index]({{ site.baseurl }}/metadata/)). |
| `license` | string | The license used to distribute the file (see [index]({{ site.baseurl }}/metadata/)). |
| `copyright` | string | The copyright owner (see [index]({{ site.baseurl }}/metadata/)). |
| `description` | string | A short sentence describing the project or the content of the file. May be displayed by GUI tools processing the file. |
| `$comment` | string | A place to keep internal notices. |
| `name` | string | The build name. It is mandatory for projects and for tests. |
| `builder` | string | The default builder name. |
| `target` | object | The target platform/device/etc. |
| `language` | string | The programming language (c/c++); overrides the top definition. |
| `artefact` | object | The name and type of the artefact to be built. |
| `includeMetadata` | string[] | An array of paths relative to the location of the file. |
| `buildConfigurations` | collection | A map of build configurations. |

#### The **name** property

The build name is used to create other names, like artefact names.

Example:

```json
{
  "name": "blinky"
}
```

#### The **builder** property

The `builder` property identifies the default builder used to create the
artefact.

It can be used only in project or test `*xbuild.json` files; using it in folder
specific metadata files triggers an warning.

Currently only `ninja`, `make` and `internal` are supported, with the
internal builder not yet available.

The default value is `internal`, which, for now, means that the builder must
be explicitly defined, or passed on the command line.

Example:

```json
{
  "builder": "ninja"
}
```

### The _includeMetadata_ array

To facilitate reuse of definitions, it is possible to collect them
from multiple files.

Included files may include other files, at any depth.

The location of each file is remembered, such that relative paths used
in each files can be correctly processed.

Contributions to maps/arrays are appended at the end; inner files are
processed before the current file.

Example:

```json
{
  "includeMetadata": [
    "xpacks/toolchains-metadata/toolchains-gcc-xbuild.json",
    "xpacks/toolchains-metadata/profiles-gcc-xbuild.json"
  ]
}
```

## The _target_ object

The target definitions are not actively used during builds, but are useful
for example when creating new debug launchers.

| Parent |
|:-------|
| The **buildConfiguration** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `platform` | string | The target platform id. |
| `cpu` | object | The target CPU. |

Example:

```json
{
  "target": {
    "platform": "stm32f4-discovery",
    "cpu": {
      "device": "stm32f407vg"
    }
  }
}
```

## The _cpu_ object

The **cpu** object defines the target CPU device name, and possibly
other grouping names (like family, subFamily, variant).

| Parent |
|:-------|
| The **target** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `family` | string | The target device family id. |
| `subFamily` | string | The target device sub-family id. |
| `device` | string | The target device sub-family id. |
| `variant` | string | The target device variant id. |

## The _artefact_ object

Alias: `artifact` (american spelling).

The **artefact** object defines the type and name of the output file.

It can be used only in project or test `*xbuild.json` files; using it in folder
specific metadata files triggers an warning.

| Parents |
|:-------|
| The root object. |
| The **buildConfiguration** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `type` | string | The artefact type (application or library). |
| `name` | string | The artefact name. |
| `outputPrefix` | string | The artefact name prefix. |
| `outputSuffix` | string | The artefact name suffix. |
| `extension` | string | The artefact extension. |

The `type` property can be one of:

- `executable` (default; default extension is `.exe` on Windows)
- `staticLib` (default extension is `.a`)
- `sharedLib` (default extension is `.so` for Linux)

If not present, The `name` property defaults to `{{ build.name }}`.

If not present, the default prefix/suffix properties are empty.

The actual name used for the artefact is a concatenation of four fields:

{% raw %}
```json
"{{ artefact.outputPrefix }}{{ artefact.name }}{{ artefact.outputSuffix }}{{ artefact.extension }}"
```
{% endraw %}

Example:

{% raw %}
```json
{
  "buildConfiguration": {
    "debug": {
      "artefact": {
        "type": "executable",
        "name": "{{ build.name }}",
        "outputPrefix": "",
        "outputSuffix": "",
        "extension": ""
      },
      "...": "..."
    }
  }
}
```
{% endraw %}

## The _buildConfiguration_ object

**Build configurations** are objects used to collect all the definitions
required to generate the builder files required to build the artefact from
the source file.

The definitions are mainly command line options to be passed to various tools.
They can be in-lined or copied from multiple _groups_ (to be added in a
future release).

The build starts by constructing an array of paths to source files,
possibly by recursively searching files with specific extensions in the
given source folders.

Source files in inner folders may be configured with specific options,
for example with extra `-Wno-xxx` options to disable some warnings.

| Parent |
|:-------|
| The root object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `target` | object | The target platform/device/etc. |
| `builder` | string | The default builder name; overrides the top definition. |
| `language` | string | The programming language (c/c++); overrides the top definition. |
| `artefact` | object | The name and type of the artefact to be built; override the top definition. |
| `addSourcePaths` | string[] | Array of paths to source files, or paths to folders with source files, to be added to the build. |
| `removeSourcePaths` | string[] | Array of paths to be excluded from the build.|
| `toolsSettings` | collection | Map of settings to be added for different tools. |
| `sourceFoldersSettings` | collection | Map of settings to be added for a specific sub-folder. |
| `sourceFilesSettings` | collection | Map of settings to be added for a specific file in a sub-folder. |

## The _addSourcePaths_ array

Type: array of strings.

This array defines the paths to:

- source files
- folder containing source files

All paths are relative to the current folder.

For tests, which are located deeper in the file system hierarchy,
a typical configuration is:

```json
{
  "addSourcePaths": [
    "../../src",
    "."
  ]
}
```

## The _removeSourcePaths_ array

Type: array of strings.

If a definition from the parent is definitely not needed, it can be removed:

```json
{
  "removeSourcePaths": [
    "lib"
  ]
}
```

If the definitions to be removed do not exist, warnings are issued.

For a given build, all source folders are searched for source files,
possible exclusions from `sourceFolderSettings` are processed, and the
remaining files enter the build.

## The _toolsSetting_ object

| Parent |
|:-------|
| The **buildConfiguration** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `addOptions` | string[] | Array of strings with the actual command line options. |
| `removeOptions` | string[] | Array of strings with command line options to be removed. |

## The _sourceFoldersSetting_ object

The **sourceFoldersSetting** object defines additional options
specific to a folder.

| Parent |
|:-------|
| The **buildConfiguration** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `toolsSettings` | collection | Collection of tools settings. |

## The _sourceFilesSetting_ object

The **sourceFilesSetting** object defines additional options
specific to a file.

| Parent |
|:-------|
| The **buildConfigurations** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `addOptions` | string[] | Array of strings with command line options to be added. |
| `removeOptions` | string[] | Array of strings with command line options to be removed. |

## The _toolsCollection_ object

The **toolsCollection** object defines a group of related tools,
usually a toolchain.

| Parent |
|:-------|
| The root object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayDescription` | string | A short sentence describing the tools collection. May be displayed by GUI tools processing the collection. |
| `commandPrefix` | string | TODO |
| `commandSuffix` | string | TODO |
| `displayDescriptionPrefix` | string | TODO |
| `isCross` | boolean | TODO |
| `objectExtension` | string | TODO |
| `makeObjectsVariable` | string | TODO |
| `tools` | collection | Collection of tools. |

TODO

## The _tool_ object

The **tool** object defines the characteristics of a tool from a tools
collection.

| Parent |
|:-------|
| The **toolsCollection** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayDescription` | string | A short sentence describing the tool. May be displayed by GUI tools processing the tools. |
| `commandName` | string | TODO |
| `inputFileExtensions` | string[] | TODO (like `.c`, `.cpp`) |
| `outputFileExtension` | string | TODO (like `.o`) |
| ... | string | TODO |

TODO

## TODO

- add a method to define group options and apply in multiple tools
  (like "$include: #/$groups/<name>")
- allow multiple artefacts
- rework artefacts to add an explicit mention of the tool
- add pre/post actions
- study the GUI integration
