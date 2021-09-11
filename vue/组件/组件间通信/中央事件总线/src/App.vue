<template>
  <div id="app">
    <cat />
    <dog />
  </div>
</template>

<script>
import Cat from "./components/Cat";
import Dog from "./components/Dog";

export default {
  name: "App",
  components: {
    Cat,
    Dog,
  },
};
</script>

<style>
</style>
