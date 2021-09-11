## vue-cli3简介


### 如果vue-cli3创建项目时要删除某个已经保存的样本
```javascript
C:\Users\samla\.vuerc文件（rc是run command的意思）
{
  "useTaobaoRegistry": false,
  "presets": {
    "clareliu": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {}
      }
    }
  }
}
```


### main.js中Vue.config.productionTip
```javascript
Vue.config.productionTip = false 什么意思（productionTip产品提示）
npm run build的时候会提示现在构建了什么东西等等
npm run serve的时候是不需要这些提示信息的
```


### main.js中的重点
```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```