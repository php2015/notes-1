<template>
  <div class="apple">
    This is an apple.
  </div>
</template>

<script>
import mixin from "../common/mixin";

export default {
  name: "Apple",
  data() {
    return {
      name: "apple",
    };
  },
  mixins: [mixin],
};
</script>

<style scoped>
.apple {
  padding: 10px;
  margin-bottom: 10px;
  width: fit-content;
  background: #f44;
  border-radius: 4px;
  color: #fff;
}
</style>