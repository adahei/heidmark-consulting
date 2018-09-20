module.exports = {
  head: {
    htmlAttrs: {
      lang: 'sv',
      dir: 'ltr'
    },
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Heidmark Consulting",
          "legalName": "Heidmark Consulting AB",
          "url": "https://heidmark.se",
          "logo": "https://heidmark.se/logo_400x400.png",
          "foundingDate": "2018",
          "founders": [
            {
              "@type": "Person",
              "name": "Adam Heidmark"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sörgården 143",
            "addressLocality": "Vallentuna",
            "postalCode": "18638",
            "addressCountry": "Sweden"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "[+4679-096-695]",
            "email": "adam@heidmark.se"
          },
          "sameAs": [
            "https://www.linkedin.com/in/adamheidmark/"
          ]
        }`,
        type: 'application/ld+json'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: 'Heidmark Consulting AB' },
      { name: 'application-name', content: 'Heidmark Consulting AB' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:image', content: 'https://heidmark.se/logo_400x400.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '400' },
      { property: 'og:image:alt', content: 'Heidmark Consulting logo' },
      { property: 'og:locale', content: 'sv_SE' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Heidmark Consulting' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#333333' }
    ]
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-125038088-1'
    }]
  ],
  loading: '~/components/Loading.vue',
  generate: {
    routes: ['404']
  }
}
