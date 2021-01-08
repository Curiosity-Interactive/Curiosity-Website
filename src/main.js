import { createApp } from "vue"
import App from "./App.vue"
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

var VueScrollTo = require('vue-scrollto')

createApp(App).use(router,VueScrollTo).mount("#app")

