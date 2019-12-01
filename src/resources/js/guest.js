require("../../vendor/laravel/spark-aurelius/resources/assets/js/spark-bootstrap")
require("../../vendor/laravel/spark-aurelius/resources/assets/js/vue-bootstrap")
require("./components/bootstrap")
require("./bootstrap")

// import Vue from 'vue'
import vuetify from "./vuetify-guest"
import router from "./router-guest.js"

import autoRegisterComponents from "./autoRegisterComponents"

/**
 * get default App components
 */
const defaultGuestComponentFiles = require.context(
  "./components/Guest/Default",
  false,
  /.*\.vue$/i
)
/**
 * get all app components
 */
const guestComponentFiles = require.context(
  "./components/Guest",
  true,
  /^(?!.*(?:Default)).*\.vue$/i
)

autoRegisterComponents(guestComponentFiles, defaultGuestComponentFiles)

var app = new Vue({
  el: "#guest",
  vuetify,
  router,
  mixins: [require("spark")]
})
