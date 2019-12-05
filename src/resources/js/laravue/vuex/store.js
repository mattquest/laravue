import Vue from "vue"
import Vuex from "vuex"
import { assignExisting } from "@wheelmaker/object-helpers"
import stores from "./stores.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: null,
    homeRoute: null,
    menu: [],
    user: null
  },
  actions: {
    routeTo(context, { caller, name }) {
      console.log("routeTo", name)
      if (caller.$route.name !== name) caller.$router.push({ name })
    }
  },
  mutations: {
    fill(state, data) {
      assignExisting(state, data)
    }
  },
  modules: stores
})
