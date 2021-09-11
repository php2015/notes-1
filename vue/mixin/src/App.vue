<template>
  <div id="app">
    <apple />
    <banana />
    <mango />
  </div>
</template>

<script>
import Apple from "./components/Apple";
import Banana from "./components/Banana";
import Mango from "./components/Mango";

export default {
  name: "App",
  components: {
    Apple,
    Banana,
    Mango,
  },
};
</script>

<style>
</style>
