const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .styles([
        'resources/assets/plugins/bootstrap/css/bootstrap.min.css',
        'resources/assets/plugins/feather/feather.css',
      
        'resources/assets/css/bootstrap-datetimepicker.min.css',
        'resources/assets/plugins/fontawesome/css/fontawesome.min.css',
        'resources/assets/plugins/fontawesome/css/all.min.css',
        'resources/assets/plugins/simple-calendar/simple-calendar.css',
        'resources/assets/plugins/datatables/datatables.min.css',
        'resources/assets/plugins/select2/css/select2.min.css',
        'resources/assets/css/style.css',

    ], 'public/css/estilos.css')
    .scripts([
        'resources/assets/js/jquery-3.6.0.min.js',
        'resources/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
        'resources/assets/js/feather.min.js',
        'resources/assets/plugins/slimscroll/jquery.slimscroll.min.js',
        'resources/assets/plugins/apexchart/apexcharts.min.js',
        'resources/assets/plugins/apexchart/chart-data.js',
        'resources/assets/plugins/simple-calendar/jquery.simple-calendar.js',
        'resources/assets/js/calander.js',
        'resources/assets/js/circle-progress.min.js',
        'resources/assets/plugins/moment/moment.min.js',
        'resources/assets/js/bootstrap-datetimepicker.min.js',
        'resources/assets/plugins/datatables/datatables.min.js',
        'resources/assets/plugins/select2/js/select2.min.js',
        'resources/assets/js/script.js',

    ], 'public/js/estilos.js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/assets/img', 'public/assets/img')
    .copyDirectory('resources/assets/plugins/fontawesome/webfonts', 'public/webfonts')
    .copyDirectory('resources/assets/plugins/feather/fonts', 'public/css/fonts')
    .copyDirectory('resources/assets/fonts', 'public/fonts');
