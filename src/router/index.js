import Vue from 'vue'
import VueRouter from 'vue-router'

import SiteLayout from '../views/Site.vue'
import Home from "../site/Home.vue";
import We from "../site/We.vue";
import About from "../site/About.vue"
import Projects from "../site/Projects.vue"
import News from "../site/News.vue"
import Volunteer from "../site/Volunteer.vue"

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
      {
        path: 'news',
        name: "News",
        component: News
      },
      {
        path: 'volunteer',
        name: "Volunteer",
        component: Volunteer
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
