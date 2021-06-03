import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/registerfirma",
    name: "RegisterFirma",
    component: () => import("../views/RegisterFirma.vue"),
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/produsemanager",
    name: "ProduseManager",
    component: () => import("../views/ProduseManager.vue"),
    meta: {
      requireFirma:true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.getters.esteLogat) {
      // Redirect la pagina de logare
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requireGuest)) {
    if (store.getters.esteLogat) {
      // Redirect la pagina de profil
      next("/profile");
    } else {
      next();
    }
  }  else if (to.matched.some((record) => record.meta.requireFirma)) {
    if (!store.getters.esteFirma || !store.getters.esteLogat || store.getters.rolUtilizator !='firma') {
      // Redirect la pagina de profil
      next("/error");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
