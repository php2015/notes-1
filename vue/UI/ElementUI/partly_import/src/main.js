import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './plugins/element.js';


new Vue({
  render: h => h(App),
}).$mount('#app')
