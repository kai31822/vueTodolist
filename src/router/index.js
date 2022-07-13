import Vue from 'vue'
import VueRouter from 'vue-router'
import todo from '../views/todo.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: todo
  },
  {
    path: '/todo2',
    name: 'todo2',
    component: () => import(/* webpackChunkName: "todo2" */ '../views/todo2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
