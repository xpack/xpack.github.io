---
title: The xPack SVD Definitions
permalink: /metadata/xsvd/

summary: The metadata used to describe peripheral registers.

comments: true

date: 2017-10-10 20:00:00 +0300

redirect_from:
  - /xsvd/files/xsvd-json/

---

## Overview

The **XSVD** format is a rework of the Arm
[CMSIS SVD](https://www.keil.com/cmsis/svd), but cleaned, extended and
rewritten in JSON instead of XML.

## File conventions

### JSON Properties

As with any JSON file, the content is basically an object with several properties, represented as `"name": <value>`. The values may be strings, objects or arrays of other values.

### Collections

Traditionally, collections are stored in JSON as arrays, which impose no restrictions on the content or uniqueness.

If object names must be unique, collections of named children can be stored as objects (implemented as maps) with names as properties and children objects as values.

To simplify usage, except named children, collections cannot have other properties.

### Names

Since some XSVD definitions may be used to support the generation of C/C++ code files (object names may be used to compose type and macro definitions), the names must comply with ANSI C naming restrictions. In particular, they must not contain any spaces or special characters. Hyphens are allowed, but, when used to compose definitions, will be converted to underscores.

### Values

All scalar values, even those representing numeric values, should be encoded as strings.

Number constants shall be entered as hex or non-negative decimal integers:

* hexadecimal (`"0x..."`)
* decimal (`"123"`)

### Measuring units

Numeric values that may represent values with different units may have the unit explicitly added to the value, after a space separator:

* `"width": "32 bits"`
* `"hfosc": "13800 kHz"`
* `"lfosc": "32768 Hz"`

{% include note.html content="Currently not used." %}

### Reset masks

In addition to hex values, the strings `all` and `none` can be used, with the meaning of `0xFF..FF` and `0x0`.

## Arrays and repetitions

Although the original SVD specs treat them together, these are distinct notions.

### Arrays

Arrays are groups of identical objects that are addressed by a numeric index, starting as zero, as in most programming languages.

An object is considered an array if it has the `arraySize` property.

Only register and cluster objects can be grouped in arrays.

When used to generate device peripheral headers, register arrays generate C arrays of integers and cluster arrays generate C arrays os structures.

When used to display the peripheral registers in a debugger, the recommended way to preset arrays is as a group with the object name suffixed by `[]`, and below it all array elements, with the names suffixed by the index, like `[0]`, `[1]`, etc.

### Repetitions

Repetitions are a shortcuts to define sequences of similar objects; instead of defining a long list of similar objects, only a generic one is defined, plus a rule how each individual one is named.

An object is considered a repetition if it has the `repeatGenerator` property (and it is not an array, so the `repeatGenerator` property is ignored for arrays).

By default, the strings defined by the `repeatGenerator` are added at the end of the name; if more elaborate names must be generated, the `%s` must be used in the desired position in the object name.

The typical `repeatGenerator` defines a list of comma separated strings (like `a,b,c` or `0,1,2`). For numerical values, ranges are also supported (like `0-31`).

Only cluster, register and field objects can use repetitions.

Both when used to generate device peripheral headers and when used to display the peripheral registers in a debugger, repetitions generate a sequence of objects, with the names in the order given by the `repeatGenerator` property.

## Differences from SVD

Although inspired from SVD, the XSVD format is slightly different, taking full advantage of the JSON specifics; as such, XSVD files should be shorter, easier to read and less error prone.

* accept repetitions for fields (benefits: similar fields are easier to read)
* has explicit separate definitions for repetitions and arrays (benefits: improved readability)
* has simplified definitions for arrays, no explicit `[%s]` needed, added automatically (benefits: simplified definitions, improved readability)
* has simplified definitions for repetitions, no explicit `%s` if at the end, added automatically (benefits: simplified definitions, improved readability)
* accept `resetValue` and `resetMask` for fields (benefits: less error prone, improved readability)
* the `access` property was simplified to `["r","w","rw"]` (benefits: improved readability)
* use `busWidth` (instead of `<width>`) (benefits: less ambiguity)
* use `regWidth` (instead of `<size>`) (benefits: less ambiguity)
* use `repeatIncrement` (instead of `<dimIncrement>`) (benefits: less ambiguity)
* use `repeatGenerator` (instead of `<dimIndex>`) (benefits: less ambiguity)
* use `arraySize` (instead of `<dim>`) (benefits: less ambiguity)
* use `supplier` (instead of `<vendor>`) (benefits: more generic)

---

## Objects

The XSVD file is a hierarchy of objects, with the JSON root on top.

### The root object

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `schemaVersion` | string | The version is used by the parser to identify different file formats. |
| `contentVersion` | string | The content version; increase it with each change. |
| `headerVersion` | string | The version to be used in the generated header; it generally follows `contentVersion`, but may change if the header is regenerated with a new version of `xsvd`. |
| `devices` | collection | A map of device objects. Device names are internal IDs used to refer to the device; externally use the device `displayName`; must be unique among all files. |
| `generators` | array | Array of generator objects describing the tools that generated/modified the current file. |

Example

```json
{
    "schemaVersion": "0.2.0",
    "devices": {
        "fe310-g000": {
            "...": "..."
        }
    },
    "...": "..."
}
```

### The _device_ object

The device is the top-most object, and contains one or more peripherals.

| Parent |
|:-------|
| The `devices` collection, a property of the root object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `revision` | string | The silicon revision, usually in `r0p0` format. |
| `displayName` | string | A short string to externally identify the device. Must be unique among all files. If missing, the internal name (the map key) is used. |
| `headerName` | string | A short string to be used when referring to the device in a header file. Must be unique among all files. If missing, the `displayName` or the internal name (the map key) is used. |
| `description` | string | A long string to describe the main features of the device. |
| `supplier` | object | The device supplier. |
| `busWidth` | string | The width of the maximum single data transfer supported by the bus infrastructure, in bits. This information is relevant for debuggers when accessing registers, because it might be required to issue multiple accesses for resources of a bigger size. |
| `regWidth` | string | Default width of any register contained in the device, in bits. |
| `access` | string | Default access rights for all registers. Values: `["r","w","rw"]`. |
| `resetMask` | string | The register bits that have a defined reset value. |
| `resetValue` | string | Default value for all registers at RESET. |
| `headerGuardPrefix` | string | The prefix to be used in the header guard macro. |
| `headerTypePrefix` | string | The prefix to be used in type definitions. |
| `headerInterruptPrefix` | string | The prefix to be used in interrupt definitions. |
| `headerInterruptEnumPrefix` | string | The prefix to be used in the name of the interrupt enum. |
| `numInterrupts` | string | The total number of interrupts. Some platforms, like RISC-V start the count at 1. |
| `priorityBits` | string | The number of bits available in the Interrupt Controller for configuring priorities. |
| `cores` | collection | A map of core objects. The keys are internal IDs used to refer to the cores. |
| `peripherals` | collection | A map of peripheral objects. The keys are internal IDs used to refer to the peripherals; externally use the `displayName`; must be unique among devices. |

Example

```json
{
    "...": "...",
    "devices": {
        "fe310-g000": {
            "version": "1.0.0",
            "displayName": "Freedom E310-G000",
            "description": "The FE310-G000 is the first Freedom E300 SoC, ...",
            "busWidth": "32",
            "regWidth": "32",
            "resetValue": "0x00000000",
            "resetMask": "0xFFFFFFFF",
            "access": "rw",
            "peripherals": {
                "...": "..."
            }
        }
    },
    "...": "..."
}
```

### The _supplier_ object

| Parent |
|:-------|
| A **device** object. |

The device supplier.

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `name` | string | The supplier short name; a single word that uses only legal variable characters. |
| `id` | string | The supplier numeric id; should not change over time. |
| `displayName` | string | A short string to externally identify the supplier. |
| `fullName` | string | A longer string to externally identify the supplier, like official company name. |
| `contact` | string | Contact information. |

### The _cores_ object

| Parent |
|:-------|
| A **device** object. |

Most of the properties are descriptive, and currently do not participate in code generation.

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `harts` | string | The number of hardware threads per core. The default is 1. |
| `isa` | string | A short string to define the Instruction Set Architecture. |
| `isaVersion` | string | A short string to define the Instruction Set Architecture. |
| `mpu` | string | A string that indicate whether the core is equipped with a memory protection unit (MPU). Accepted values are `true/false` or custom names, for example, for RISC-V use 'pmp'. If no MPU is present, `none` is also accepted. |
| `mmu` | string | A string that indicate whether the core is equipped with a memory management unit (MMU). Accepted values are `true/false` or custom names, for example, for RISC-V use 'sv32/sv39/sv48'. If no MMU is present, `none` is also accepted. |
| `numLocalInterrupts` | string | The total number of local interrupts (specific to a core). Some platforms, like RISC-V always have at least 16 interrupts. |
| `localInterrupts` | collection | A map of interrupt objects. |

### The _peripheral_ object

At least one peripheral must be defined.

Each peripheral describes all registers belonging to that peripheral.
Each peripheral has a memory block where the registers are allocated, defined as a base address and a size.
Register addresses are specified relative to the base address of a peripheral.

Multiple similar peripherals sharing a common name can be defined as repetitions using the `repeatGenerator` property; for example instead of defining `GPIOA`, `GPIOB`, `GPIOC`, use `GPIO%s` (or simply `GPIO`, since `%s` at the end is default) and define separate generators like `A,B,C`.

The `repeatIncrement` property specifies the address offset between two peripherals.

To create copies of a peripheral using different names, use the `derivedFrom` property.

| Parent |
|:-------|
| The `peripherals` property of a **device** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `derivedFrom` | string | The peripheral name from which to inherit properties. Subsequent properties override inherited values. |
| `displayName` | string | A short string to externally identify the peripheral. Must be unique among the device. If missing, the internal name (the map key) is used. |
| `headerName` | string | A short string to be used when referring to the peripheral in a header file. Must be unique among the device. If missing, the `displayName` or the internal name (the map key) is used. |
| `description` | string | A long string to describe the peripheral. |
| `groupName` | string | Define a name for several related peripherals; used when generating types. |
| `baseAddress` | string | The lowest address of the memory block used by the peripheral. |
| `size` | string | The size in bytes of the memory block used by the peripheral. |
| `regWidth` | string | Default width of any register contained in the peripheral, in bits. |
| `access` | string | Default access rights for all peripheral registers. Values: `["r","w","rw"]`. |
| `resetMask` | string | The register bits that have a defined reset value. |
| `resetValue` | string | Default value for all peripheral registers at RESET. |
| `repeatIncrement` | string | The address increment, in bytes, between two neighbouring peripherals in a repetition or an array. |
| `repeatGenerator` | string | A generator of strings that substitute the placeholder `%s` within the `displayName`.
| `groupName` | string | Define a name under which the Peripheral Registers Viewer is showing this peripheral. |
| `headerStructName` | string | Specify the base name of C structures. The header file generator uses the peripheral `displayName` as the base name for the C structure type. If `headerStructName` is specified, then this string is used instead of the peripheral name; useful when multiple peripherals get derived and a generic type name should be used. |
| `clusters` | collection | A map of cluster objects. The keys are internal IDs used to refer to the clusters; externally use the cluster name. |
| `registers` | collection | A map of register objects. The keys are internal IDs used to refer to the registers; externally use the `displayName`. |
| `interrupts` | collection | A peripheral can have multiple associated interrupts. This entry allows the debugger to show interrupt names instead of interrupt numbers. |

```json
{
    "...": "...",
    "peripherals": {
        "clint": {
            "description": "Coreplex-Local Interruptor (CLINT)",
            "baseAddress": "0x02000000",
            "size": "0x10000",
            "registers": {
                "...": "..."
            }
        }
    },
    "...": "..."
}
```

### The _cluster_ object

A cluster describes a sequence of neighbouring registers within a peripheral. A cluster specifies the `addressOffset` relative to the `baseAddress` of the grouping element. All register objects within a cluster specify their `addressOffset` relative to the cluster base address (peripheral.baseAddress + cluster.addressOffset).

Nested clusters express hierarchical structures of registers. It is targeted at the generation of device header files to create a C-data structure within the peripheral structure instead of a flat list of registers. It is also possible to specify an array of a clusters using the `arraySize` property.

Multiple identical clusters can be grouped in arrays. The size of the array is specified by the `arraySize` property.

Multiple similar clusters sharing a common name can be defined as repetitions using the `repeatGenerator` property.

The `repeatIncrement` property specifies the offset in bytes between two clusters. If not specified, the cluster size is used.

| Parent |
|:-------|
| The `clusters` property of a **cluster** or **peripheral** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `derivedFrom` | string | The cluster name from which to inherit properties. Subsequent properties override inherited values. |
| `displayName` | string | A short string to externally identify the cluster. Must be unique among the parent object. If missing, the internal name (the map key) is used. For repetitions, use the placeholder `%s`, which is replaced by strings from `repeatGenerator`; if missing, `%s` will be added at the end. For arrays, the placeholder `[%s]` will be automatically added at the end. |
| `headerName` | string | A short string to be used when referring to the cluster in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. Same rules for `%s`. |
| `description` | string | A long string to describe the register. |
| `addressOffset` | string | The address offset relative to the enclosing element (peripheral or cluster). |
| `regWidth` | string | The width of the register, in bits. |
| `access` | string | Default access rights for the register. Values: `["r","w","rw"]`. |
| `resetMask` | string | The register bits that have a defined reset value. |
| `resetValue` | string | Default value for the register at RESET. |
| `repeatIncrement` | string | The address increment, in bytes, between two neighbouring clusters in a repetition or an array. |
| `repeatGenerator` | string | A generator of strings that substitute the placeholder `%s` within the `displayName`.
| `arraySize` | string | The size of the array of clusters. |
| `clusters` | collection | A map of cluster objects. The keys are internal IDs used to refer to the clusters; externally use the cluster name. |
| `registers` | collection | A map of register objects. The keys are internal IDs used to refer to the registers; externally use the `displayName`. |

```json
{
    "...": "...",
    "clusters": {
        "target-enables": {
            "displayName": "target-enables[%s]",
            "arraySize": "1",
            "description": "Hart M-Mode interrupt enable bits",
            "addressOffset": "0x0C002000",
            "repeatIncrement": "0x20",
            "registers": {
                "...": "..."
            }
        },
        "targets": {
            "displayName": "targets[%s]",
            "arraySize": "1",
            "description": "Hart M-Mode interrupt thresholds",
            "addressOffset": "0x0C200000",
            "repeatIncrement": "0x8",
            "registers": {
                "...": "..."
            }
        }
    },
   "...": "..."
}
```

### The _register_ object

The description of registers is the most important part of this file format. If the properties `regWidth`, `access`, `resetValue`, and `resetMask` have not been specified on a higher level, then these properties are mandatory on register level.

A register can represent a single value or can be subdivided into individual bit-fields of specific functionality and semantics. From a schema perspective, the property `fields` is optional, however, from a specification perspective, `fields` are mandatory when they are described in the device documentation.

Multiple identical registers can be grouped in arrays. The size of the array is specified by the `arraySize` property.

Multiple similar registers sharing a common name can be defined as repetitions using the `repeatGenerator` property.

The `repeatIncrement` property specifies the offset in bytes between two registers. If not specified, the register width is used.

| Parent |
|:-------|
| The `registers` property of a **cluster** or **peripheral** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `derivedFrom` | string | The register name from which to inherit properties. Subsequent properties override inherited values. |
| `displayName` | string | A short string to externally identify the register. Must be unique among the parent. If missing, the internal name (the map key) is used. For repetitions, use the placeholder `%s`, which is replaced by strings from `repeatGenerator`; if missing, `%s` will be added at the end. For arrays, the placeholder `[%s]` will be automatically added at the end. |
| `headerName` | string | A short string to be used when referring to the register in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. Same rules for `%s`. |
| `description` | string | A long string to describe the register. |
| `addressOffset` | string | The address offset relative to the enclosing element (peripheral or cluster). |
| `regWidth` | string | The width of the register, in bits. |
| `access` | string | Default access rights for the register. Values: `["r","w","rw"]`. |
| `resetMask` | string | The register bits that have a defined reset value. |
| `resetValue` | string | Default value for the register at RESET. |
| `repeatGenerator` | string | A generator of strings that substitute the placeholder `%s` within the `displayName`.
| `arraySize` | string | The size of the array of registers. |
| `fields` | collection | A map of field objects. The keys are internal IDs used to refer to the fields; externally use the `displayName`. |

```json
{
   "...": "...",
    "registers": {
        "msip0": {
            "description": "MSIP for hart 0",
            "addressOffset": "0x0000"
        },
        "mtimecmp0": {
            "description": "Timer compare register for hart 0",
            "addressOffset": "0x4000",
            "regWidth": "64"
        },
        "mtime": {
            "description": "Timer register",
            "addressOffset": "0xBFF8",
            "access": "ro",
            "regWidth": "64"
        }
    },
   "...": "..."
}
```

### The _field_ object

A bit-field has a name that is unique within the register. The position and size within the register can be described as
the lsb and the bit-width of the field.

Multiple similar fields sharing a common name can be defined as repetitions using the `repeatGenerator` property.

The `repeatIncrement` property specifies the offset in bits between two bit-fields. If not specified, the bit-field width is used.

A field may define an enumeration in order to make the display more intuitive to read.

The field names `mask`, `position` and `offset` are reserved.

{% include note.html content="Array of fields are currently not implemented." %}


| Parent |
|:-------|
| The `fields` property of a  **cluster** or **peripheral** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| parent | | A cluster object or a peripheral object |
| `derivedFrom` | string | The field name from which to inherit properties. Subsequent properties override inherited values. |
| `displayName` | string | A short string to externally identify the field. Must be unique among the register. If missing, the internal name (the map key) is used. For repetitions, use the placeholder `%s`, which is replaced by strings from `repeatGenerator`; if missing, `%s` will be added at the end. |
| `headerName` | string | A short string to be used when referring to the field in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. Same rules for `%s`. If empty, the header lines associated with this field will not be generated. |
| `description` | string | A long string to describe the field. |
| `bitOffset` | string | The position of the least significant bit of the field within the register. |
| `bitWidth` | string | The bit-width of the field within the register. |
| `access` | string | Default access rights for the register. Values: `["r","w","rw"]`. |
| `resetMask` | string | The field bits that have a defined reset value. |
| `resetValue` | string | Default value for the field at RESET. |
| `repeatIncrement` | string | The offset increment, in bits, between two neighbouring fields in a repetition. |
| `repeatGenerator` | string | A generator of strings that substitute the placeholder `%s` within the `displayName`.
| `enumerations` | collection | A map of enumeration objects. The key is the enumeration name. In the current version, only the first object is used, all the other are ignored. |

Example

```json
{
    "...": "...",
    "fields": {
        "data": {
            "description": "Transmit data",
            "bitOffset": "0",
            "bitWidth": "8"
        },
        "full": {
            "description": "Transmit FIFO full",
            "bitOffset": "31",
            "bitWidth": "1"
        }
    },
    "...": "..."
}
```

### The _enumeration_ object

The concept of enumerated values creates a map between unsigned integers and an identifier string. In addition, a description string can be associated with each entry in the map.

* `0` ↔︎ disabled → "The clock source clk0 is turned off."
* `1` ↔︎ enabled  → "The clock source clk1 is running."
* `*` ↔︎ reserved → "Reserved values. Do not use."

This information generates an enum in the device header file. The debugger may use this information to display the identifier string as well as the description. Just like symbolic constants making source code more readable, the system view in the debugger becomes more instructive. The detailed description can provide reference manual level details within the debugger.

| Parent |
|:-------|
| The `enumerations` property of a **field** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `derivedFrom` | string | The enumeration name from which to inherit properties. Subsequent properties override inherited values. |
| `displayName` | string | A short string to externally identify the enumeration. Must be unique among the enumerations. If missing, the internal name (the map key) is used. |
| `headerName` | string | A short string to be used when referring to the enumeration in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. |
| `description` | string | A long string to describe the enumeration. |
| `headerEnumName` | string | An alternate identifier for the enumeration section when used to generate the device header. The default is the hierarchical enumeration type in the device header file. The user is responsible for the uniqueness across the device. |
| `values` | collection | A map of enumerated values objects. The map keys are the enumeration numeric values (unsigned integers). |

{% include note.html content="`derivedFrom` is not yet implemented." %}

Example

```json
{
    "...": "...",
    "enumerations": {
        "clk-src-enum": {
            "displayName": "Clock source",
            "description": "Values to select the clock source.",
            "values": {
                "0": {
                    "displayName": "disabled",
                    "description": "The clock source clk0 is turned off."
                },
                "1": {
                    "displayName": "enabled",
                    "description": "The clock source clk1 is running."
                },
                "*": {
                    "displayName": "reserved",
                    "description": "Reserved values. Do not use."
                }
            }
        }
    },
    "...": "..."
}
```

### The _enumerated value_ object

An enumerated value defines a map between an unsigned integer (the map key) and a string.

| Parent |
|:-------|
| The `values` property of an **enumeration** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayName` | string | A short string to externally describe the semantics of the value. Usually displayed together with the value. |
| `headerName` | string | A short string to be used when referring to the enumeration value in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. |
| `description` | string | A long string to describe the value. |

### The _interrupt_ object

A peripheral can have multiple interrupts. This object allows the debugger to show interrupt names instead of interrupt numbers.

| Parent |
|:-------|
| The `interrupts` property of a **peripheral** object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `displayName` | string | A short string to externally identify the interrupt. Must be unique among all interrupts. If missing, the internal name (the map key) is used. |
| `headerName` | string | A short string to be used when referring to the interrupt in a header file. Must be unique among the parent object. If missing, the `displayName` or the internal name (the map key) is used. |
| `description` | string | A long string to describe the interrupt. |
| `value` | string | The enumeration index value associated to the interrupt. |

Example

```json
{
    "...": "...",
    "interrupts": {
        "uart0": {
            "description": "UART0 global interrupt",
            "value": "3",
            "headerName": "riscv_interrupt_global_handle_uart0"
        }
    }
    "...": "..."
}
```

### The _generator_ object

This is an informative object, used to trace which tools generated or modified the XSVD file.

| Parent |
|:-------|
| The root object. |

| Properties | Type | Description |
|:-----------|:-----|:------------|
| `tool` | string | A string describing the tool. |
| `version` | string | The tool version, as returned by `--version`. |
| `command` | string[] | Array of strings, the full command with all parameters. |
| `date` | string | A string with the date, in ISO format. |

Example

```json
{
    "...": "...",
    "generators": [
        {
            "tool": "xcdl",
            "version": "1.6.2",
            "command": [
                "svd-convert",
                "--file",
                "/Users/ilg/Library/xPacks/Keil/STM32F0xx_DFP/1.5.0/SVD/STM32F0x1.svd",
                "--output",
                "STM32F0x1-xsvd.json"
            ],
            "date": "2016-12-14T22:50:48.956Z"
        }
    ],
    "...": "..."
}
```

## Revision history

The format version is reflected in the `schemaVersion` property, present in the root object. The value of this property follows the semantic versioning requirements ([semver](https://semver.org)).

Versions are listed in reverse chronological order.

#### v0.2.4 (2017-12-06)

* use `enumerations` (plural); deprecate `enumeration`
* add `headerName` to differentiate from `displayName`; empty means _do not generate header line_
* deprecate `headerIrqName` in interrupts
* use `supplier` instead of `vendor` (rename object)
* add `fullName` to the supplier object

#### v0.2.3 (2017-10-27)

* add `headerGuardPrefix` to `device`

#### v0.2.2 (2017-10-23)

* increase `schemaVersion` to 0.2.2
* add top `headerVersion`
* add `headerInterruptPrefix` to `device`
* add `headerInterruptEnumPrefix` to `device`
* add `numInterrupts` to `device`
* add `priorityBits` to `device`
* remove unused `cpu` from `device`
* add `cores` to `device`
* remove `type` from `interrupt`; local interrupts are now defined per core

#### v0.2.1 (2017-10-18)

* increase `schemaVersion` to 0.2.1
* rename top `version` to `contentVersion`
* rename device `version` to `siliconVersion`
* add `groupName` to peripheral
* the content of `access` was changed to ["r","w","rw"]
* `repeatIncrement` ignored for register
* add `headerTypePrefix` to device
* add `vendor` to device

#### v0.2.0 (2017-10-11)

First formal specifications defined. Used to define the SiFive devices (like the FE310-G000, the first RISC-V physical device).


#### v0.1.0 (2016-12-14)

Initial version, a direct correspondence to the Arm SVD format. Firstly implemented by the xcdl program used by GNU Arm Eclipse QEMU.

## TODO

* clarify how multi-core devices can be described
* clarify if the `cpu` object is needed, since most of its definitions are already in the `device-xcdl.json` file
* define where the interrupt names are added
* define the QEMU mode bits, that define if unaligned or smaller size accesses are allowed.
