<template>
  <div class="content-part">
  
    <ul class="list" :key="new Date().getTime()">
      <li v-for="(item, index) in songList" :key="index">
        <strong>{{item | artists}} - {{item.name}}</strong>
        <div class="btn-wrap">
          <div class="play-music" @click="playMusic(item.id, index)" :class="{active:index==$store.state.currentIndex}"><i class="iconfont icon-icon_play"></i></div>
          <div class="play-video" v-if="item.mvid!=0" @click="playVideo(item.mvid)"><i class="iconfont icon-shipin"></i></div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "ContentPart",
  data() {
    return {
      songList: this.$store.state.songList,
    };
  },
  filters: {
    artists(item) {
      return item.artists.map((el) => el.name).join(" & ");
    },
  },
  methods: {
    playMusic(id, index) {
      // console.log(index);
      // console.log("playMusic");
      const payload = {
        id,
        index,
      };
      this.$store.dispatch("playMusic", payload);
    },
    playVideo(mvid) {
      // console.log(mvid);
      this.$store.dispatch("playVideo", mvid);
    },
  },
};
</script>

<style scoped>
.content-part {
  margin-top: 120px;
  margin-bottom: 79px;
  padding-left: 30px;
  padding-right: 30px;
  text-transform: capitalize;
}
.list li {
  /* background: red; */
  margin-bottom: 36px;
  /* height: 60px; */
}
.list li strong {
  color: #f5f5f5;
}
.btn-wrap {
  display: flex;
  margin-top: 8px;
}
.play-music,
.play-video {
  width: 48px;
  height: 24px;
  background: #fff;
  margin-right: 6px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #000;
}
.list .iconfont {
  color: #000;
}
.play-video .iconfont {
  font-size: 22px;
  position: relative;
  top: 1px;
}
.play-music:active,
.play-video:active {
  box-shadow: -2px -2px 2px #000;
}
.active {
  background: orange;
}
</style>