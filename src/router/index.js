import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetail from "../views/Jobs/JobDetail.vue";
import NotFound from "../views/NotFound.vue";


const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  {
   // Path: "/all-jobs",
    //redirect: "/jobs",
  },
  {
    path:'/:catchAll(.*)',
    name: 'NotFound', 
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
