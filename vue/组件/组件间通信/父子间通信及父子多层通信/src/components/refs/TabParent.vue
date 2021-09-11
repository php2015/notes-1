<template>
  <div class="tab-parent">
    <h3>$refs</h3>

    <button @click="getIndex">getIndex</button>
    <tab ref="first" />
    <tab ref="second" />
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  name: "TabParent",
  components: {
    Tab,
  },
  methods: {
    getIndex() {
      console.log(this.$refs.first.currentIndex);
      console.log(this.$refs.second.currentIndex);
      // this.$refs.first.currentIndex = 1;
    },
  },
};
</script>

<style scoped>
.tab-parent {
  width: 300px;
  height: 300px;
  background: #f44;
  margin: 8px;
  color: #fff;
}
</style>