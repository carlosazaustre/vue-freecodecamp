import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("./views/Menu.vue")
    },
    {
      path: "/sign-in",
      name: "signin",
      component: () => import("./views/Signin.vue")
    },
    {
      path: "/join",
      name: "join",
      component: () => import("./views/Join.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
