//电信信息管理路由组
import Layout from '@/views/layout/Layout'

const infoDianxinRouter = {
    path: '/infoDianxin',
    component: Layout,
    redirect: '/infoDianxin/index',
    name: 'infoDianXin',
    meta: {
      title: '',
      icon: 'message',
      noCache: true,
      roles: ['admin', 'manager'],
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/infoDianxin/index'], resolve)),
        name: 'infoDianxinList',
        meta: { title: 'infoDianXin', noCache: true }
      },
    ]
}
export default infoDianxinRouter