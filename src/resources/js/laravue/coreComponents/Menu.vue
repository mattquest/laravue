<template>
  <v-layout fill-height justify-end row>
    <v-toolbar-items>
      <v-btn
        v-for="(menuItem, i) in menu"
        text
        :key="i"
        @click="() => routeToName(menuItem.route)"
      >
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
    },
    methods: {
      ...mapActions(["routeTo"]),
      routeToName(name) {
        this.routeTo({ caller: this, name })
      }
    }
  }
</script>

<style scoped></style>
