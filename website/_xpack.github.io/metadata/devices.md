---
title: The xPack Devices Definitions
permalink: /metadata/devices/

summary: The metadata used to describe devices.

comments: true

date: 2017-10-10 19:59:00 +0300

---

## Overview

The **XPDSC** format includes metadata used to describe boards and devices.

It inherits from CMSIS PDSC the subset related to boards and devices.

{% include note.html content="Version 0.3.0 is currently _work in
progress_ and will be implemented in Eclipse and other tools when ready." %}

## File names

By definition, XPDSC files are identified by the suffix `xpdsc.json`,
and can be prefixed by anything, preferably separated by a dash, like:

* `devices-xpdsc.json` or `device-pdsc.json`
* `boards-xpdsc.json` or `board-xpdsc.json`

The use of plurals is a convention, to make explicit that the files
contain definitions for multiple objects.

## Objects

The XCDL file is a hierarchy of objects, with the JSON root on top.

### The root object

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `schemaVersion` | string | The version is used by the parser to identify different file formats. |
| `cpus` | collection | A parent for all CPU related definitions. |
| `platforms` | collection | A parent for all platform/board related definitions. |

Example:

```json
{
    "schemaVersion": "0.3.0",
    "cpus": {
        "families": {
            "fe": {
                "...": "..."
            }
        }
    },
}
```

### The _cpu_ object (since 0.3)

The CPU is the top-most object, and usually contains one CPU/MCU family.

| Parents |
|:-------|
| The root object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `families` | collection | A map of family objects. The keys are internal IDs used to refer to the family. |

### The _family_ object

| Parent |
|:-------|
| A **cpu** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayName` | string | A short string to externally identify the device family. Must be unique among all files. If missing, the internal name (the map key) is used. |
| `description` | string | A long string to describe the main features of the device family. |
| `supplier` | object | The device supplier. |
| `subFamilies` | collection | A map of sub-family objects. The keys are internal IDs used to refer to the objects. (optional) |
| `devices` | collection | A map of device objects. The keys are internal IDs used to refer to the devices. |

### The _supplier_ object

The device supplier.

| Parent |
|:-------|
| A **family** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `id` | string | The supplier numeric id; should not change over time. |
| `displayName` | string | A short string to externally identify the supplier. |

### The _subFamily_ object

| Parent |
|:-------|
| A **family** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayName` | string | A short string to externally identify the device sub-family. Must be unique among all files related to a supplier. If missing, the internal name (the map key) is used. |
| `description` | string | A long string to describe the main features of the device sub-family. |
| `devices` | collection | A map of device objects. The keys are internal IDs used to refer to the devices. |

### The _device_ object

The device is the basic object, and correspond to a single implementation of a CPU/MCU which has unique characteristics from the software point of view.

| Parent |
|:-------|
| A **family** or **subFamily** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayName` | string | A short string to externally identify the device. Must be unique among all files related to a supplier. If missing, the internal name (the map key) is used. |
| `description` | string | A long string to describe the main features of the device. |
| `url` | string | A full URL to a page describing the device. |
| `compiler` | object | compiler specific definitions. |
| `features` | object | TBD |
| `memoryRegions` | collection | TBD |
| `debug` | object | TBD |

### The _compiler_ object

An object with definitions useful for the compiler.

| Parent |
|:-------|
| A **device** or **board** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `headers` | string[] | headers to include the board/device definitions. |
| `defines` | string[] | preprocessor definitions for the board/device. |


### The _debug_ object

An object with definitions useful for debug sessions.

| Parent |
|:-------|
| A **device** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `jtag` | object | TBD |
| `xsvd` | string | the relative path to the XSVD JSON file (POSIX paths). Used by the debugger to display the peripheral registers. |
| `svd` | string | the relative path to the CMSIS SVD XML file, (POSIX paths). Used by the debugger to display the peripheral registers. Ignored if the `xsvd` property is present. |


TODO: add board definitions

## Revision history

The format version is reflected in the `schemaVersion` property,
present in the root object.

Starting with v3, the format was renamed as XPDSC.

Versions are listed in reverse chronological order.

### v0.3.0 (2020-12-26)

* renamed as xpdsc
* for greater generality, use `cpus` instead of `mcus`

### xcdl v0.2.0 (2017-12-27)

* simplify `supplier`, keep only `id` and `displayName`
* rename `compile` to `compiler`
* rename `macros` to `defines`

### xcdl v0.1.0 (2017-12-08)

* preliminary version, only some device related fields.
