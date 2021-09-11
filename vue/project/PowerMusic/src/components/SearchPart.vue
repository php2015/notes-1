<template>
  <div class="top">
    <h1>Power Music</h1>
    <input type="text" placeholder="Search title, singer or album.." v-model="keywords" @keyup.enter="search">
  </div>
</template>

<script>
import { Indicator } from "mint-ui";

export default {
  name: "SearchPart",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    search() {
      Indicator.open();
      this.$store.dispatch("search", this.keywords);
    },
  },
};
</script>

<style scoped>
.top {
  height: 100px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #353d45;
  /* display: flex; */
  padding-left: 30px;
  padding-right: 30px;
  z-index: 10;
  /* background: #4f4; */
}
.top input {
  /* flex-grow: 1; */
  height: 36px;
  margin-top: 12px;
  background: #fff;
  text-align: left;
  border-radius: 4px;
  padding-left: 6px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.top input:focus {
  outline: 1px solid #ccc;
}
.top input::-webkit-input-placeholder {
  font-style: italic;
}
.top h1 {
  /* background: red; */
  padding-top: 12px;
  color: #fff;
}
</style>