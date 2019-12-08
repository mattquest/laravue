<template>
  <v-app>
    <drawer v-if="user"></drawer>
    <v-app-bar color="primary darken-1" dark fixed app>
      <v-toolbar-title style="cursor: pointer;" @click="() => routeTo('home')">
        {{ appName }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <main-menu></main-menu>
      <v-app-bar-nav-icon
        class="ml-3"
        v-if="user"
        @click.stop="toggleDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-dialogs />
    <v-footer color="primary darken-1" text-xs-center class="mt-5">
      <v-flex text-center class="white--text"
        >&copy; {{ new Date().getFullYear() }}</v-flex
      >
    </v-footer>
    <v-overlay :absolute="true" :opacity="0.3" :value="overlay" :z-index="100000" />
  </v-app>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex"
  export default {
    name: "App",
    data() {
      return {
        drawer: false
      }
    },
    route: {
      name: "app",
      path: "/"
    },
    mounted() {},
    computed: {
      ...mapState(["user", "appName", "overlay"]),
      routeName() {
        return this.$route.name
      }
    },
    methods: {
      ...mapMutations(["fill", "toggleDrawer"])
    }
  }
</script>

<style scoped></style>
