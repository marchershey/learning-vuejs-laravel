const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/css/app.css", "public/css");

mix.webpackConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "resource/js/components"),
        },
    },
    devServer: {
        proxy: {
            "*": "http://localhost:8000",
        },
    },
});

mix.options({
    hmrOptions: {
        host: url,
        port: 8000,
    },
});

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}

mix.disableNotifications();
