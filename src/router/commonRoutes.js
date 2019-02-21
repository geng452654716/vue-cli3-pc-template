/**
 * /*
 * 通用路由配置，需要放在配置项数组的末端
 * 如 首页 404 等通用页面
 *
 * @format
 */

export default [{
  path: '/',
  component: () => import('@/views/home')
}]