const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#333'
  },

  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview'
  ],
  server: {
    port: 80 // default: 3000
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://39.98.74.198:8080',
      pathRewrite: {
        '^/api': '/service/app'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    styleResources: {
      less: './assets/less/common.less'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // },
      // const sassResourcesLoader = {
      //   loader: 'sass-resources-loader',
      //   options: {
      //     resources: ['./assets/less/common.less'] // 定义less全局变量的位置
      //   }
      // }
      // config.module.rules.forEach(rule => {
      //   if (rule.test.toString() === '/\\.vue$/') {
      //     rule.options.loaders.less.push(sassResourcesLoader)
      //   }
      //   if (rule.test.toString() === '/\\.less$/') {
      //     rule.use.push(sassResourcesLoader)
      //   }
      // })
    }
  }
}
