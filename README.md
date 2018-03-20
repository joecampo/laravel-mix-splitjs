laravel-mix-splitjs
===============

This is a simple Mix extension to further configure Webpack's chunking or disable code splitting when compiling your assets using `npm run dev` or `npm run watch`

Installation
------------
This package can be installed via NPM
```sh
npm install laravel-mix-splitjs --save-dev
```

or Yarn
```sh
yarn add laravel-mix-splitjs --dev
```

## Usage & Configuration
Out of the box Mix will code split dynamically imported things like Vue components ([How to dynamically import Vue components](https://github.com/JeffreyWay/laravel-mix/issues/1249#issuecomment-335112415)). This plugin is for when you would like to configure Webpack’s  chunking (e.g.  setting max chunk size) OR not code split when building your assets using `npm run watch` or `npm run dev`.

To use with defaults, simply require this plugin in your `webpack.mix.js` and chain on `.splitJs()` after your `.js()` call.

```javascript
let mix = require('laravel-mix');

require('laravel-mix-splitjs');

mix.js('resources/assets/js/app.js', 'public/js')
   .splitJs()
   .sass('resources/assets/sass/app.scss', 'public/css');
```

You can pass a configuration object to `splitJs()` that will be passed to Webpack’s `LimitChunkCountPlugin`

Defining your own configuration (This is the default configuration):

```javascript
mix.js('resources/assets/js/app.js', 'public/js')
   .splitJs({
       maxChunks: 1000, // The maximum amount of chunks to  split into
       productionOnly: true, // Only code split in production
       publicPath: '/',
       chunkFileName: 'js/[name].[chunkhash].js', // Hash file names by default
    });
```


## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
