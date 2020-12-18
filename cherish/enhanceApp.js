import routes from '@theme/utils/route'
import Mixin from '@theme/utils/mixin'
import Ant from 'ant-design-vue/es'

import 'ant-design-vue/dist/antd.less'
import '@theme/styles/index.styl'
import Translation from '@theme/plugins/Translation'
import Blog from '@theme/plugins/Blog'


export default ({ Vue, options, router, siteData }) => {
  Vue.use(routes, { router })
  Vue.use(Mixin)
  Vue.use(Ant)
  Vue.use(Translation)
  Vue.use(Blog)
}