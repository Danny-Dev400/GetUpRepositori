import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path:"/Login",
    component: Login
  },
  {
    path: "/Register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    meta:{
      requireAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/Exercise",
    name: "Exercise",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercises.vue"),
  },
  {
    path: "/Routines",
    name: "Routines",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Routines.vue"),
  },
  {
    path: "/Estadistics",
    name: "Estadistics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Estadistics.vue"),
  },
  {
    path: "/Notifications",
    name: "Notifications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notifications.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)){
    if(localStorage.getItem('token') === null){
      next({
        path:'/'
      });
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router;
