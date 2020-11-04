import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Users from "../views/Users";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/users", name: "users", component: Users }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
