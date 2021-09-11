#### vue-router的使用


##### 1. 安装
```javascript
npm i vue-router --save
```


##### 2. 导入并使用
```javascript
2.1 导入路由对象并调用Vue.use(VueRouter)

2.2 创建路由实例并配置映射关系

2.3 在Vue实例中挂载路由实例


2.1及2.2
src文件夹里面的index.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  ]
})


2.3 main.js中
import router from './router' // 自动会找index.js
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

