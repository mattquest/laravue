import { assignExisting } from "@wheelmaker/object-helpers"

const appInterface = {
  namespaced: false,
  state: {
    currentObject: {},
    currentObjects: [],
    menu: [],
    drawerMenu: [],
    drawer: false,
    snackbar: {
      text: "",
      show: false
    }
  },
  getters: {},
  mutations: {
    fill(state, data) {
      assignExisting(state, data)
    },
    currentObject(state, { type, item }) {
      state.currentObject = item
      state.currentObjects[type] = item
    },
    hideSnackbar(state) {
      state.snackbar.show = false
      state.snackbar.text = ""
    },
    showSnackbar(state, text) {
      state.snackbar.text = text
      state.snackbar.show = true
    },
    toggleFlag(state, flagName) {
      state[flagName] = !state[flagName]
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer
    }
  },
  actions: {}
}

export default { name: "appInterface", definition: appInterface }
