window.axios = require("axios")
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    alert('CSRF Token missing!')
}

// window.Vue = require("vue").default
// window.App = require('./Vue/Layouts/App').default
// const files = require.context("./Vue", true, /\.vue$/i)
// files.keys().map(key =>
//     Vue.component(key.split("/").pop().split(".")[0], files(key).default)
// )

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


import Vue from 'vue'
import App from '@/Layouts/App'
const app = new Vue({
    el: "#app",
    render: h => h(App),
})
