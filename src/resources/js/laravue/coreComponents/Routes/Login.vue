<template>
  <v-row class="pt-sm-5 mt-sm-5">
    <v-spacer></v-spacer>
    <v-flex>
      <div class="pa-3 display-1 text-center secondary--text">
        Login
      </div>
      <v-card class="elevation-3 mx-auto" max-width="350">
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
              @keydown.enter.stop="login()"
              @keydown="form.resetStatus()"
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
          <v-btn text @click="form.reset()" :disabled="pending">reset</v-btn>
          <v-btn color="primary" :disabled="pending" :loading="pending" @click="login()"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
  import Form from "lara-js-form"

  export default {
    name: "Login",
    data() {
      return {
        pending: false,
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
        this.pending = true
        this.form
          .post()
          .then(r => {
            // login component doesn't exist for authed user
            // will redirect to home (dashboard)
            window.location.reload()
          })
          .catch(r => {
            this.pending = false
          })
      }
    }
  }
</script>

<style scoped></style>
