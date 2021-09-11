<template>
  <div class="mango">
    This is a mango.
  </div>
</template>

<script>
import mixin from "../common/mixin";
export default {
  name: "Mango",
  mixins: [mixin],
};
</script>

<style scoped>
.mango {
  padding: 10px;
  margin-bottom: 10px;
  width: fit-content;
  background: #44f;
  border-radius: 4px;
  color: #fff;
}
</style>