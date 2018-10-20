
//后台用户管理路由组
import Layout from '@/views/layout/Layout'

const userRouter = {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    name: 'User',
    meta: {
      title: '',
      icon: 'user'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/user/index'], resolve)),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        hidden: true,
        path: 'userAdd',
        component: resolve => void(require(['@/components/hello'], resolve)),
        name: 'userAdd',
        meta: { title: 'userCreate' }
      }
    ]
}
export default userRouter