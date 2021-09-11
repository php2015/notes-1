<template>
  <div>
    <ul>
      <li v-for="(item, index) in fruits" :key="index">
        <button>{{item}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Fruits",
  data() {
    return {
      fruits: ["apple", "banana", "mango", "kiwi"],
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