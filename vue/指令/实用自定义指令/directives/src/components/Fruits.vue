<template>
  <div class="fruits" v-drag>
    <ul>
      <li v-for="(item, index) in list" :key="index">
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
      list: ["apple", "banana", "manogo", "kiwi"],
    };
  },
};
</script>

<style scoped>
.fruits {
  width: 200px;
  height: 200px;
  background: #44f;
  padding: 8px;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 4px;
}
</style>