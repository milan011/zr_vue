
//权限管理路由组
import Layout from '@/views/layout/Layout'

const packageRouter = {
    path: '/package',
    component: Layout,
    redirect: '/package/index',
    name: 'Package',
    meta: {
      title: '',
      icon: 'size',
      noCache: true,
      roles: ['admin', 'manager']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/package/index'], resolve)),
        name: 'packageList',
        meta: { title: 'package', noCache: true }
      }
    ]
}
export default packageRouter