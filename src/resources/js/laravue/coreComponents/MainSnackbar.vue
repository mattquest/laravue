<template>
  <v-snackbar color="primary" v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}
    <v-btn fab small dark flat @click="$store.commit('hideSnackbar')">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>
<script>
  export default {
    name: "MainSnackbar"
  }
</script>

<style scoped></style>
