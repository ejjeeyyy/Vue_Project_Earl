import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/StringAppView.vue'
import DashboardView from '../views/Dashboard.vue'
import AboutView from '../views/About.vue'
import AxiosView from '../views/Axios.vue'
import AboutAppView from '../views/AboutApplication.vue'
import VuetifyResearchView from '../views/VuetifyResearch.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basicMath',
      name: 'BasicMath',
      component: BasicMathView
      },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/axios',
      name: 'Axios',
      component: AxiosView
    },

    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: AboutAppView
    },
    {
      path: '/vuetifyresearch',
      name: 'vuetifyresearch',
      component: VuetifyResearchView
    },

    {
      path: '/about',
      name: 'About',
      component: AboutView
    }

  ]
})

export default router
