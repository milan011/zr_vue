
//权限管理路由组
import Layout from '@/views/layout/Layout'

const inventoryRouter = {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/index',
    name: 'inventory',
    meta: {
      title: '',
      icon: 'component',
      roles: ['admin', 'manager']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/inventory/index'], resolve)),
        name: 'inventoryList',
        meta: { title: 'inventory' }
      }
    ]
}
export default inventoryRouter