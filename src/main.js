import { createApp } from 'vue' // Import createApp
import App from './App.vue' // Import App.vue for default view
import router from './router' // Import router folder for the nav. bar
const app = createApp(App) // Set app as "App" of vueJS

app.use(router) // Use router plugin

app.mount('#app') // Define de app as app cause it's not define by himself