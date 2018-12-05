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
      // 'vendor': path.resolve('resources/assets/js/vendor'),
    },
  },
  /*externals: {//配置不打包的选项
        'element-ui': 'Element',
        'axios': 'axios', 
        'vue': 'Vue', 
        'vuex': 'Vuex', 
        'vue-router': 'VueRouter', 
        'vue-chartjs': 'VueChartJs', 
        'lodash': '_', 
    }, */
  module: {
    /*loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],*/
    rules: [
      {
        test: /\.jsx?$/,
        include: /(node_modules\/element-ui)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: 'vue-app',
              plugins: [
                ["component", [
                  {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-default"
                  }
                ]],"transform-vue-jsx"]
            }
          }
        ]
      },
    ]
  },
  // chunks:[]
}


// console.log(path.resolve("resources/assets/js"));

mix.webpackConfig(config);

mix.js('resources/assets/js/app.js', 'public/js')
   // .sass('resources/assets/sass/app.scss', 'public/css').version();
   .sass('resources/assets/sass/app.scss', 'public/css');


