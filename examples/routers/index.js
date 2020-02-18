import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const startRouter = [
  {
    path: '/icon',
    name: 'icon',
    meta: {
      icon: 'icon-name',
      title: 'icon组件'
    },
    component: () => import('../components/icon/icon.vue')
  }
]

const router = new VueRouter({
  startRouter
})

export default router
