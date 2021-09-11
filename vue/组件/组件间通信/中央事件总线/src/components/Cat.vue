<template>
  <div class="cat">
    <h3>Cat</h3>
    <button @click="msgFromCat">send my msg</button>
  </div>
</template>

<script>
import $bus from "../common/bus";

export default {
  name: "Cat",
  data() {
    return {
      msg: "im a cat",
    };
  },
  mounted() {
    $bus.$on("msgFromDog", (msg) => {
      console.log(msg + " received by cat");
    });
  },
  methods: {
    msgFromCat() {
      $bus.$emit("msgFromCat", this.msg);
    },
  },
};
</script>

<style scoped>
.cat {
  width: 200px;
  height: 200px;
  background: #f44;
  text-align: center;
  color: #fff;
}
</style>