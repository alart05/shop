import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import AboutMe from '@/pages/AboutMe'
import Presets from '@/pages/Presets'
import BuyPreset from '@/pages/BuyPreset'
import Bascket from '@/pages/Bascket'
import 'img-comparison-slider';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/img-comparison-slider/];

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Main', component: Presets},
  { path: '/about_me', name: 'AboutMe', component: AboutMe},
  { path: '/bascket', name: 'Bascket', component: Bascket},
  { path: '/buy_preset/:preset_name', name: 'BuyPreset', component: BuyPreset},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
