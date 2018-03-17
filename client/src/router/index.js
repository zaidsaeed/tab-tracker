import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import LogIn from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/LogIn";
import Songs from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Songs.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: HelloWorld
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs
    }
  ]
});
