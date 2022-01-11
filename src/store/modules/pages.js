import Vue from "vue";

export default {
  namespaced: true,

  state: {
    totalPages: 1,
    params: [
      {
        page: 1,
        name: ""
      }
    ]
  },

  mutations: {
    setPages(state, infoPages) {
      state.totalPages = infoPages;
    },
    changePage(state, page) {
      state.params[0].page =
        page <= 0 || page > state.totalPages ? state.params[0].page : page;
    },
    searchCharacter(state, value) {
      state.params[0].page = 1;
      const newObject = Object.assign({}, state.params[0], value);
      Vue.set(state.params, 0, newObject);
    }
  },
  actions: {
    setPages({ dispatch, commit, state }, page) {
      commit("changePage", page);
      dispatch("characters/getCharacters", state.params[0], { root: true });
    },
    searchData({ dispatch, commit, state }, value) {
      commit("searchCharacter", value);
      dispatch("characters/getCharacters", state.params[0], { root: true });
    }
  }
};
