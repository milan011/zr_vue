
//权限管理路由组
import Layout from '@/views/layout/Layout'

const repertoryRouter = {
    path: '/cangku',
    component: Layout,
    redirect: '/cangku/index',
    name: 'Repertory',
    meta: {
      title: '',
      icon: 'list',
      noCache: true,
      roles: ['admin', 'manager'] //页面需要的权限
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/cangku/index'], resolve)),
        name: 'cangku',
        meta: { title: 'cangku', noCache: true }
      }
    ]
}
export default repertoryRouter