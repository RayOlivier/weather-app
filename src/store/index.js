import Vue from "vue";
import Vuex from "vuex";
import { ADD_ZIPCODE } from "./mutation-types";

Vue.use(Vuex);

const state = {
  zipcodeList: [75007],
  cityDataList: []
};
const actions = {
  addCityAction({ commit }, zipcode) {
    commit(ADD_ZIPCODE, zipcode);
  }
};
const mutations = {
  [ADD_ZIPCODE](state, zipcode) {
    state.zipcodeList.push(zipcode);
  }
};
const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  getters
  // modules (what is this??? lol)
});
