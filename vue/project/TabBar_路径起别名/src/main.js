import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

window.onload = function () {
  console.log('onload');
}

// require('./assets/css/base.css'); // 这里引用可以 但是其实可以直接导入到App.vue的样式中
