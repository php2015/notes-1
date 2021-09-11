<template>
  <div class="smallson">
    <h3>Grandson</h3>
    <button @click="getRoot">$root</button>
  </div>
</template>

<script>
export default {
  name: "Smallson",
  methods: {
    getRoot() {
      console.log(this.$root.$el);
    },
  },
};
</script>


<style scoped>
.smallson {
  width: 100px;
  height: 100px;
  position: absolute;
  background: #44f;
  bottom: 0;
  right: 0;
}
</style>