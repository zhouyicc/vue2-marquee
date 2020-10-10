import Vue from 'vue'
import App from './App.vue'
import vue2Marquee from '../dist/vue2Marquee.common'

Vue.use(vue2Marquee);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
