import Vue from "vue";
import Vuex from "vuex";
import { ADD_ZIPCODE, INITIALIZE_STORE, DELETE_ZIPCODE } from "./mutation-types";

Vue.use(Vuex);

const state = {
  zipcodeList: [],
  cityDataList: []
};
const actions = {
  addZipcodeAction({ commit }, zipcode) {
    commit(ADD_ZIPCODE, zipcode);
  },
  deleteZipcodeAction({ commit }, zipcode) {
    commit(DELETE_ZIPCODE, zipcode);
  }
};
const mutations = {
  [ADD_ZIPCODE](state, zipcode) {
    state.zipcodeList.push(zipcode);
    localStorage.setItem("zipcodeList", JSON.stringify(state.zipcodeList));
  },
  [DELETE_ZIPCODE](state, zipcode) {
    console.log("state.zipcodeList", state.zipcodeList, zipcode);
    const newList = state.zipcodeList.filter(z => z !== zipcode);
    state.zipcodeList = [...newList];
    localStorage.setItem("zipcodeList", JSON.stringify(state.zipcodeList));
    console.log("state.zipcodeList", state.zipcodeList);
  },
  [INITIALIZE_STORE](state) {
    console.log("localStorage.getItem(zipcodeList)", localStorage.getItem("zipcodeList"));
    if (localStorage.getItem("zipcodeList")) {
      state.zipcodeList = [...JSON.parse(localStorage.getItem("zipcodeList"))];
    }
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
