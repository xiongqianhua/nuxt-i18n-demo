/*
 * @Author: qianhua.xiong
 */
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '国际官网',
      meta: [
        { name: 'description', content: '国际官网' }
      ],
      bodyAttrs: {
        class: 'dark'
      },
      link: [
        {
          rel: 'preconnect',
          href: ''
        },
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // 默认值
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // 默认值
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français'
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文'
      }
    ],
    defaultLocale: 'en',
  },
})
