import Vue from 'vue'
import VueRouter from 'vue-router'

import SiteLayout from '../views/Site.vue'
import Home from "../site/Home.vue";
import We from "../site/We.vue";
import About from "../site/About.vue"
import Projects from "../site/Projects.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: SiteLayout,
    children: [
      {
        path: '',
        name: "Home",
        component: Home
      },
      {
        path: 'we',
        name: "We",
        component: We
      },
      {
        path: 'about',
        name: "About",
        component: About
      },
      {
        path: 'projects',
        name: "Projects",
        component: Projects
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
