/*
 * @Author: qianhua.xiong
 */
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh',
    messages: {
      zh:{
        menu: {
            home:'首页',
            product:'产品介绍',
            solutions:'解决方案',
            our:"关于我们",
            ecological:"生态计划"
        },
        flashBase: 'FlashBase',
        flashBot: 'FlashBot',
        flashNet: 'FlashNet'
      },
      en: {
        menu: {
            home:'Home',
            product:'Product',
            solutions:'Solutions',
            our:"About Us",
            ecological:"Ecosystem Approach"
        },
        flashBase: 'FlashBase',
        flashBot: 'FlashBot',
        flashNet: 'FlashNet'
      },
      fr: {
        menu: {
            home:'Page principale',
            product:'Introduction des produits',
            solutions:'Solutions',
            our:"Qui sommes-nous",
            ecological:"Plan écologique"
        },
        flashBase: 'FlashBase',
        flashBot: 'FlashBot',
        flashNet: 'FlashNet'
      }
    }
  }))
  