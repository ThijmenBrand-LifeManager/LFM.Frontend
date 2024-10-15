import { homeRoutes } from "@/pages/home/routes";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routeNames = {
  LOGIN: "Login",
  DASHBOARD: "Dashboard",
};

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("./auth/LoginView.vue"),
    meta: { auth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./auth/RegisterView.vue"),
    meta: { auth: false },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("./home/index.vue"),
    meta: { auth: true },
    children: [...homeRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
