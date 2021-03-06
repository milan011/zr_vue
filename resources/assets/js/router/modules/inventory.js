
//权限管理路由组
import Layout from '@/views/layout/Layout'

const inventoryRouter = {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/index',
    name: 'inventory',
    meta: {
      title: 'inventory',
      icon: 'component',
      noCache: true,
      roles: ['admin', 'manager']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/inventory/index'], resolve)),
        name: 'inventoryGoodsList',
        meta: { title: 'inventoryList', noCache: true }
      },
      {
        path: 'detail',
        component: resolve => void(require(['@/views/inventoryDetail/index'], resolve)),
        name: 'inventoryDetail',
        meta: { title: 'inventoryDetail' ,noCache: true }
      }
    ]
}
export default inventoryRouter