// https://nuxt.com/docs/api/configuration/nuxt-config
import { themeInlineScript } from './app/utils/theme'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://slip.app'
const isPreview = process.env.VERCEL_ENV === 'preview' || process.env.NUXT_PUBLIC_INDEXABLE === 'false'

const appleAppId = '6748338637'
const playPackage = 'com.bervifix.slip'
const appStoreUrl = `https://apps.apple.com/it/app/slip/id${appleAppId}`
const playStoreUrl = `https://play.google.com/store/apps/details?id=${playPackage}`

export default defineNuxtConfig({
  compatibilityDate: '2025-10-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl,
      store: {
        appleAppId,
        playPackage,
        appStoreUrl,
        playStoreUrl,
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-llms',
  ],

  fonts: {
    families: [
      {
        name: 'Inter',
        src: '/fonts/InterVariable.woff2',
        weight: '100 900',
        style: 'normal',
        display: 'swap',
      },
    ],
    defaults: {
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin', 'latin-ext'],
    },
  },

  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/sections', pathPrefix: false },
  ],

  llms: {
    domain: siteUrl,
    title: 'Slip — App italiana per la busta paga',
    description: 'Slip è l\'app mobile italiana (iOS + Android) che usa l\'AI per leggere e spiegare la busta paga in italiano semplice. Carichi il cedolino, ottieni un riepilogo chiaro voce per voce. Gratis, GDPR compliant.',
    sections: [
      {
        title: 'Cos\'è Slip',
        description: 'App mobile italiana (iOS + Android) che usa l\'AI per spiegare la busta paga in italiano semplice. Carichi PDF/foto del cedolino, ottieni un riepilogo voce per voce. Gratis, dati cifrati e anonimizzati secondo GDPR.',
      },
      {
        title: 'FAQ Slip',
        description: 'Domande frequenti sull\'app: gratuità, privacy dei dati, account, compatibilità con i principali CCNL italiani.',
        links: [
          { title: 'FAQ', href: '/#faq', description: 'Quattro domande sull\'utilizzo di Slip.' },
        ],
      },
      {
        title: 'Pagine principali',
        links: [
          { title: 'Homepage', href: '/', description: 'Cosa fa Slip e come funziona.' },
          { title: 'Privacy', href: '/privacy', description: 'Trattamento dei dati e privacy policy.' },
          { title: 'Termini di servizio', href: '/terms', description: 'Condizioni d\'uso dell\'app.' },
        ],
      },
    ],
    notes: [
      'Slip è uno strumento informativo. Non sostituisce il parere di un commercialista o consulente del lavoro abilitato.',
    ],
  },

  site: {
    url: siteUrl,
    name: 'Slip',
    description: 'L\'app italiana che legge la tua busta paga con l\'AI e te la spiega in italiano semplice. Gratis su iOS e Android.',
    defaultLocale: 'it',
    indexable: !isPreview,
  },

  sitemap: {
    xsl: false,
    cacheMaxAgeSeconds: 0,
    autoLastmod: true,
    sources: [],
  },

  robots: {
    sitemap: [`${siteUrl}/sitemap.xml`],
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'cohere-ai',
          'Meta-ExternalAgent',
          'DuckAssistBot',
          'MistralAI-User',
        ],
        allow: ['/'],
      },
    ],
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: 'OgDefault',
      width: 1200,
      height: 630,
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
    },
    fonts: ['Inter:400', 'Inter:600', 'Inter:800'],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'BerviFix',
      alternateName: 'Slip',
      logo: `${siteUrl}/images/app-icon-round.png`,
      sameAs: [
        'https://x.com/BerviFix',
        appStoreUrl,
        playStoreUrl,
      ],
    },
  },

  linkChecker: {
    enabled: true,
    failOnError: false,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'it',
      },
      title: 'Slip — Capisci la tua busta paga (senza diventare commercialista)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: 'L\'app italiana che legge la tua busta paga con l\'AI e te la spiega in italiano semplice. Carichi il cedolino, capisci dove finiscono i tuoi soldi. Gratis su iOS e Android.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#fbfcff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0b1220', media: '(prefers-color-scheme: dark)' },
        // Geo
        { name: 'geo.region', content: 'IT' },
        { name: 'geo.placename', content: 'Italia' },
        { name: 'geo.position', content: '41.8719;12.5674' },
        { name: 'ICBM', content: '41.8719, 12.5674' },
        { name: 'language', content: 'Italian' },
        { 'http-equiv': 'content-language', content: 'it-IT' },
        // Open Graph locale (global default)
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:site_name', content: 'Slip' },
        // Twitter
        { name: 'twitter:site', content: '@BerviFix' },
        // SEO Keywords (legacy ma utili per alcuni motori)
        { name: 'keywords', content: 'app busta paga, app cedolino, app cedolino italiano, leggere busta paga, capire busta paga, app stipendio Italia, AI busta paga, lettura busta paga AI, archivio cedolini, busta paga PDF' },
        // App Links
        { name: 'apple-itunes-app', content: `app-id=${appleAppId}` },
        { name: 'google-play-app', content: `app-id=${playPackage}` },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/images/app-icon.png' },
      ],
      script: [
        {
          id: 'slip-theme-init',
          type: 'text/javascript',
          innerHTML: themeInlineScript,
        },
      ],
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
  },

  nitro: {
    preset: 'vercel-static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },
})
