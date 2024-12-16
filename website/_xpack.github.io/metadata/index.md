---
title: The xPack Metadata
permalink: /metadata/

summary: The metadata used by xPack tools.

comments: true

date: 2020-12-29 15:17:00 +0300

---

## Overview

The xPack metadata is a set of JSON definitions intended to assist
the xPack tools during the entire project lifetime:

- creation from templates (device and platform selection, memory map)
- configuration (application and system part)
- build (multiple build configurations and tests)
- debug (device selection, peripheral registers views)

## Metadata files

The xPack metadata is stored into several files:

- `package.json`: the npm metadata file may also include some
  xPack specific metadata
- `*xbuild.json`: the xPack build related metadata; it is stored into
  multiple files, located both in the project root, and into
  different inner folders
- `*xpdsc.json`: similar to the CMSIS PDSC, actually only a small subset,
  with the devices and boards definitions, used by templates and during
  debug (to locate the SVD files)
- `*xsvd.json`: similar to the CMSIS SVD files, with the
  peripheral register definitions, used during debug

## Definitions

- [build]({{ site.baseurl }}/metadata/build/)
- [devices & platforms]({{ site.baseurl }}/metadata/devices/)
- [components]({{ site.baseurl }}/metadata/components/)
- [peripheral registers]({{ site.baseurl }}/metadata/xsvd/)

## JSON Properties

As with any JSON file, the content is basically an object with
several properties, represented as `"name": <value>`. The values
may be strings, objects or arrays of other values.

## Collections

Traditionally, collections are stored in JSON as arrays, which
impose no restrictions on the content or uniqueness.

If object names must be unique, collections of named children can
be stored as objects (implemented as maps) with names as keys and
children objects as values.

To simplify usage, except named children, collections cannot have
other properties.

## Lower case names

All object and properties names must be composed from letters, hyphens,
or digits.
When used to create paths, case is not significative and all
letters are internally converted to lower case.

## Paths

All paths use the POSIX syntax, with `/` separators.

## Macros

In certain places, strings may contain macros, with a syntax inspired by
the Liquid templates:

{% raw %}
```json
"name": "{{ expression }}"
```
{% endraw %}

where _expression_ can be a name or a qualified name, like `test.name`.

## JSON Files

[JSON](https://www.json.org/json-en.html) is a lightweight data-interchange
format introduced by JavaScript.

As usual with JSON files, the definitions are organised as a hierarchy of
object with properties with values.

The values can be:

- scalar (strings, numbers, boolean)
- arrays of properties (`[ "Ford", "BMW", "Fiat" ]`)
- objects, as maps of properties
  (`{ "name":"John", "age":30, "car":null }`).

## Common definitions

### The **schemaVersion** property

The `schemaVersion` is used by parsers to dinamically adapt to different
file format versions; changes in the schema or in the semantics should be
reflected in a different version.

The `schemaVersion` property is mandatory for all `*xbuild.json` files.
A recent version of the
xPack aware tools should be prepared to parse all older version of the
`*xbuild.json` files. When asked to process a newer, possibly
incompatible, version of an `*xbuild.json` file, the tools
that do not reconise that version should throw an error.

The version is also used to select a JSON schema during validation.

Example:

```json
{
  "schemaVersion": "0.3.0"
}
```

### The **license** property

The license is a short identifier, defined by
[SPDX](https://spdx.org/licenses/).

Example:

```json
{
  "license": "MIT"
}
```

### The **copyright** property

The copyright is a short string, with the name of the copyright owner.

Example:

```json
{
  "copyright": "© 2021 Liviu Ionescu"
}
```
