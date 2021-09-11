<template>
  <div class="big">
    <h3>$parent, $children, $root</h3>
    <h3>Grand Parent</h3>
    <medium />
  </div>
</template>

<script>
import Medium from "./Medium";
export default {
  name: "Big",
  data() {
    return {
      msg: "Grand Parent",
    };
  },
  components: {
    Medium,
  },
};
</script>

<style scoped>
.big {
  width: 300px;
  height: 300px;
  background: #f44;
  margin: 8px;
  color: #fff;
  position: relative;
}
</style>