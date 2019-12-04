import Vue from "vue"
import vuetify from "./vuetify"
import processComponents from "./processComponents"
import store from "./vuex/store"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const defaultComponentFiles = require.context("./components/Default", true, /.*\.vue$/i)
const componentFiles = require.context(
  "./components",
  true,
  /^(?!.*(?:Default)).*\.vue$/i
)

const { appRoute, menuItems, drawerMenuItems } = processComponents(
  initData,
  componentFiles,
  defaultComponentFiles
)

const routes = [appRoute, { path: "*", redirect: "/" }]
const router = new VueRouter({ routes })

const menu = [...menuItems]
const drawerMenu = [...drawerMenuItems]

if (process.env.ASSET_PATH) {
  Vue.mixin({
    methods: {
      asset(append) {
        return process.env.ASSET_PATH + append
      }
    }
  })
}

export { menu, drawerMenu }
export const VueOptions = {
  el: "#app",
  store,
  vuetify,
  router
}
