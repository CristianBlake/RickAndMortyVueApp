import axios from "axios";

export default {
  namespaced: true,
  state: {
    characters: [],
    modal: false,
    currentCharacter: {}
  },

  mutations: {
    setCharacters(state, infoCharacters) {
      state.characters = infoCharacters;
    },
    setCurrentCharacter(state, data) {
      state.modal = true;
      state.currentCharacter = data;
    },
    setModalFalse(state) {
      state.modal = false;
    }
  },
  actions: {
    getCharacters({ commit, rootState }) {
      const params = rootState.pages.params[0];
      axios
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then((res) => {
          const infoCharacters = res.data.results;
          const infoPages = res.data.info.pages;
          commit("setCharacters", infoCharacters);
          commit("pages/setPages", infoPages, { root: true });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showMore({ commit }, id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}/`)
        .then((res) => {
          const data = res.data;
          commit("setCurrentCharacter", data);
        });
    }
  },
  getters: {
    characterSearched(state) {
      return state.search;
    }
  }
};
