import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  getters
  // modules (what is this??? lol)
});
