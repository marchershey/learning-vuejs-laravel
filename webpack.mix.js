const mix = require("laravel-mix")
const path = require('path')

mix.disableNotifications()

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css")


mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/Vue')
        }
    }
})

if(mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
}