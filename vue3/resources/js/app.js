require('./bootstrap')

// Import modules...
import { createApp, h } from 'vue'
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from '@/Layouts/App'

const app = document.getElementById('app')

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`)
                .then(({ default: page }) => {
                    if (page.layout === undefined) {
                        page.layout = Layout
                    }
                    return page
                }),
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(app)

InertiaProgress.init({ color: '#ff6700' })


import { Inertia } from '@inertiajs/inertia'

Inertia.on('navigate', (event) => {
    window.pathname = window.location.pathname
})