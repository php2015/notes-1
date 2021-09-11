<template>
  <div class="child">
    <ul>
      <li v-for="(item, index) in fruits" 
      :key="index">
        <button @click="setIndex(index)">{{item}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    fruits: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    setIndex(index) {
      this.$emit("setIndex", index);
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