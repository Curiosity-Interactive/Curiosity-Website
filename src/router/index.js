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
    component: ProjectSpecific
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});

export default router;
