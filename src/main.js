import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import SvgIcon from '@/components/layout/SvgIcon.vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const req = require.context('./assets/icons/svg', false, /\.svg$/);
req.keys().forEach(req);
app.component('SvgIcon', SvgIcon)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
