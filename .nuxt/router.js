import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d11b86b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b1b1b22e = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7d11b86b,
    name: "index"
  }, {
    path: "/:lang",
    component: _b1b1b22e,
    name: "lang"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
