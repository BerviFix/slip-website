<script setup lang="ts">
import { irpefBrackets2026, grossToNetExamples2026 } from '~/content/tables'
import { answers } from '~/content/answers'

const title = 'Scaglioni IRPEF 2026 e calcolo netto da lordo — tabelle aggiornate'
const description = 'Scaglioni IRPEF 2026 in vigore in Italia: 23% fino a 28.000€, 35% fino a 50.000€, 43% oltre. Esempi di calcolo lordo→netto annuo e mensile per RAL da 20k a 60k. Tabella e spiegazione.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  ogLocale: 'it_IT',
})

defineOgImage('OgDefault', {
  title: 'Scaglioni IRPEF 2026',
  description: '23% fino a 28k · 35% fino a 50k · 43% oltre. Calcolo netto da lordo.',
  badge: 'Tabelle · Slip',
})

const relevantAnswers = answers.filter(a => ['cose-irpef', 'calcolo-netto-da-lordo', 'cose-ral'].includes(a.id))

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
      { name: 'Scaglioni IRPEF 2026', item: '/scaglioni-irpef-2026' },
    ],
  }),
  ...relevantAnswers.map(a => defineQuestion({
    name: a.heading,
    acceptedAnswer: a.answer,
    inLanguage: 'it-IT',
  })),
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
            <li aria-current="page" class="text-base-content/80">Scaglioni IRPEF 2026</li>
          </ol>
        </nav>

        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content mb-4">
          Scaglioni IRPEF 2026
        </h1>
        <p class="text-lg text-base-content/75 max-w-2xl leading-relaxed">
          Aliquote IRPEF 2026 in vigore in Italia, esempi di calcolo lordo→netto e
          riferimenti normativi. Aggiornato a maggio 2026.
        </p>
      </div>
    </section>

    <main class="slip-container max-w-4xl py-12">
      <section class="mb-12">
        <h2 class="text-2xl font-black text-base-content mb-4">Aliquote IRPEF 2026</h2>
        <p class="text-base-content/75 mb-6">{{ irpefBrackets2026.caption }}</p>
        <div class="overflow-x-auto rounded-2xl border border-base-300">
          <table class="w-full text-left">
            <caption class="sr-only">{{ irpefBrackets2026.caption }}</caption>
            <thead class="bg-base-200">
              <tr>
                <th
                  v-for="col in irpefBrackets2026.columns"
                  :key="col.key"
                  scope="col"
                  class="px-5 py-3 text-sm font-bold text-base-content"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in irpefBrackets2026.rows"
                :key="i"
                class="border-t border-base-300"
              >
                <td class="px-5 py-4 text-base-content">{{ row.range }}</td>
                <td class="px-5 py-4 font-bold text-primary">{{ row.rate }}</td>
                <td class="px-5 py-4 text-base-content/80">{{ row.taxOnUpperBound }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-xs text-base-content/55">Fonte: {{ irpefBrackets2026.source }}</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-black text-base-content mb-4">Calcolo lordo→netto: esempi 2026</h2>
        <p class="text-base-content/75 mb-6">{{ grossToNetExamples2026.caption }}</p>
        <div class="overflow-x-auto rounded-2xl border border-base-300">
          <table class="w-full text-left text-sm">
            <caption class="sr-only">{{ grossToNetExamples2026.caption }}</caption>
            <thead class="bg-base-200">
              <tr>
                <th
                  v-for="col in grossToNetExamples2026.columns"
                  :key="col.key"
                  scope="col"
                  class="px-3 py-3 font-bold text-base-content whitespace-nowrap"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in grossToNetExamples2026.rows"
                :key="i"
                class="border-t border-base-300"
              >
                <td class="px-3 py-3 font-bold text-base-content">{{ row.ral }}</td>
                <td class="px-3 py-3 text-base-content/80">{{ row.inps }}</td>
                <td class="px-3 py-3 text-base-content/80">{{ row.imponibileFiscale }}</td>
                <td class="px-3 py-3 text-base-content/80">{{ row.irpefLorda }}</td>
                <td class="px-3 py-3 text-base-content/80">{{ row.addizionali }}</td>
                <td class="px-3 py-3 font-bold text-success">{{ row.nettoAnnuo }}</td>
                <td class="px-3 py-3 font-bold text-success">{{ row.nettoMensile }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="mt-4 space-y-1 text-xs text-base-content/55">
          <li v-for="(note, i) in grossToNetExamples2026.notes" :key="i">· {{ note }}</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-black text-base-content mb-6">Domande frequenti</h2>
        <div class="space-y-4">
          <article
            v-for="a in relevantAnswers"
            :key="a.id"
            :id="a.id"
            class="rounded-2xl bg-base-200 border border-base-300 p-6"
          >
            <h3 class="text-lg font-bold text-base-content mb-2">{{ a.heading }}</h3>
            <p class="text-base-content/80 leading-relaxed text-sm sm:text-base">{{ a.answer }}</p>
            <p v-if="a.citations?.length" class="mt-3 text-xs text-base-content/55 font-mono">
              Fonti: {{ a.citations.join(' · ') }}
            </p>
          </article>
        </div>
      </section>

      <section class="rounded-3xl bg-primary/10 border border-primary/20 p-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-black text-base-content mb-3">
          Calcoli giusti? <span class="text-primary">Verifica con Slip</span>.
        </h2>
        <p class="text-base-content/75 mb-6 max-w-xl mx-auto">
          Carica la tua busta paga e lascia che l'AI confronti netto, lordo e trattenute con
          gli scaglioni reali. Gratis su iOS e Android.
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
