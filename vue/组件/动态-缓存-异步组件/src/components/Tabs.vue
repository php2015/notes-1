<template>
  <div class="tabs">

    <div class="tab">
      <div v-for="(item, index) in items" 
      :class="{active:currentIndex===index}"
      :key="index" @click="setIndex(index)">{{item}}</div>
    </div>

    <div class="content">
      <keep-alive>
        <!-- 缓存组件keep-alive -->
        <component :is='content'></component>
        <!-- 动态组件component -->
      </keep-alive>
    </div>

  </div>
</template>

<script>
// import Home from "./Home";
// import About from "./About";
// import User from "./User";

export default {
  name: "Tabs",
  data() {
    return {
      items: ["Home", "About", "User"],
      currentIndex: 0,
    };
  },
  methods: {
    setIndex(index) {
      this.currentIndex = index;
    },
  },
  computed: {
    content() {
      return this.items[this.currentIndex];
    },
  },
  components: {
    Home: () => import(/* webpackChunkName: "Home" */ "./Home"), // 异步组件() => import
    About: () => import(/* webpackChunkName: "About" */ "./About"),
    User: () => import(/* webpackChunkName: "User" */ "./User"),
  },
};
</script>

<style scoped>
.tabs {
  width: 400px;
  height: 200px;
  box-shadow: 1px 1px 4px #000;
}

.tab {
  display: flex;
  text-align: center;
}

.tab > div {
  flex: 1;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.active {
  color: #fff;
  background: #f44;
}

.content {
  height: 170px;
  line-height: 170px;
  text-align: center;
  background: #44f;
  color: #fff;
}
</style>