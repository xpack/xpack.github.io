---

title: Node.js Tips & Tricks
description: Examples of calling Node.js functions.
keywords:
  - xpack
  - node.js
  - tips
  - tricks

date: 2017-10-09 02:47:00 +0300

---

# Node.js Tips & Tricks

## Node.js documentation

- [API](https://nodejs.org/en/docs/)

### Display objects

To display all the members of an object, use:

```js
const util = require('util')
console.log(util.inspect(something))
```

### Check if file/folder exist

Use `stat()`.

```js
    try {
      await fsPromises.stat(aPath)
      // It does.
    } catch (err) {
      // It does not.
    }
```

### Check if symbolic link

Use `lstat()`, since `stat()` follows the link.

```js
const stats = await fsPromises.lstat(aPath)

if (stats.isSymbolicLink()) {
  // ...
}
```

### Iterate over a directory

Use `readdir()` to return an array of file names or structures.

```js
  static async chmodRecursive ({ inputPath, readOnly, log }) {
    assert(inputPath, 'Mandatory inputPath')
    assert(log, 'Mandatory log')

    const Self = this

    const stat = await fsPromises.lstat(inputPath)
    // log.trace(util.inspect(stat))

    // The order is important, process the folder before
    // changing it to RO.
    if (readOnly && stat.isDirectory()) {
      log.trace(inputPath)
      const files = await fsPromises.readdir(inputPath, { withFileTypes: true })
      for (const file of files) {
        await Self.chmodRecursive({
          inputPath: path.resolve(inputPath, file.name),
          readOnly,
          log
        })
      }
    }

    const mode = stat.mode
    // For RO, remove all W bits, for RW add only user.
    const newMode = readOnly
      ? mode & ~(fs.constants.S_IWUSR | fs.constants.S_IWGRP |
          fs.constants.S_IWOTH)
      : mode | (fs.constants.S_IWUSR)

    await fsPromises.chmod(inputPath, newMode)

    // If RW, process the folder after changing it to RW.
    if (!readOnly && stat.isDirectory()) {
      log.trace(inputPath)
      const files = await fsPromises.readdir(inputPath, { withFileTypes: true })
      for (const file of files) {
        await Self.chmodRecursive({
          inputPath: path.resolve(inputPath, file.name),
          readOnly,
          log
        })
      }
    }
  }
```
