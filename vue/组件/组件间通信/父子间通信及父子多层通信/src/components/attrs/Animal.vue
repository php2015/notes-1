<template>
  <div class="animal">
    <h3>Son</h3>
    <cat v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Cat from "./Cat";

export default {
  name: "Animal",
  components: { Cat },
  created() {
    console.log(this.$attrs);
  },
  inheritAttrs: false,
};
</script>

<style scoped>
.animal {
  width: 200px;
  height: 200px;
  background: #4f4;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>