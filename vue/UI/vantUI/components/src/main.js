import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入vant
import './plugins/vant'

new Vue({
  render: h => h(App),
}).$mount('#app')
