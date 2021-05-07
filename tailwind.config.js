const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    purge: {
        enabled: false,
        mode: 'all',
        preserveHtmlElements: true,
        content: [
            './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.vue',
        ],
        options: {
            keyframes: true,
        },
    },
    theme: {
        colors: {
            base: {
                primary: colors.blue[600],
                background: colors.gray[900],
                panel: colors.gray[800],
                text: colors.gray[300],
                muted: colors.gray[500],
                success: colors.green[600],
                danger: colors.red[600],
            },
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            gray: colors.gray,

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),

    ],
}
