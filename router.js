import { createRouter, createWebHashHistory } from "vue-router";
import List from "./components/BlogList.vue";
import home from "./components/home.vue";
import Detail from "./components/Detail.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: home,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
