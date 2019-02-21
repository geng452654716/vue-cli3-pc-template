/** @format */

import Vue from 'vue'
import Router from 'vue-router'
import beforeEachHooks from './beforeEachHooks'
import RoutesMapConfig from './routes'
import commonRoutesMap from './commonRoutes'

Vue.use(Router)

const routerInstance = new Router({
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior: () => ({
    y: 0,
    x: 0
  }),
  routes: RoutesMapConfig.concat(commonRoutesMap)
})

Object.values(beforeEachHooks).forEach(hook => {
  routerInstance.beforeEach(hook)
})

export default routerInstance
