<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-flex align="center" justify="center" class="pa-5" style="background: #fff">
        <v-flex class="pa-5 text-center display-2 font-weight-light">
          Laravue SPA
        </v-flex>

        <v-row align="center" justify="center">
          <v-col
            v-for="(framework, i) in subFrameworks"
            :key="i"
            align="center"
            cols="12"
            sm="4"
          >
            <a :href="framework.url" target="_blank">
              <v-img width="100" :src="asset('images/' + framework.image)" />
            </a>
            <v-flex class="grey--text pt-3">{{ framework.name }}</v-flex>
          </v-col>
        </v-row>
        <v-flex
          class="text-center font-weight-light pa-5 grey--text"
          style="font-size: 1.5rem"
        >
          A single page application framework by
          <a href="https://wheelmaker.dev" target="_blank"> wheelmaker</a>.
          <br />
          <span style="font-size: 1rem; color: #555">
            available on:
            <a href="https://github.com/mattquest/laravue-spa">github</a>
          </span>
        </v-flex>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "Home",
    guest: true,
    data: () => ({
      subFrameworks: [
        {
          url: "https://laravel.com",
          name: "Laravel",
          image: "laravel.png"
        },
        {
          url: "https://vuejs.org/",
          name: "Vue.js",
          image: "vue.png"
        },
        {
          url: "https://vuetifyjs.com/",
          name: "Vuetify",
          image: "vuetify.png"
        }
      ]
    }),
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
