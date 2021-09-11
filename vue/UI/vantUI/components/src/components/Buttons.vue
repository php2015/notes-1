<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="danger" plain>主要按钮</van-button>
    <van-button type="warning" plain loading></van-button>
    <van-button type="warning" plain loading loading-text="loading"></van-button>
    <van-button round type="info" plain loading loading-text="loading" loading-type="spinner"></van-button>
    <van-button type="primary"><van-icon name="chat-o" /> chat</van-button>
    <van-button type="info" @touchstart.native="show"><van-icon name="balance-o" /> dollar</van-button>

  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    show() {
      console.log("touchstart");
    },
  },
};
</script>

<style scoped>
</style>