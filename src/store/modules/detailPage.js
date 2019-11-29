import Vue from "vue";
import * as config from "./config.json";

export default {
  namespaced: true,
  state: {
    loading: 0,
    detailPageData: null
  },
  getters: {
    allData: state => state.detailPageData,
    images: state => {
      const indices = [...Array(100).keys()];

      const mediaItems = state.detailPageData.Media.filter(media =>
        indices.includes(media.IndexNumber)
      ).map(item => item.MediaItems);

      const flattenArray = [].concat.apply([], mediaItems);

      const arrayOfUrlsCategorySix = flattenArray
        .filter(cat => cat.Category === 6)
        .map(item => item.Url);

      return arrayOfUrlsCategorySix;
    }
  },
  actions: {
    async getDetailPageData({ commit }) {
      // CORS ERROR WAS RESPONSIBLE FOR KILLING THIS ACTION
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
