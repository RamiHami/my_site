import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import WelcomePage from '../views/WelcomePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WelcomePage,
  },
  {
    path: '/main_page',
    component: MainPage
  }
]

const router = new VueRouter({
  routes
})

export default router
