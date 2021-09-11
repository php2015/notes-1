<template>
  <div class="video-part mask" v-if="$store.state.maskIsShow" @click.self="removeMask">
    <video :src="$store.state.videoURL" controls @play="stopMusic"></video>
  </div>
</template>

<script>
export default {
  name: "VideoPart",
  methods: {
    removeMask() {
      this.$store.commit("REMOVEMASK");
    },
    stopMusic() {
      // console.log("stopMusic");
      this.$store.commit("STOPMUSIC");
    },
  },
};
</script>

<style scoped>
.video-part {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(30, 30, 30, 0.8);
  z-index: 20;
  display: flex;
  align-items: center;
}
.video-part video {
  width: 100%;
}
</style>