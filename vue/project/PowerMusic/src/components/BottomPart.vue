<template>
  <div class="bottom">
    <audio :src="$store.state.musicURL" controls autoplay></audio>
  </div>
</template>

<script>
export default {
  name: "BottomPart",
};
</script>

<style scoped>
.bottom {
  height: 49px;
  background: #f1f3f4;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.bottom audio {
  width: 100%;
  border-radius: 0px;
  /* height: 200px; */
}
</style>