<template>
  <div id="app">
    <h3 v-copy>hello world</h3>
    <animals />
    <fruits />
  </div>
</template>

<script>
import Fruits from "./components/Fruits";
import Animals from "./components/Animals";

export default {
  name: "App",
  components: {
    Fruits,
    Animals,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
