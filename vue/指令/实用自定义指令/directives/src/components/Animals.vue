<template>
  <div class="animals">
    <ul>
      <li v-for="(item, index) in list" 
      
      :key="index" v-copy>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Animals",
  data() {
    return {
      list: ["cat", "dog", "monkey", "tiger"],
    };
  },
};
</script>

<style scoped>
.animals {
  width: 200px;
  height: 200px;
  padding: 8px;
  background: #4f4;
}

li {
  list-style: none;
  margin-bottom: 4px;
  box-shadow: 1px 1px 4px #000;
  padding: 2px;
}

::selection {
  background: #ccc;
}
</style>