import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import GH404 from "@/components/GH404Handler.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/test", component: About },
  { path: "/about", component: About },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
