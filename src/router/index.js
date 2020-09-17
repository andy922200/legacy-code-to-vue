import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "./../views/Movies.vue";
import NotFound from "./../views/NotFound404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
