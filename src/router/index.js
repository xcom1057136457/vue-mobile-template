import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    redirect: '/login',
    path: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router