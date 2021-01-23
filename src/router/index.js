import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectSpecific from '../views/ProjectSpecific.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/project/:specProjectId",
    name: "project",
    component: ProjectSpecific,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
