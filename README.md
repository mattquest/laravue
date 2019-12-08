# Laravue Spa

### A Single Page Application Framework

##### Built On: Laravel / Vue.js / Vuetify

### Pre Alpha Release - Experimental - Docs Not Complete!!

### Demo @ https://laravue-spa.wheelmaker.dev

Laravue Spa scaffolds out a single page application, making it easy to hit the ground running with great technologies and the beautiful Vuetify ui library.

Adding vue components is as simple as placing them in the correct folder and adding corresponding route, menu item and drawer menu item definitions when appropriate.

## Starting From Fresh Laravel 6 Project

### Install package with composer and publish assets

- `composer require wheelmaker/laravue-spa`
- `php artisan vendor:publish --tag=laravue-spa`

### Append the following code to the resources/js/app.js file:

    import Vue from "vue"
    import { VueOptions, menu, drawerMenu } from "./laravue"

    var app = new Vue({
      ...VueOptions
    })

    app.$store.commit("fill", { menu, drawerMenu, ...initData })

### Use Laravel's built in authorization scaffolding:

- `php artisan ui:auth`
- `php artisan migrate`

### Add laravue-spa npm package:

- `yarn add laravue-spa-np`

### Install npm packages and compile for dev:

- `yarn`
- `yarn run dev`

### Comment or delete the default route in /routes/web.php:

> :warning: note: this is your laravel project's root level `/routes/web.php` file

    // Route::get('/', function () {
    //     return view('welcome');
    // });

Woo hoo! You should now have a Laravue Spa instance up and running, similar to
https://laravue-spa.wheelmaker.dev
