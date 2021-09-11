<template>
  <div class="medium">
    <h3>Son</h3>
    <button @click="getParent">$parent</button>
    <button @click="getChildren">$children</button>
    <smallson />
  </div>
</template>

<script>
import Smallson from "./Smallson";
export default {
  name: "Medium",
  data() {
    return {
      msg: "Son",
    };
  },
  components: {
    Smallson,
  },
  methods: {
    getParent() {
      console.log(this.$parent.$el);
    },
    getChildren() {
      console.log(this.$children);
    },
  },
};
</script>

<style scoped>
.medium {
  width: 200px;
  height: 200px;
  background: #4f4;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>