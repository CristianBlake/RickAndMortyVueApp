import Vuex from "vuex";
import Vue from "vue";
import characters from "./modules/characters";
import pages from "./modules/pages";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    characters,
    pages
  }
});

export default store;
