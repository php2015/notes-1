<template>
  <div class="child">
    <button @click="update">update</button>
    <div>msg from parent: {{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "ModelChild",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  methods: {
    update() {
      this.$emit("input", "child");
    },
  },
};
</script>

<style scoped>
.child {
  width: 150px;
  height: 150px;
  background: #44f;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>