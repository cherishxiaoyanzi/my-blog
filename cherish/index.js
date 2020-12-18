const path = require('path')
module.exports = (opts, ctx) => {
  const { sep } = path
  const { themeConfig, sourceDir } = ctx
  const { baiDu, cdn } = themeConfig
  return {
    name: 'xuzhen',
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js')
    ],
    chainWebpack (config, isServer) {
      config.module
        .rule('less')
        .oneOf('normal')
        .use('less-loader')
        .options({ javascriptEnabled: true })
        .end()
        .end()
        .oneOf('modules')
        .use('less-loader')
        .options({ javascriptEnabled: true })

      if (cdn && process.env.NODE_ENV === 'production') {
        config.output
          .publicPath(cdn)
      }
    },
  }
}