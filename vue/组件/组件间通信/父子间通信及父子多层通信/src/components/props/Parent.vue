<template>
  <div class="parent">
    <h3>props, $emit</h3>
    <child :fruits='fruits' @setIndex="setIndex" />
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      fruits: ["apple", "banana", "mango", "kiwi"],
    };
  },
  methods: {
    setIndex(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
.parent {
  width: 300px;
  height: 300px;
  background: #f44;
  position: relative;
  color: #fff;
  margin: 8px;
}
</style>