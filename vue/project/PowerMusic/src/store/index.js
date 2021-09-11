
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { request } from '../network/request';
import { Indicator } from "mint-ui";

const state = {
  songList: [],
  musicURL: '',
  videoURL: '',
  maskIsShow: false,
  currentIndex: -1,
};
const getters = {};
const actions = {
  search(context, keywords) {
    request({ // 搜索功能
      url: "https://autumnfish.cn/search",
      params: {
        keywords: keywords,
      },
    })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.result.songs);
        const songList = response.data.result.songs;
        context.commit("SEARCH", songList);
        Indicator.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }, // 播放音乐功能
  playMusic(context, payload) {
    // console.log(payload.index);
    request({
      url: "https://autumnfish.cn/song/url",
      params: {
        id: payload.id,
      },
    })
      .then((response) => {
        // console.log(response);
        const musicURL = response.data.data[0].url;
        console.log(musicURL);
        const TemPayload = {
          musicURL,
          index: payload.index
        }
        context.commit("PLAYMUSIC", TemPayload);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  playVideo(context, mvid) {
    request({ // 播放mv功能
      url: "https://autumnfish.cn/mv/url",
      params: {
        id: mvid,
      },
    })
      .then((response) => {
        // console.log(response);
        const videoURL = response.data.data.url;
        // console.log(videoURL);
        context.commit('PLAYVIDEO', videoURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const mutations = {
  SEARCH(state, songList) {
    state.songList.length = 0;
    state.currentIndex = -1;
    songList.forEach(element => {
      state.songList.push(element)
    });
  },
  PLAYMUSIC(state, TemPayload) {
    state.musicURL = TemPayload.musicURL;
    state.currentIndex = TemPayload.index;
    // console.log(TemPayload.index);
  },
  PLAYVIDEO(state, videoURL) {
    state.videoURL = videoURL;
    state.maskIsShow = true;
  },
  REMOVEMASK(state) {
    state.maskIsShow = false;
  },
  STOPMUSIC(state) {
    state.musicURL = '';
    state.currentIndex = -1;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store