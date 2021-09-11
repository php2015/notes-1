<template>
  <div class="cat">
    <h3>Grandson</h3>
    <ul>
      <li v-for="(item, index) in fruits" :key="index">
        <button @click="setIndex(index)">{{item}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cat",
  methods: {
    getMsg() {
      console.log(this.msg);
    },
  },
  created() {
    console.log(this.$attrs);
  },
  data() {
    return {
      fruits: this.$attrs.fruits,
    };
  },
  inheritAttrs: false,
  methods: {
    setIndex(index) {
      this.$emit("setIndex", index);
    },
  },
};
</script>

<style scoped>
.cat {
  width: 160px;
  height: 160px;
  background: #44f;
  position: absolute;
  bottom: 0;
  right: 0;
}

li {
  margin-bottom: 4px;
}
</style>