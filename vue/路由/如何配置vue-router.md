#### 如何配置vue-router


##### 1. 创建路由组件
```
可以在components文件夹创建组件
```

##### 2. 配置映射关系 router文件夹的index.js中
```javascript
一个映射关系就是一个对象

const routes = [
  { path: '', redirect: '/home' }, // 默认路径 path: ''或path: '/'都可以
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

const router = new VueRouter({
  routes,
  mode: 'history' // http://localhost:8080/home 默认是哈希模式
});
```

##### 3. 使用路由 App.vue中
```javascript
<router-link to='/home'>HOME</router-link>
<router-link to='/about'>ABOUT</router-link>
<router-view></router-view>


<router-link> 最终会被渲染成a标签 
class有.router-link-exact-active .router-link-active

<router-view>
这时vue中已经注册过的两个全局组件
```