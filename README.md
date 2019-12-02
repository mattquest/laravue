# Laravue Spa

### A Single Page Application Framework

##### Built On: Laravel / Vue.js / Vuetify

### Pre Alpha Release - Experimental - Docs Not Complete!!

### Demo @ https://laravue-spa.wheelmaker.dev

Laravue Spa scaffolds out a single page application, making it easy to hit the ground running with great technologies and the beautiful Vuetify ui library.

Adding vue components is as simple as placing them in the correct folder and adding corresponding route, menu item and drawer menu item definitions when appropriate.

### Installation From Fresh Laravel 6 Project

`composer require wheelmaker/laravue-spa`

`php composer vendor:publish --tag=laravue-spa`

Append the following code to the resources/js/app.js file:

    import Vue from "vue"
    import { VueOptions, menu, drawerMenu } from "./laravue"

    var app = new Vue({
      ...VueOptions
    })

    app.$store.commit("fill", { menu, drawerMenu, ...initData })

`php artisan ui:auth`

`php artisan migrate`

`yarn add laravue-spa`

`yarn`

`yarn run dev`

`php artisan migrate`

Comment out the default `/` route in routes/web.php.
