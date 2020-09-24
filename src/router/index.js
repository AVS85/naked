import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
// import landscape from '../views/landscape.vue'
// import prjParkAngelov from '../views/prj-park-angelov.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/contacts.vue')
  },
  {
    path: '/concept',
    name: 'concept',
    component: () => import('../views/concept.vue')
  },
  {
    path: '/landscape',
    name: 'landscape',
    component: () => import('../views/landscape.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/collection.vue')
  },
  {
    path: '/murmansk-park-severnoe-siyanie',
    name: 'prmurmansk',
    component: () => import('../views/prj-murmansk.vue')
  },
  {
    path: '/derbent-park',
    name: 'prderbent',
    component: () => import('../views/prj-derbent.vue')
  },
  {
    path: '/kemerovo-park-angelov',
    name: 'prkemerovo',
    component: () => import('../views/prj-kemerovo.vue')
  },
  {
    path: '/minsk-blagoustroistvo',
    name: 'prminsk',
    component: () => import('../views/prj-minsk.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
