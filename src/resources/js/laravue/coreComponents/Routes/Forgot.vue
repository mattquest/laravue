<template>
  <v-layout pt-5 mt-5 justify-middle row>
    <v-spacer></v-spacer>
    <v-flex>
      <div class="pa-3 display-1 secondary--text">
        Forgot Password
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
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="resetPassword()">Reset Password</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>

<script>
  import Form from "@wheelmaker/js-form"

  export default {
    name: "Login",
    data() {
      return {
        form: new Form("/password/email", { email: "" }, r => r.response.data.errors)
      }
    },
    guest: true,
    route: {
      name: "forgot",
      path: "forgot"
    },
    methods: {
      resetPassword() {
        this.form.post().then(r => console.log(r))
      }
    }
  }
</script>

<style scoped></style>
