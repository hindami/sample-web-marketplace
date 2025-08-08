// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'SampleMall',
  description: 'SampleMall is e-commerce website',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: '',
  github: '',
  ogImageUrl: '',
  generator: '',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [],
    secondary: [
      {
        title: 'Track Order',
        to: '/track-order',
        icon: 'i-ic-outline-my-location',
      },
      {
        title: 'Order History',
        to: '/order-history',
        icon: 'i-ic-baseline-history',
      },
      {
        title: 'Returns',
        to: '/returns',
        icon: 'i-material-symbols-assignment-return-outline-rounded',
      },
      {
        title: 'Delivery Policy',
        to: '/delivery-policy',
        icon: 'i-tabler-truck-return',
      },
      {
        title: 'Contact Us',
        to: '/contact-us',
        icon: 'i-material-symbols-add-call',
      },
      {
        title: 'Help & FAQs',
        to: '/help-faqs',
        icon: 'i-material-symbols-contact-support-outline',
      },
    ],
  },
}
