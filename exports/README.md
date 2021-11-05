# Node ES Modules Support

These are some experiments on supporting Node.js EcmaScript Modules feature.

[Original discussion](https://gitlab.com/catamphetamine/libphonenumber-js/-/issues/42#note_718767070)

[TypeScript support](https://www.typescriptlang.org/docs/handbook/esm-node.html)

## Status

I have decided not to do this for now because it seems too convoluted. The new ES Modules feature in Node.js has several weird and needless restrictions that overcomplicate the whole process of supporting that feature. Among those restrictions, requiring a developer to specify an explicit file extension is just stupid.

Even if someone decides to implement all this and submit a pull request, I don't think that it would get merged because it's still to convoluted. They should come up with a better designed ES Module importing system.

## Steps

First, add the entries from `exports/package.json` file to `package.json` file.

Then, the following steps should be added to the `build` script in `package.json`:

* Delete `exports/build` and `exports/es6` folders, if those exist.

* Copy `build` and `es6` folders to `exports` folder.

* In every file in `build` and `es6` folders (recursively), modify all `import`s by appending `.js` to all file paths.

* Create a "dummy" `exports/build/package.json` file just so it overrides the `type: "module"` import flag defined in `package.json` file.

```js
{
  "private": true,
  "name": "libphonenumber-js/commonjs",
  "version": "1.0.0",
  "main": "../min/commonjs/index.js"
}
```

* Copy `types.d.ts` file to `exports/types.d.ts`.

* For each of the: `min`, `mobile`, `max`, `full`, `core`.

  * Copy `min/metadata.js` and `min/index.js` files and `min/exports/` folder to `exports/min`.
  * In `exports/min/metadata.js` file, modify the import path to be `'../metadata.min.json/index.js'`.
  * In `exports/min/index.js` file, modify all `export`s by appending `.js` to all file paths.
  * In every file in `exports/min/exports` folder, modify all `import`s by appending `.js` to all file paths.
  * Copy `min/commonjs.js` file to `exports/min/index.cjs`.
  * In `exports/min/index.cjs` file, modify all `import`s by appending `.js` to all file paths. Also change `../core/index.commonjs` path to `../../core/index.cjs`, and `../metadata.min.json` path to `../../metadata.min.json/index.cjs`.

* For each of the: `min`, `core`.

  * Copy `min/index.d.ts` file to `exports/min/index.d.ts`.
  * In `exports/min/index.d.ts`, add `.d.ts` to all imported file paths.

* For each of the: `min`, `mobile`, `max`, `full`.

  * Copy `metadata.min.json.js` file to `exports/metadata.min.json/index.cjs`.
  * In `exports/metadata.min.json/index.cjs` file, replace `export default` with `exports = module.exports =`.
  * Copy `metadata.mobile.json.d.ts` file to `exports/metadata.mobile.json/index.d.ts`.
  * In `exports/metadata.mobile.json/index.d.ts`, add `.d.ts` to all imported file paths.

* For `mobile`.

  * Copy `examples.mobile.json.js` file to `exports/examples.mobile.json/index.cjs`.
  * In `exports/examples.mobile.json/index.cjs` file, replace `export default` with `exports = module.exports =`.
  * Copy `examples.mobile.json.d.ts` file to `exports/examples.mobile.json/index.d.ts`.
  * In `exports/examples.mobile.json/index.d.ts`, add `.d.ts` to all imported file paths.

## Testing

Test if it works in:

* Node.js before version 12.
* Node.js 12+.
* Webpack 5.
* Webpack 6.
* TypeScript — See if it finds the "typings" for those `exports` entries when `import`ing from `libphonenumber-js/min`, etc.
  * Without `"compilerOptions": { "module": "nodenext" }` config.
  * With `"compilerOptions": { "module": "nodenext" }` config.