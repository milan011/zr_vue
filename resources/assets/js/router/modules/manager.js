
//权限管理路由组
import Layout from '@/views/layout/Layout'

const permissionRouter = {
    path: '/manager',
    component: Layout,
    redirect: '/manager/index',
    name: 'Manager',
    meta: {
      title: '',
      icon: 'list'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/manager/index'], resolve)),
        name: 'managerList',
        meta: { title: 'manager' }
      }
    ]
}
export default permissionRouter