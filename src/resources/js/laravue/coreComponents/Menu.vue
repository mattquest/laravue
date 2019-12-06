<template>
  <v-layout fill-height justify-end row>
    <v-toolbar-items>
      <v-btn v-for="(menuItem, i) in menu" :key="i" text @click="routeTo(menuItem.route)">
        {{ menuItem.text }}
      </v-btn>
    </v-toolbar-items>
  </v-layout>
</template>

<script>
  import { mapState, mapActions } from "vuex"
  export default {
    name: "MainMenu",
    computed: {
      ...mapState(["menu"])
    }
  }
</script>

<style scoped></style>
