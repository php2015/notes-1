<template>
 <div class="tab-bar-item" :style="activeStyle" @click="goToView">
    <!-- <i></i>
    <div>首页</div> -->
    <slot name="item-icon"></slot>
    <slot name="item-txt"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "#44f",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    goToView() {
      // console.log(this.path);
      this.$router.push(this.path).catch((err) => {
        // console.log(err);
        return; // 连点两次会报错 因此这么处理
      });
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex-grow: 1;
  text-align: center;
  margin-top: 6px;
  font-size: 14px;
}
</style>