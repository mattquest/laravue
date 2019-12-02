<template>
  <v-navigation-drawer v-model="drawer" fixed right app>
    <v-list dense>
      <v-list-item
        v-for="(item, i) in drawerItems"
        :key="i"
        @click="$router.push({ name: item.route })"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="logout()">
        <v-list-item-action>
          <v-icon>logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Drawer",
    data() {
      return {}
    },
    computed: {
      ...mapState({
        drawerItems: state => state.appInterface.drawerItems,
        drawer: state => state.appInterface.drawer
      })
    },
    methods: {
      logout() {
        axios.post("/logout").then(() => {
          window.location.href = "/#/"
          window.location.reload()
        })
      }
    }
  }
</script>

<style scoped></style>
