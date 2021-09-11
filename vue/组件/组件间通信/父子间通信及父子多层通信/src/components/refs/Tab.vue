<template>
  <div class="tab">
    <ul>
      <li v-for="(item, index) in list" 
      :key="index" @click="setIndex(index)" :class="{active:currentIndex===index}">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      list: ["Cat", "Dog", "Monkey", "Tiger"],
      currentIndex: 0,
    };
  },
  methods: {
    setIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tab ul {
  display: flex;
  list-style: none;
}

.active {
  background: #44f;
}

li {
  cursor: pointer;
  padding: 2px 4px;
  margin-right: 4px;
}

li:hover {
  background: #44f;
}
</style>