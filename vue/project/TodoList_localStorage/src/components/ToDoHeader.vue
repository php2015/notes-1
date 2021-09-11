<template>
  <div class="to-do-header">
    <input type="text" v-model.trim="taskName" @keyup.enter="add" id="txt" placeholder="Press enter to add task">
  </div>
</template>

<script>
export default {
  name: "ToDoHeader",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    add() {
      if (!this.taskName) {
        alert("任务不能为空");
        return;
      }

      const item = {
        id: new Date().getTime(),
        taskName: this.taskName,
        isChecked: false,
      };

      this.$emit("add", item);
      this.taskName = "";
    },
  },
};
</script>

<style scoped>
#txt {
  width: 400px;
  box-sizing: border-box;
  outline: none;
  height: 36px;
  line-height: 36px;
  padding-left: 8px;
  /* font-size: 18px; */
}
.to-do-header {
  width: 454px;
  padding-left: 40px;
}
</style>