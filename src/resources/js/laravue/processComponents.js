import Vue from "vue"
import coreMixins from "./coreMixins"
import mixins from "../mixins"

const processComponents = function(
  initData,
  componentFiles,
  defaultComponentFiles = false
) {
  let appRoute = null
  const components = {}
  const loggedIn = initData.user !== null
  const [routes, menuItems, drawerMenuItems] = [[], [], []]

  const funcs = [
    // set route
    comp => {
      if (!comp.route) return
      const route = { ...comp.route }
      route.component = comp
      if (route.name === "app") {
        appRoute = route
        return
      }
      if (loggedIn != (comp.guest !== true)) return
      routes.push(route)
    },
    // set menu
    comp => {
      if (loggedIn && comp.guest) return
      if (comp.menuItem) {
        menuItems.push({ route: comp.route.path, text: comp.route.name })
      }
      if (comp.drawerMenuItem) {
        drawerMenuItems.push(comp.route.name)
      }
    },
    // set component
    comp => {
      if (loggedIn && comp.guest) return
      components[comp.name] = comp
    }
  ]

  function eachComponent(files, funcs) {
    if (!files) return
    files.keys().map(key => {
      funcs.forEach(func => func(files(key).default))
    })
  }

  // defaults are overwritten by customs
  eachComponent(defaultComponentFiles, funcs)
  eachComponent(componentFiles, funcs)

  // register named components
  Object.values(components).map(component => {
    if (component.name === undefined) return
    component.mixins = [...coreMixins, ...mixins]
    Vue.component(component.name, component)
  })

  // all other routes are children of app route
  appRoute.children = routes

  return { appRoute, menuItems, drawerMenuItems }
}

export default processComponents
