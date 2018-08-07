const Index = r => require(['../views/index'], r)
const error = r => require(['../views/error'], r)
const SelectExchange = r => require(['../components/SelectExchange'], r)
const BusCode = r => require(['../components/BusCode'], r)
const Signup = r => require(['../components/Signup'], r)
const Preheat = r => require(['../components/Preheat'], r)
const ConfirmBan = r => require(['../components/ConfirmBan'], r)

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
  path: '/ConfirmBan',
  component: ConfirmBan,
  name: 'Preheat',
  meta: {
    title: 'confirm'
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
