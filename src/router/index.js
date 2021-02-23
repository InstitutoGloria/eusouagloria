import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteLayout from '../views/Site.vue'
import Home from "../site/Home.vue";

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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
