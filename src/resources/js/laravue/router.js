import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

/**
 * takes require.context() generated file list and returns routes
 * files should be vue components with a `route: {name: '', path: ''}` defined
 * second parameter can be default components overwritten by the first
 */

const getRoutes = function(routeFiles, defaultRouteFiles = false) {
  let routes = {}
  const defineRoutes = function(files) {
    files.keys().map(key => {
      let component = files(key).default
      if (component.route !== undefined) {
        component.route.component = component
        routes[component.route.name] = component.route
      }
    })
  }
  if (defaultRouteFiles) defineRoutes(defaultRouteFiles)

  defineRoutes(routeFiles)

  return routes
}

const autoRoutes = getRoutes(
  require.context("./components/Routes/", false, /.*\.vue$/i),
  require.context("./components/Default/Routes", false, /.*\.vue$/i)
)

console.log(autoRoutes)

// Get the GuestApp route
const appComponents = getRoutes(
  require.context("./components", false, /.*App\.vue$/i),
  require.context("./components/Default", false, /.*App\.vue$/i)
)

appComponents["app"].children = [...Object.values(autoRoutes)]
console.log(appComponents["app"])

/**
 * declare routes
 */
let routes = [appComponents["app"], { path: "*", redirect: "/app" }]

export default new VueRouter({ routes })
