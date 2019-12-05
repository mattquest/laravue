<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-flex align="center" justify="center" class="pa-5" style="background: #fff">
        <v-flex class="pa-5 text-center display-2 font-weight-light">
          Laravue SPA
        </v-flex>

        <v-row align="center" justify="center">
          <v-col align="center" cols="12" sm="4">
            <v-img width="100" :src="asset('images/vue.png')"></v-img>
          </v-col>
          <v-col align="center" cols="12" sm="4">
            <v-img width="100" :src="asset('images/laravel.png')"></v-img>
          </v-col>
          <v-col align="center" cols="12" sm="4">
            <v-img width="100" :src="asset('images/vuetify.png')"></v-img>
          </v-col>
        </v-row>
        <v-flex
          class="text-center font-weight-light pa-5 grey--text"
          style="font-size: 1.5rem"
        >
          A single page application framework by
          <a href="https://wheelmaker.dev" target="_blank"> wheelmaker</a>.
        </v-flex>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "Home",
    guest: true,
    route: {
      name: "home",
      path: ""
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
