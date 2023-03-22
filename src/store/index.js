import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    nameMusic:"Ed Sheeran - Shape of You",
    url:require('../assets/audio/Ed Sheeran - Shape of You (Official Music Video).mp3'),
  },
  getters: {},
  mutations: {
    SET_LOGGEDIN(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    SET_MUSIC(state,{song,url}){
      state.nameMusic=song
      state.url=url
    },
  },
  actions: {},
  modules: {},
});
