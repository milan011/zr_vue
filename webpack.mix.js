let mix = require('laravel-mix');
let path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let config = {
  resolve: {
    alias: {
      '@':path.resolve("resources/assets/js"),
    }
  },
  // chunks:[]
}


console.log(path.resolve("resources/assets/js"));

mix.webpackConfig(config);

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css').version();


