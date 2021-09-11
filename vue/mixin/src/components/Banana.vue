<template>
  <div class="banana">
    This is a banana.
  </div>
</template>

<script>
import mixin from "../common/mixin";
export default {
  name: "Banana",
  data() {
    return {
      name: "banana",
    };
  },
  mixins: [mixin],
};
</script>

<style scoped>
.banana {
  padding: 10px;
  margin-bottom: 10px;
  width: fit-content;
  background: #4f4;
  border-radius: 4px;
  color: #fff;
}
</style>