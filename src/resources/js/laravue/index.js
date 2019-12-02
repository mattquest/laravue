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
  componentFiles,
  defaultComponentFiles
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