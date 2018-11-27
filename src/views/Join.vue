<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Join Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                id="password"
                label="Password"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit">Join</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      valid: false,
      email: "",
      password: ""
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userJoin", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped></style>
