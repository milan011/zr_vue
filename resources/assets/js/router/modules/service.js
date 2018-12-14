
//权限管理路由组
import Layout from '@/views/layout/Layout'

const serviceRouter = {
    path: '/service',
    component: Layout,
    redirect: '/service/index',
    name: 'Service',
    meta: {
      title: 'service',
      icon: 'money',
      roles: ['admin', 'manager']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/service/index'], resolve)),
        name: 'serviceList',
        meta: { title: 'serviceList' }
      },
      {
        path: 'detail',
        component: resolve => void(require(['@/views/serviceDetail/index'], resolve)),
        name: 'serviceDetail',
        meta: { title: 'serviceDetail' }
      }
    ]
}
export default serviceRouter