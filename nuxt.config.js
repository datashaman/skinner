import path from 'path'

const sourceVersion = (process.env.SOURCE_VERSION || 'dev').substr(0, 16)

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'bg-black text-white',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/localStorage',
      ssr: false,
    },
    {
      src: '~/plugins/thermometer',
    },
    {
      src: '~/plugins/clicks',
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faBrain',
              'faCookie',
              'faHeart',
              'faPoo',
              'faTint',
              'faUtensils',
              //
            ],
          },
        ],
      },
    ],
    [
      'nuxt-purgecss',
      {
        whitelist: ['fa'],
        whitelistPatterns: [/^fa-/, /-fa$/],
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  purgeCss: {
    mode: 'postcss',
  },
  env: {
    sourceVersion,
  },
}
