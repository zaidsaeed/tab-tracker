<template>
    <v-layout row wrap align-center>
        <v-flex xs6 offset-xs3>
            <panel title="Log In">
                    <v-text-field
                        label="Email"
                        v-model="email"
                    ></v-text-field>
                    <br>
                    <v-text-field
                        type="password"
                        label="Password"
                        v-model="password"
                    ></v-text-field>
                    <br>
                    <div class="danger-alert" v-html="error"/>
                    <br>
                    <v-btn class="cyan" dark @click="login">Login</v-btn>
            </panel>
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "songs" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
