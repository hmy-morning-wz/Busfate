const Index = r => require(['../views/index'], r)
const error = r => require(['../views/error'], r)
const BusCode = r => require(['../components/BusCode'], r)
const RankingList = r => require(['../components/RankingList'], r)
const Signup = r => require(['../components/Signup'], r)
const Preheat = r => require(['../components/Preheat'], r)
const result = r => require(['../components/result'], r)
const PKResult = r => require(['../components/PKResult'], r)

// 页面路由
const routes = [{
  path: '',
  redirect: {
    name: 'index'
  }
}, {
  path: '/',
  component: Index,
  name: 'index'
}, {
  path: '/BusCode',
  component: BusCode,
  name: 'BusCode'
}, {
  path: '/RankingList',
  component: RankingList,
  name: 'RankingList',
  meta: {
    title: '公交情缘'
  }
}, {
  path: '/Signup',
  component: Signup,
  name: 'Signup',
  meta: {
    title: '活动报名'
  }
}, {
  path: '/Preheat',
  component: Preheat,
  name: 'Preheat',
  meta: {
    title: '活动预热'
  }
}, {
  path: '/result',
  component: result,
  name: 'result',
  meta: {
    title: '公交情缘'
  }
}, {
  path: '/PKResult',
  component: PKResult,
  name: 'PKResult',
  meta: {
    title: '公交情缘'
  }
}]

// 404 页
routes.push({
  path: '*',
  component: error,
  name: 'error',
  meta: {
    title: '众城通'
  }
})

export default routes
