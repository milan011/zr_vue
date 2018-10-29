
//权限管理路由组
import Layout from '@/views/layout/Layout'

const permissionRouter = {
    path: '/package',
    component: Layout,
    redirect: '/package/index',
    name: 'Package',
    meta: {
      title: '',
      icon: 'size'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/package/index'], resolve)),
        name: 'package',
        meta: { title: 'package' }
      }
    ]
}
export default permissionRouter