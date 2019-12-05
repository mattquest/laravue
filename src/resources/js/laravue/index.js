import Vue from "vue"
import vuetify from "./vuetify"
import processComponents from "./processComponents"
import store from "./store"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const coreComponentFiles = require.context("./coreComponents", true, /.*\.vue$/i)
const componentFiles = require.context("../components", true, /.*\.vue$/i)

const { appRoute, menuItems, drawerMenuItems } = processComponents(
  initData,
  componentFiles,
  coreComponentFiles
)

const routes = [appRoute, { path: "*", redirect: "/" }]
const router = new VueRouter({ routes })

const menu = [...menuItems]
const drawerMenu = [...drawerMenuItems]

export { menu, drawerMenu }
export const VueOptions = {
  el: "#app",
  store,
  vuetify,
  router
}
