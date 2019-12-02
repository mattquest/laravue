<template>
  <v-layout pt-5 mt-5 justify-middle row>
    <v-spacer></v-spacer>
    <v-flex>
      <div class="pa-3 display-1 secondary--text">
        Login
      </div>
      <v-card class="elevation-3">
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="form.fields.email"
              prepend-icon="fa-user"
              name="email"
              label="Email"
              @keydown="form.resetStatus()"
              :error-messages="form.errors.email"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="form.fields.password"
              id="password"
              label="Password"
              name="password"
              prepend-icon="fa-lock"
              type="password"
              :error-messages="form.errors.password"
              @keydown="form.resetStatus()"
              @keydown.enter="login()"
            ></v-text-field>
            <v-checkbox
              class="justify-start pl-5 ml-2 pb-0 mb-0"
              v-model="form.fields.remember"
            >
              <template slot="label">
                <v-flex class="">
                  remember me
                </v-flex>
              </template>
            </v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-flex class="pl-5 ml-5 pa-0 ma-0" @click="() => routeTo('forgot')">
            <a>
              forgot password?
            </a>
          </v-flex>
          <v-spacer></v-spacer>
          <v-btn text @click="form.reset()">reset</v-btn>
          <v-btn color="primary" @click="login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>

<script>
  import Form from "lara-js-form"

  export default {
    name: "Login",
    data() {
      return {
        form: new Form("/login", { email: "", password: "", remember: false })
      }
    },
    menuItem: true,
    guest: true,
    route: {
      name: "login",
      path: "login"
    },
    methods: {
      login() {
        this.form.post().then(r => {
          window.location.href = "/#/"
          window.location.reload()
        })
      }
    }
  }
</script>

<style scoped></style>
