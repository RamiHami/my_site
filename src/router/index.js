import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import WelcomePage from '../views/WelcomePage.vue'
import LinkButtons from '../views/LinkButtons.vue'
import MyProjects from '../views/MyProjects.vue'
import Resume from '../views/Resume.vue'


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
        path: '/my_projects',
        component: MyProjects
      },
      {
        path: '/resume',
        component: Resume
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
