<template>
  <div id="app">

    <router-view/>
    <main-tab-bar/>

  </div>
</template>

<script>
import MainTabBar from "components/maintabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* main.js中引用可以 但是其实可以直接导入到App.vue的样式中 */
@import "assets/css/base.css";
</style>
