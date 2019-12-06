import Vue from "vue"
import Vuex from "vuex"
import store from "../store"
import { assignExisting } from "@wheelmaker/object-helpers"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...store.state,
    appName: null,
    drawer: false,
    drawerMenu: [],
    menu: [],
    snackbar: {
      text: "",
      show: false
    },
    user: null
  },
  actions: {
    ...store.actions
  },
  mutations: {
    ...store.mutations,
    fill(state, data) {
      assignExisting(state, data)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
      state.snackbar.text = ""
    },
    showSnackbar(state, text) {
      state.snackbar.text = text
      state.snackbar.show = true
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer
    }
  },
  modules: {
    ...store.modules
  }
})
