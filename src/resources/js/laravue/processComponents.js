import Vue from "vue"

const routeMix = {
  methods: {
    routeTo(name) {
      this.$store.dispatch("routeTo", { caller: this, name })
    }
  }
}

const processComponents = function(componentFiles, defaultComponentFiles = false) {
  let appRoute = null
  const components = {}
  const [routes, menuItems, drawerMenuItems] = [[], [], []]

  function setRoutes(component) {
    if (!component.route) return
    const route = { ...component.route }
    route.component = component
    if (route.name === "app") {
      appRoute = route
    } else {
      routes.push(route)
    }
  }
  function setMenus(component) {
    if (component.menuItem) {
      menuItems.push({ route: component.route.path, text: component.route.name })
    }
    if (component.drawerMenuItem) {
      drawerMenuItems.push(component.route.name)
    }
  }
  function setComponents(comp) {
    components[comp.name] = comp
  }
  function eachComponent(files, funcs) {
    if (!files) return
    files.keys().map(key => {
      funcs.forEach(func => func(files(key).default))
    })
  }
  function registerNamedComponents(components) {
    Object.values(components).map(component => {
      if (component.name === undefined) return
      component.mixins = [routeMix]
      Vue.component(component.name, component)
    })
  }

  const funcs = [setRoutes, setMenus, setComponents]
  // defaults are overwritten by customs
  eachComponent(defaultComponentFiles, funcs)
  eachComponent(componentFiles, funcs)

  // register named components with Vue
  registerNamedComponents(components)
  // all other routes are children of app route
  appRoute.children = routes

  return { appRoute, menuItems, drawerMenuItems }
}

export default processComponents
