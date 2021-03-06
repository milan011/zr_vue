
//权限管理路由组
import Layout from '@/views/layout/Layout'

const goodsRouter = {
    path: '/goods',
    component: Layout,
    redirect: '/goods/index',
    name: 'Goods',
    meta: {
      title: '',
      icon: 'theme',
      noCache: true,
      roles: ['admin', 'manager']
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/goods/index'], resolve)),
        name: 'goodsList',
        meta: { title: 'goods', noCache: true}
      }
    ]
}
export default goodsRouter