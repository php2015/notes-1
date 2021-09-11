<template>
  <div class="parent">
    <h3>v-model</h3>
    <model-child :msg="msg" v-model="msg" />
  </div>
</template>

<script>
import ModelChild from "./ModelChild";
export default {
  name: "ModelParent",
  data() {
    return {
      msg: "parent",
    };
  },
  components: {
    ModelChild,
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