module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ADL Forms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ADL Forms' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?v2' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Amatic+SC:400,700|Open+Sans+Condensed:300,700' },
      { rel: "stylesheet", href: "//use.fontawesome.com/releases/v5.1.0/css/all.css", integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt", crossorigin: "anonymous" }
    ]
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/_override.scss',
    '@/assets/css/_admin.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/chart', ssr: false },
    { src: '~/plugins/hchs-vue-charts', ssr: false }
  ],
  modules: [
    'nuxt-buefy',
  ],
  buefy: { defaultIconPack: 'fas' }
}
