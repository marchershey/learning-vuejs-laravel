/**
 * Axios & CSRF Check
 */
window.axios = require("axios")
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    alert('CSRF Token missing!')
}

/**
 * Vue
 */
import Vue from 'vue'
import App from '@/Layouts/App'
import router from '@Router'

// require all components
const components = require.context("@/Components", true, /\.vue$/i)
components.keys().map(key =>
    Vue.component(key.split("/").pop().split(".")[0], components(key).default)
)

new Vue({
    el: "#app",
    render: h => h(App),
    router,
})
