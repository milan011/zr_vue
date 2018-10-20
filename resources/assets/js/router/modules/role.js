
//权限管理路由组
import Layout from '@/views/layout/Layout'

const roleRouter = {
    path: '/role',
    component: Layout,
    redirect: '/role/index',
    name: 'Role',
    meta: {
      title: '',
      icon: 'people'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/role/index'], resolve)),
        name: 'role',
        meta: { title: 'role' }
      },
    ]
}
export default roleRouter