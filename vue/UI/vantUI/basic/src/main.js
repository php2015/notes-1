import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// h5REM适配
import 'amfe-flexible/index.js'
// 直接写import 'amfe-flexible'也可以，因为默认就是找index.js


// 引入vant - 全部
// import './plugins/vant-all.js'

// 手动部分引入vant
// import './plugins/vant-manual.js'

// 官方推荐 自动按需引入
import './plugins/vant-auto.js'


// 定制主题，将危险改为黄色
import 'vant/lib/index.less'



new Vue({
  render: h => h(App),
}).$mount('#app')
