import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/index'

import element3 from 'element3'

const store = createPinia()
const app = createApp(App);

app.use(store)
app.use(router)
app.use(element3)
app.mount('#app')
