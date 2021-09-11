#### $router通过两个普通按钮实现router-link效果


##### 安装了vue-router后 会给所有组件都加上$router属性
```javascript
<button @click="goToHome">HOME</button>
<button @click="goToAbout">ABOUT</button>
<router-view></router-view>

methods: {
  goToHome() {
    console.log("/home");
    this.$router.push("/home");
    // this.$router.replace("/home");
  },
  goToAbout() {
    console.log("/about");
    this.$router.push("/about");
    // this.$router.replace("/about");
  },
},
```