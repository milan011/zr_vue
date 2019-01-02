
//权限管理路由组
import Layout from '@/views/layout/Layout'

const permissionRouter = {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: 'Permission',
    meta: {
      title: '',
      icon: 'password',
      noCache: true,
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/permissions/index'], resolve)),
        name: 'permissionList',
        meta: { title: 'permission' , noCache: true}
      }
    ]
}
export default permissionRouter