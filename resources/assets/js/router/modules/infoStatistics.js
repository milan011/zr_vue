
//信息管理路由组
import Layout from '@/views/layout/Layout'

const infoStatisticsRouter = {
    path: '/infoStatistics',
    component: Layout,
    redirect: '/infoSelf/index',
    name: 'InfoStatistics',
    meta: {
      title: '',
      roles: ['admin', 'manager'],
      icon: 'edit'
    },
    children: [
      {
        path: 'index',
        component: resolve => void(require(['@/views/infoStatistics/index'], resolve)),
        name: 'infoStatistics',
        meta: { title: 'InfoStatistics' }
      },
    ]
}
export default infoStatisticsRouter