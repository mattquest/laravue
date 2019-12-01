<template>
    <v-snackbar color="primary" v-model="$store.state.appInterface.snackbar.show">
        {{ $store.state.appInterface.snackbar.text }}
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

<style scoped>

</style>
