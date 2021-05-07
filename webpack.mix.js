const mix = require("laravel-mix")
const path = require('path')

mix.disableNotifications()

mix.js("resources/js/app.js", "public/js").vue().postCss("resources/css/app.css", "public/css")

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/Vue')
        }
    }
})

if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
}

// temporary fix 
// src: https://github.com/JeffreyWay/laravel-mix/issues/2964#issuecomment-834213890
mix.override(config => {
    // Apply a workaround caused by Laravel Mix using the `webpack-dev-server@v4.0.0-beta`:
    // https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-beta.3.
    // Basically the `dev` property has been deprecated in favor of `devMiddleware`.
    if (config.devServer) {
        config.devServer.devMiddleware = config.devServer.dev
        delete config.devServer.dev
    }
})