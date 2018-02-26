<template>
  <div class="hello">
      <h1> Register </h1>

      <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
      <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
      <br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods:{ 
      async register () {
          const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
          console.log(response.data)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
