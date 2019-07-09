const mix = require('laravel-mix')

mix.browserSync('localhost:8000')
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .version()