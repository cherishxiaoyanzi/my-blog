const links = require('./links')
module.exports = {
  lang: 'zh-CN',
  author: 'cherish',
  authorLink: 'https://github.com/cherish',
  avatar: '',
  social: {
    github: 'https://github.com/cnguu/',
  },
  locales: {
    title: 'xuzhen',
    description: 'life'
  },
  sidebarDepth: 2,
  nav: [
    {
      text: '前端编程技术',
      link: '/web/',
      items: [
        {
          text: 'html',
          link: '/html/'
        },
        {
          text: 'css',
          link: '/css/'
        },
        {
          text: 'javascript',
          link: '/javascript/'
        }
      ]
    },
    {
      text: '生活兴趣',
      link: '/life/'
    },
    {
      text: '软件工具',
      link: '/tool/'
    },
    {
      text: '其他',
      link: '/other/'
    },
    {
      text: '关于我',
      link: '/about/'
    }
  ],
  nameplate: {
    title: 'xuzhen'
  },
  buttons: [
    {
      text: '阅读列表',
      link: '/posts/',
      type: 'primary',
    },
    {
      text: '了解作者',
      link: '/about.html',
      type: 'default',
    },
  ],
  footer: {
    one:[
      {
        title: 'cherish',
        subtitle: 'VuePress 主题',
        link: 'https://github.com/cnguu/vuepress-theme-yur',
      },
    ],
    two: [
      {
        title: '本站托管于 GitHub',
        link: 'https://blog.cnguu.cn/',
        type: 'cloud',
        theme: 'filled',
      },
      {
        title: '粤 ICP 备 17075980 号 - 4',
        link: 'http://beian.miit.gov.cn',
        type: 'flag',
        theme: 'filled',
      },
    ],
    three: [
      {
        title: '吐个槽',
        link: 'https://support.qq.com/product/106316',
        type: 'message',
        theme: 'outlined',
      },
      {
        title: '社区交流扣群：686025154',
        link: '//shang.qq.com/wpa/qunwpa?idkey=c6afb0610ede557ae6920fc4cb31d652fde73d703203b261c6d2366544371776',
        type: 'qq',
        theme: 'outlined',
      },
    ],
  },
  post: {
    bubbles: true,
    cover: [
      '/20171231/favicon.ico',
      'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
    ],
    pageSize: 12,
    pageSizeOptions: ['12', '24', '48', '96'],
  },
}