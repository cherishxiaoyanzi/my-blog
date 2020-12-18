<template>
  <a-config-provider>
    <div id="xz">
      <Header/>
      <component :is="layout" />
      <Footer />
    </div>
  </a-config-provider>
</template>
<script>
import enGB from 'ant-design-vue/lib/locale-provider/en_GB'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Home from '../components/home'
import Other from '../components/other'
import Page404 from '../components/404'
import Detail from '../components/detail'
import List from '../components/list'
export default {
  name: 'xz',
  components: {
    Header,
    Footer,
    About,
    Home,
    Other,
    Page404,
    Detail,
    List
  },
  data () {
    return {
      curtain: false,
      dark: false
    }
  },
  mounted(){
    console.log('this.$site', this.$site)
    console.log('this.$routePage', this.$routePage)
    console.log('this.$themeConfig', this.$themeConfig)
  },
  computed: {
    locale () {
      if (this.$lang === 'zh-CN') {
        return zhCN
      } else {
        return enGB
      }
    },
    layout () {
      if (this.$routePage === '/') {
        return Home
      } else if (this.$routePage === 'html' || this.$routePage === 'css' || 
      this.$routePage === 'javascript' || this.$routePage === 'tea' || this.$routePage === 'guzheng' || this.$routePage === 'plant') {
        return List
      } else if (this.$routePage === 'article') {
        return 'Detail'
      } else if (this.$routePage === 'posts' && !this.$routePost) {
        return 'Posts'
      } else if (this.$routePage === 'tags') {
        if (!this.$routePost) {
          return 'Tags'
        } else if (Object.keys(this.$tags).includes(this.$routePost)) {
          return 'Tag'
        }
      } else if (['about', 'other'].includes(this.$routePost)) {
        return `${this.$routePost.charAt(0).toUpperCase()}${this.$routePost.slice(1)}`
      } else if (Object.keys(this.$categories).includes(this.$routePage)) {
        if (this.$routePost) {
          if (this.$page && this.$page.password) {
            return 'Password'
          } else {
            return 'Detail'
          }
        } else {
          return 'List'
        }
      }
      return 'Page404'
    }
  },
}
</script>
<style scoped>
  #xz{
    margin: 0 20px;
  }
</style>