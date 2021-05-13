// Axios
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Vue
import { createApp } from 'vue'
import App from './components/App.vue'
createApp(App).mount("#app")
