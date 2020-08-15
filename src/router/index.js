import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import actList from '../views/actList'

Vue.use(VueRouter)

const routes = [
  {
    redirect: '/actList',
    path: '/'
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/actList',
    name: 'actList',
    component: actList,
    meta: {
      keepAlive: false,
    }
  },
]

const router = new VueRouter({
  routes
})

export default router