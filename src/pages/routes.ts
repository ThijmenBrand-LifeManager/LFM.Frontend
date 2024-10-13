import {
  silentAuth,
  useAuth,
} from "@/lib/services/authentication/authentication";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("./auth/LoginView.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("./dashboard/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  await silentAuth();

  const user = useAuth().user;
  console.log("user", user?.value);

  if (to.meta.requiresAuth && !user?.value) next({ name: "Login" });
  else if (to.name === "Login" && user?.value) next({ name: "Dashboard" });
  else next();
});

export default router;
