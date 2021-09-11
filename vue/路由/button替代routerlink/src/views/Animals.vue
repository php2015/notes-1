<template>
  <div>
    <ul>
      <li v-for="(item, index) in animals" :key="index">
        <button>{{item}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Animals",
  data() {
    return {
      animals: ["cat", "dog", "monkey", "tiger"],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  margin-bottom: 4px;
}
</style>