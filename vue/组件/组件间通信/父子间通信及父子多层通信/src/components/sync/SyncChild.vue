<template>
  <div class="child">
    <button @click="update">update</button>
    <div>msg from parent: {{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "SyncChild",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  methods: {
    update() {
      this.$emit("update:msg", "child");
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

li {
  margin-bottom: 4px;
}
</style>