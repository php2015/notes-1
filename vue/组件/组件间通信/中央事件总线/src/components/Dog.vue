<template>
  <div class="dog">
    <h3>Dog</h3>
    <button @click="msgFromDog">send my msg</button>
  </div>
</template>

<script>
import $bus from "../common/bus";
export default {
  name: "Dog",
  data() {
    return {
      msg: "im a dog",
    };
  },
  mounted() {
    $bus.$on("msgFromCat", (msg) => {
      console.log(msg + " received by dog");
    });
  },
  methods: {
    msgFromDog() {
      $bus.$emit("msgFromDog", this.msg);
    },
  },
};
</script>

<style scoped>
.dog {
  width: 200px;
  height: 200px;
  background: #f44;
  text-align: center;
  color: #fff;
}
</style>