<template>
  <div class="to-do-footer">
    <div class="calc">
      <label class="check-all">
        <input type="checkbox" v-model="allChecked">
        全选
      </label>
      {{finishedItemsLength}} / {{items.length}}
    </div>
    <div class="remove-btn" @click="remove">Remove Finished Tasks</div>
  </div>
</template>

<script>
export default {
  name: "ToDoFooter",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    finishedItemsLength() {
      return this.items.filter((el) => el.isChecked).length;
    },
    allChecked: {
      get() {
        return (
          this.finishedItemsLength == this.items.length &&
          this.finishedItemsLength
        );
      },
      set(val) {
        // console.log(val);
        this.$emit("changeStatus", val);
      },
    },
  },
  methods: {
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
.to-do-footer {
  height: 49px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  line-height: 49px;
  text-align: center;
  /* color: #fff; */
}
.calc {
  width: 50%;
  background: #4f4;
  font-weight: bold;
}
.remove-btn {
  width: 50%;
  background: #ccc;
  color: #000;
  cursor: pointer;
}
.remove-btn:hover {
  font-weight: bold;
  background: #bbb;
}
.check-all {
  font-size: 14px;
  margin-right: 10px;
}
</style>