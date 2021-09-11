<template>
  <div class="parent">
    <h3>.sync</h3>
    <sync-child :msg.sync="msg" />
  </div>
</template>

<script>
import SyncChild from "./SyncChild";
export default {
  name: "SyncParent",
  data() {
    return {
      msg: "parent",
    };
  },
  components: {
    SyncChild,
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