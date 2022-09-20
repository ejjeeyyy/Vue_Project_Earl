import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import DashboardView from '../views/Dashboard.vue'
import AboutView from '../views/About.vue'
import AxiosView from '../views/QuizApp.vue'
import AboutAppView from '../views/AboutApplication.vue'
import VuetifyResearchView from '../views/VuetifyResearch.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import FeedView from '../views/Feed.vue'
import QuizRecordView from '../views/QuizRecord.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
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
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/quizrecord',
      name: 'quizrecord',
      component: QuizRecordView
    }

  ]
})

export default router
