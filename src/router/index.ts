import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HelloWorld.vue";
import TestPage from "@/views/test.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/test", name: "Edit", component: TestPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
