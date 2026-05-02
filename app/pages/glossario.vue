<script setup lang="ts">
import { glossary } from '~/content/glossary'

const title = 'Glossario busta paga — IRPEF, INPS, TFR, RAL, CCNL spiegati'
const description = 'Glossario delle voci della busta paga italiana: IRPEF, INPS, TFR, RAL, CCNL, ROL, conguaglio, tredicesima, sostituto d\'imposta. Definizioni in italiano semplice con riferimenti normativi.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  ogLocale: 'it_IT',
})

defineOgImage('OgDefault', {
  title: 'Glossario busta paga',
  description: 'IRPEF, INPS, TFR, RAL, CCNL spiegati in italiano semplice.',
  badge: 'Glossario · Slip',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: title,
    description,
    inLanguage: 'it-IT',
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Glossario busta paga', item: '/glossario' },
    ],
  }),
  {
    '@type': 'DefinedTermSet',
    '@id': '#glossario-busta-paga',
    name: 'Glossario delle voci della busta paga italiana',
    inLanguage: 'it-IT',
    hasDefinedTerm: glossary.map(t => ({
      '@type': 'DefinedTerm',
      '@id': `#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: '#glossario-busta-paga',
    })),
  },
])
</script>

<template>
  <div class="bg-base-100">
    <section class="border-b border-base-200/70 bg-base-100 pt-28 pb-12">
      <div class="slip-container max-w-4xl">
        <nav aria-label="Breadcrumb" class="mb-4 text-sm text-base-content/60">
          <ol class="flex items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-primary">Home</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" class="text-base-content/80">Glossario</li>
          </ol>
        </nav>

        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content mb-4">
          Glossario della busta paga
        </h1>
        <p class="text-lg text-base-content/75 max-w-2xl leading-relaxed">
          Tutti i termini tecnici del cedolino italiano spiegati in italiano semplice.
          IRPEF, INPS, TFR, RAL, CCNL, ROL, conguaglio: cosa significano e a cosa servono.
        </p>
      </div>
    </section>

    <main class="slip-container max-w-4xl py-12">
      <div class="grid gap-4 sm:grid-cols-2">
        <article
          v-for="t in glossary"
          :key="t.id"
          :id="t.id"
          class="rounded-2xl bg-base-200 border border-base-300 p-6"
        >
          <h2 class="text-xl font-bold text-base-content mb-2">{{ t.term }}</h2>
          <p class="text-base-content/80 leading-relaxed text-sm sm:text-base">
            {{ t.definition }}
          </p>
          <p v-if="t.legalRef" class="mt-3 text-xs text-base-content/55 font-mono">
            Riferimento: {{ t.legalRef }}
          </p>
        </article>
      </div>

      <section class="mt-16 rounded-3xl bg-primary/10 border border-primary/20 p-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-black text-base-content mb-3">
          Vuoi capire la <span class="text-primary">tua</span> busta paga?
        </h2>
        <p class="text-base-content/75 mb-6 max-w-xl mx-auto">
          Slip legge il cedolino con l'AI e te lo spiega voce per voce, in italiano. Gratis su iOS e Android.
        </p>
        <div class="flex justify-center">
          <StoreButtons size="md" />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.slip-container {
  @apply mx-auto px-5 sm:px-6 lg:px-8;
}
</style>
