# README

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (for Webpack 5)
- TailwindCSS 2
- Svelte 3

### Development

```
bin/setup
foreman start
```

### Build assets for production

```
RAILS_ENV=production bin/rails webpacker:compile

Compiling...
Compiled all packs in /Users/ledermann/Playground/rails-svelte/public/packs
assets by path js/*.js 5.72 KiB
  asset js/379-0101c497fde434d98f5a.js 3.9 KiB [emitted] [immutable] [minimized] (id hint: vendors) 3 related assets
  asset js/runtime-5e88b5037547ccc778bb.js 1.05 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
  asset js/application-193c654bf20ae4b96389.js 794 bytes [emitted] [immutable] [minimized] (name: application) 3 related assets
asset css/application-f34cef04.css 4.99 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 2.39 KiB [emitted]
Entrypoint application 10.7 KiB (82.5 KiB) = js/runtime-5e88b5037547ccc778bb.js 1.05 KiB js/379-0101c497fde434d98f5a.js 3.9 KiB css/application-f34cef04.css 4.99 KiB js/application-193c654bf20ae4b96389.js 794 bytes 4 auxiliary assets
orphan modules 1.36 KiB [orphan] 3 modules
runtime modules 2.98 KiB 3 modules
code generated modules 55.2 KiB (javascript) 12.6 KiB (css/mini-extract) [code generated]
  ./app/packs/entrypoints/application.js + 2 modules 1.69 KiB [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/packs/stylesheets/application.scss 12.6 KiB [code generated]
  ./node_modules/svelte/internal/index.mjs 53.5 KiB [built] [code generated]
webpack 5.24.1 compiled successfully in 7818 ms
```

=> 6 KB JavaScript
