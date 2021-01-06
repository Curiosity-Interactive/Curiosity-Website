import { createApp } from "vue";
import App from "./App.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
var VueScrollTo = require('vue-scrollto');
    
createApp(App).use(VueScrollTo).mount("#app");

