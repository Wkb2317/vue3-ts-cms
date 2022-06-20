import { createApp, App } from 'vue'
import { registerApp } from '@/global'
import router from '@/router'
import store from '@/store'
import rootApp from './App.vue'

const app: App = createApp(rootApp)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
