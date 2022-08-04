import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "../pages/Home.vue";
import Videos from "../pages/Videos.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/videos",
    component: Videos,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
