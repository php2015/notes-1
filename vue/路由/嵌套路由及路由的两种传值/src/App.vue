<template>
  <div id="app">

    <div class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{name:'Cart',params:params}">Cart</router-link>
      <!-- <router-link :to="'/cart/'+cartId">Cart</router-link> -->
      <router-link :to="{path:'/profile',query:kimi}">Profile</router-link>
    </div>

    <div class="views">
      <keep-alive include="About">
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      cartId: 880,
      params: {
        id: 200,
        cartId: 300,
      },
      kimi: {
        name: "kimi",
        age: 1,
      },
    };
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

.links > a {
  flex: 1;
}

.views {
  width: 400px;
  height: 200px;
  /* line-height: 200px; */
  /* text-align: center; */
  box-shadow: 1px 1px 4px #000;
  margin-top: 8px;
}

.router-link-active {
  background: #f44;
  color: #fff;
}
</style>
