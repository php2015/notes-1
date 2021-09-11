<template>
  <div id="app">

    <div class="links">
      <button v-for="(item, index) in btns" 
      :class="{active:currentIndex===index}"
      :key="index" @click="setIndex(index)">{{item}}</button>
      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="'/cart/'+cartId">Cart</router-link>
      <router-link :to="{path:'/profile/',query:kimi}">Profile</router-link> -->
    </div>

    <div class="views">
      <keep-alive include="About">
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import router from "./router";
export default {
  name: "App",
  components: {},
  data() {
    return {
      btns: ["Home", "About", "Cart", "Profile"],
      currentIndex: 0,
      cartId: 880,
      kimi: {
        name: "kimi",
        age: 1,
      },
    };
  },
  methods: {
    setIndex(index) {
      switch (index) {
        case 0:
          console.log(this.$router === router); //任意组件的$router就是router文件夹的index.js中导出的router
          !this.$route.path.includes("/home") &&
            this.$router.push({ path: `/${this.btns[index].toLowerCase()}` });
          // 直接push一个字符串也可以
          break;
        case 1:
          !this.$route.path.includes("/about") &&
            this.$router.push({ path: `/${this.btns[index].toLowerCase()}` });
          break;
        case 2:
          !this.$route.path.includes("/cart") &&
            this.$router.push({
              path: "/" + this.btns[index].toLowerCase() + "/" + this.cartId,
            });
          break;
        case 3:
          !this.$route.path.includes("/profile") &&
            this.$router.push({
              path: "/" + this.btns[index].toLowerCase() + "/",
              query: this.kimi,
            });
          break;
      }
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.links {
  width: 400px;
  height: 30px;
  line-height: 30px;
  box-shadow: 1px 1px 4px #000;
  display: flex;
  text-align: center;
}

.links > button {
  flex: 1;
}

.views {
  width: 400px;
  height: 200px;
  box-shadow: 1px 1px 4px #000;
  margin-top: 8px;
}

.active {
  background: #f44;
  color: #fff;
}
</style>
