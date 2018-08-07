const Index = r => require(['../views/index'], r)
const error = r => require(['../views/error'], r)
const SelectExchange = r => require(['../components/SelectExchange'], r)
const BusCode = r => require(['../components/BusCode'], r)
const BusLove = r => require(['../components/BusLove'], r)
const RankingList = r => require(['../components/RankingList'], r)

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
  path: '/SelectExchange',
  component: SelectExchange,
  name: 'SelectExchange'
}, {
  path: '/BusCode',
  component: BusCode,
  name: 'BusCode'
}, {
  path: '/BusLove',
  component: BusLove,
  name: 'BusLove'
}, {
  path: '/RankingList',
  component: RankingList,
  name: 'RankingList',
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
