const mix = require('laravel-mix')

mix.disableNotifications()

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'))

if (mix.inProduction()) {
    mix.version()
}


// local network testing
const url = process.env.APP_LOCAL_IP // get local ip of server
mix.webpackConfig({
    devServer: {
        proxy: {
            '*': 'http://localhost:8000'
        }
    }
})

mix.options({
    hmrOptions: {
        host: url,
        port: 8000
    }
})