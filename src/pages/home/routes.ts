import { RouteRecordRaw } from "vue-router";

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: "",
    name: "Dashboard",
    component: () => import("./dashboard/DashboardView.vue"),
  },
  {
    path: "/workstreams",
    name: "Workstreams",
    component: () => import("./workstreams/WorkStreamsView.vue"),
  },
];
