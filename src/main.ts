import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "@/style/main.css"
import Splitter from './components/Splitter.vue'
import Modal from './components/Modal.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('splitter', Splitter)
app.component('modal', Modal)

app.mount('#app')
