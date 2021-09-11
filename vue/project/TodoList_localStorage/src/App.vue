<template>
  <div id="app">
    
    <to-do-header @add="add" />
    <to-do-body :items="items" @del="del" />
    <to-do-footer :items="items" @changeStatus="changeStatus" @remove="remove" />
    
  </div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFooter from "./components/ToDoFooter";

export default {
  name: "App",
  components: {
    ToDoHeader,
    ToDoBody,
    ToDoFooter,
  },
  data() {
    return {
      items: JSON.parse(localStorage.getItem("items") || "[]"),
    };
  },
  methods: {
    add(item) {
      this.items.push(item);
    },
    del(index) {
      this.items.splice(index, 1);
    },
    changeStatus(val) {
      // console.log(val);
      this.items.forEach((el) => {
        el.isChecked = val;
      });
    },
    remove() {
      console.log("remove");
      this.items = this.items.filter((el) => !el.isChecked);
    },
  },
  watch: {
    items: {
      deep: true,
      handler: function (val) {
        localStorage.setItem("items", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
#app {
  width: 480px;
  padding: 40px 20px;
  border-radius: 4px;
  background: #f5f5f5;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
