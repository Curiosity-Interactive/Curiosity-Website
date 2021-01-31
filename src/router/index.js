import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectSpecific from '../views/ProjectSpecific.vue'
import CuriosityLabSpecific from '../views/CuriosityLabSpecific.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/project/:specProjectId",
    name: "projects",
    component: ProjectSpecific,
    props: true
  },
  {
    path: "/curiosity-lab",
    name: "curiosity-lab",
    component: CuriosityLabSpecific,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
