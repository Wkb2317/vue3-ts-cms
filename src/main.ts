import { createApp, App } from 'vue'
import 'normalize.css'
import { registerApp } from '@/global'
import router from '@/router'
import store from '@/store'
import { setupStore } from '@/store'
import rootApp from './App.vue'
import './assets/css/index.scss'

const app: App = createApp(rootApp)

registerApp(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
