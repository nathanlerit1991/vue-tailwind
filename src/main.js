import './assets/sass/style.scss'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyLoadingPlugin } from '@/plugins/lazyLoading.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyLoadingPlugin)
app.mount('#app')
