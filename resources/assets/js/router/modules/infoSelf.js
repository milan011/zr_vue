
//信息管理路由组
import Layout from '@/views/layout/Layout'

const infoSelfRouter = {
    path: '/infoSelf',
    component: Layout,
    redirect: '/infoSelf/index',
    name: 'InfoSelf',
    meta: {
      title: '',
      noCache: true,
      icon: 'documentation'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/infoSelf/index'], resolve)),
        name: 'infoSelfList',
        meta: { title: 'info' ,noCache: true }
      },
    ]
}
export default infoSelfRouter