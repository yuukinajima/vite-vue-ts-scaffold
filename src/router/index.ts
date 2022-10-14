import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  { path: "/", component: Home, strict: true },
  { path: "/about", component: About, strict: true },
  { path: "/about/", redirect: "/about", strict: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
