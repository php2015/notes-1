<template>
  <div class="creature">
    <h3>$attrs, $listeners</h3>
    <h3>Grand Parent</h3>
    <animal :fruits="fruits" @setIndex="setIndex" />
  </div>
</template>

<script>
import Animal from "./Animal";
export default {
  name: "Creature",
  data() {
    return {
      fruits: ["apple", "banana", "mango", "kiwi"],
    };
  },
  components: {
    Animal,
  },
  methods: {
    setIndex(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
.creature {
  width: 300px;
  height: 300px;
  background: #f44;
  margin: 8px;
  color: #fff;
  position: relative;
}
</style>