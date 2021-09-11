<template>
  <div id="app">
    <swiper :banner="banner" class="swiper" :auto="3000"></swiper>
    <swiper :banner="banner" class="swiper" :auto="1000"></swiper>
  </div>
</template>

<script>
import Swiper from "./components/Swiper";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      banner: [],
    };
  },
  created() {
    axios("./data.json").then((res) => {
      // console.log(res);
      this.banner = res.data;
      // console.log(this.banner);
    });
  },
  components: {
    Swiper,
  },
};
</script>

<style>
body {
  margin: 0;
}
.swiper {
  height: 52vw;
}
</style>
