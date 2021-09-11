<template>
  <li class="swiper-item">
    <img :src="item" alt="">
  </li>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    item: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.swiper-item {
  float: left;
  width: 100vw;
  height: 100%;
}

.swiper-item img {
  width: 100%;
  display: block;
}
</style>