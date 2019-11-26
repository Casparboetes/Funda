import Vue from "vue";
import * as config from "./config.json";

export default {
  namespaced: true,
  state: {
    loading: 0,
    detailPageData: null
  },
  getters: {
    allData: state => state.detailPageData
    // Todo 26/11/2019: make filter from media Items.

    // media: state => {
    //   const ids = [...Array(100).keys()];

    //   const filteredArrayOnMedia = state.detailPageData.Media.filter(
    //     mediaItems => ids.includes(mediaItems.IndexNumber)
    //   );

    //   let marvelHeroes = filteredArrayOnMedia.map(function(item) {
    //     return item.MediaItems;
    //   });

    //   let heros = marvelHeroes.map(function(item) {
    //     return item.filter(function(cat) {
    //       return cat.Category === 6;
    //     });
    //   });

    //   More code here.

    //   return heros;
    // }
  },
  actions: {
    async getDetailPageData({ commit }) {
      // CORS ERROR WAS RESSPONSIBLE FOR KILING THIS ACTION
      const mockResponse = config.default;

      commit("SET_LOADING_DATA", null);
      commit("SET_DETAIL_PAGE_DATA", mockResponse);
      commit("SET_LOADING_DATA_DONE", null);
    }
  },
  mutations: {
    SET_DETAIL_PAGE_DATA(state, mockResponse) {
      Vue.set(state, "detailPageData", mockResponse);
    },
    SET_LOADING_DATA(state) {
      state.loading++;
    },
    SET_LOADING_DATA_DONE(state) {
      state.loading--;
    }
  }
};
