import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import landscape from '../views/landscape.vue'
import prjParkAngelov from '../views/prj-park-angelov.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/landscape',
    name: 'landscape',
    component: landscape
  },
  {
    path: '/park-angelov',
    name: 'prjParkAngelov',
    // route level code-splitting
    // this generates a separate chunk (prjParkAngelov.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "prjParkAngelov" */ '../views/prj-park-angelov.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
