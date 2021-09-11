<template>
  <div id="app">

    <search-part/>
    <content-part/>
    <bottom-part/>
    <video-part/>
  </div>
</template>

<script>
import SearchPart from "./components/SearchPart";
import BottomPart from "./components/BottomPart";
import ContentPart from "./components/ContentPart";
import VideoPart from "./components/VideoPart";

export default {
  name: "App",
  components: {
    SearchPart,
    BottomPart,
    ContentPart,
    VideoPart,
  },
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/iconfont/iconfont.css";
</style>
