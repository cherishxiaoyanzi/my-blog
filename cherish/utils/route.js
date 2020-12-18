import GlobalLayout from '../layouts/GlobalLayout'
const install = (Vue, { router }) => {
  let routes = []
  routes.push({
    path:'/html',
    component:GlobalLayout
  },
  {
    path:'/css',
    component:GlobalLayout
  },
  {
    path:'/javascript',
    component:GlobalLayout
  })
  router.addRoutes(routes)
  router.beforeEach((to, from, next) => {
    if (typeof window === 'undefined') {
      return next()
    }
    next()
  })
  router.afterEach(() => {
    if (typeof window === 'undefined') return
    window.scrollTo(0, 0)
  })
}
export default { install }