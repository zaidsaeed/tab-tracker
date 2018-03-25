import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import LogIn from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/LogIn";
import Songs from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Songs/Index.vue";
import CreateSong from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/CreateSong.vue";
import Index from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/ViewSong/Index.vue";
import EditSong from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/EditSong.vue";

Vue.use(Router);

export default new Router({
  routes: [
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
    },
    {
      path: "/songs/create",
      name: "songs-create",
      component: CreateSong
    },
    {
      path: "/songs/:songId",
      name: "song",
      component: Index
    },
    {
      path: "/songs/:songId/edit",
      name: "song-edit",
      component: EditSong
    },
    {
      path: "*",
      redirect: "songs"
    }
  ]
});
