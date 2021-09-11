<template>
  <div class="wrap" @mouseenter="timerOff" @mouseleave="timerOn">
    <ul class="list clearfix" :style="{left:left}" @transitionend="end" :class="{transition:hasTransition}">
      <swiper-item v-for="(item, index) in banner" :key="index" :item="item" :index="index"></swiper-item>
      <swiper-item :item="banner[0]" :key="banner.length+1" :index="banner.length+1" ref="swiperItem"></swiper-item>
    </ul>

    <div class="btns">
      <div v-for="(item, index) in banner.length" :key="index" class="btn" :class="{active:btnIndex==index}" ></div>
    </div>

    <span class="iconfont icon-prev1 arrow arrow-left" @click="prev"></span>
    <span class="iconfont icon-next1 arrow arrow-right" @click="next"></span>
  </div>
</template>

<script>
import SwiperItem from "./SwiperItem";
export default {
  name: "Swiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
    auto: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      left: "0px",
      hasTransition: true,
      // manual: false,
      childrenWidth: 0,
    };
  },
  computed: {
    btnIndex() {
      let btnIndex = 0;
      if (this.currentIndex >= 4) {
        return btnIndex;
      } else {
        return this.currentIndex;
      }
    },
  },
  created() {
    this.tab();
    this.timer = setInterval(() => {
      this.currentIndex++;
      this.tab();
    }, this.auto);
  },
  mounted() {
    this.childrenWidth = this.$refs.swiperItem.$el.offsetWidth;
  },
  components: {
    SwiperItem,
  },
  methods: {
    tab() {
      // console.log(this.currentIndex);
      this.hasTransition = true;
      this.left = -this.currentIndex * this.childrenWidth + "px";
    },
    end() {
      this.hasTransition = false;
      if (this.currentIndex >= 4) {
        this.currentIndex = 0;
        this.left = "0px";
      } else if (this.currentIndex <= 0) {
        this.currentIndex = this.banner.length;
        this.left = -this.currentIndex * this.childrenWidth + "px";
      }
    },
    prev() {
      this.currentIndex--;
      this.tab();
    },
    next() {
      this.currentIndex++;
      this.tab();
    },
    timerOff() {
      clearInterval(this.timer);
    },
    timerOn() {
      this.timer = setInterval(() => {
        this.currentIndex++;
        this.tab();
      }, this.auto);
    },
  },
};
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

.wrap {
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 500vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}

.transition {
  transition: 500ms;
}

.btns {
  width: 120px;
  height: 22px;
  /* background: #fff; */
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 4%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.btns .btn {
  height: 12px;
  width: 12px;
  background: rgba(100, 100, 100, 0.6);
  border-radius: 50%;
}

.btns .btn.active {
  background: rgba(255, 255, 255, 0.9);
}

.arrow {
  position: absolute;
  z-index: 10;
  font-size: 36px;
  color: rgba(255, 255, 255, 0.8);
  top: 50%;
  transform: translateY(-50%);
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}

.arrow:active {
  color: rgba(255, 255, 255, 1);
}
</style>