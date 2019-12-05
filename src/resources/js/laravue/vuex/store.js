import Vue from "vue"
import Vuex from "vuex"
import { assignExisting } from "@wheelmaker/object-helpers"
import stores from "./stores.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: null,
    menu: [],
    user: null
  },
  actions: {},
  mutations: {
    fill(state, data) {
      assignExisting(state, data)
    }
  },
  modules: stores
})
