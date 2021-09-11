<template>
  <div class="to-do-body">
    <transition-group tag="ul" name="list" >
      <!-- <ul> -->
      <li v-for="(item, index) in items" :key="item.id" >
        <input type="checkbox" v-model="item.isChecked"> 
        <span class="task-name">{{item.taskName}}</span>
        <i class="close-btn" @click="del(index)">&times;</i>
      </li>
      <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "ToDoBody",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    del(index) {
      this.$emit("del", index);
    },
  },
};
</script>

<style scoped>
ul {
  padding-right: 40px;
}
ul li {
  height: 36px;
  line-height: 36px;
  margin-bottom: 8px;
  background: #f44;
  width: 400px;
  /* width: 100%; */
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;

  position: relative;
  box-sizing: border-box;
}
.task-name {
  color: #fff;
}
.close-btn {
  font-size: 24px;
  vertical-align: middle;
  position: absolute;
  right: 15px;
  cursor: pointer;
}
.close-btn:hover {
  font-weight: bold;
  color: #fff;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.list-enter-active,
.list-leave-active {
  transition: all 400ms;
}

.list-move {
  transition: all 400ms;
}
.list-leave-active {
  position: absolute;
  width: 400px;
  /* width: 100%; */
}
.to-do-body {
  /* background: #44f; */
  flex-grow: 1;
  width: 100%;
  margin-bottom: 20px;
  overflow: auto;
}
</style>