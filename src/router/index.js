import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import WelcomePage from '../views/WelcomePage.vue'
import LinkButtons from '../views/LinkButtons.vue'
import AboutMe from '../views/AboutMe.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WelcomePage,
  },
  {
    path: '/main_page',
    component: MainPage,
    children: [
      {
        path: '/main_page',
        component: LinkButtons
      },
      {
        path: '/about_me',
        component: AboutMe
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
