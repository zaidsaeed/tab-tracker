<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title> Log In </v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field
                        label="Email"
                        v-model="email"
                    ></v-text-field>
                    <br>
                    <v-text-field
                        label="Password"
                        v-model="password"
                    ></v-text-field>
                    <br>
                    <div class="error" v-html="error"/>
                    <br>
                    <v-btn class="cyan" dark @click="login">Login</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/AuthenticationService.js";
export default {
  data() {
    return {
      email: "abc",
      password: "123",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password,
          error: null
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
