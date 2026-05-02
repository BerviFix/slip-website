<script setup lang="ts">
import { howToReadPayslip } from '~/content/howto'
import { answers } from '~/content/answers'

const title = 'Come si legge la busta paga in 4 passi — guida 2026'
const description = 'Guida pratica per leggere il cedolino italiano in 4 passi: testa con anagrafica e CCNL, corpo con competenze, piede con trattenute INPS e IRPEF, totali con netto e TFR. Aggiornata 2026.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  ogLocale: 'it_IT',
})

defineOgImage('OgDefault', {
  title: 'Come si legge la busta paga',
  description: 'Guida in 4 passi per capire testa, corpo, piede e totali del cedolino.',
  badge: 'Guida · Slip',
})

const relevantAnswers = answers.filter(a => ['come-leggere-cedolino', 'cose-busta-paga', 'differenza-busta-paga-cedolino', 'calcolo-netto-da-lordo'].includes(a.id))

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
      { name: 'Come leggere la busta paga', item: '/come-leggere-busta-paga' },
    ],
  }),
  defineHowTo({
    name: howToReadPayslip.name,
    description: howToReadPayslip.description,
    totalTime: howToReadPayslip.totalTime,
    inLanguage: 'it-IT',
    step: howToReadPayslip.steps.map(s => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
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
            <li aria-current="page" class="text-base-content/80">Come leggere la busta paga</li>
          </ol>
        </nav>

        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content mb-4">
          Come si legge la busta paga
        </h1>
        <p class="text-lg text-base-content/75 max-w-2xl leading-relaxed">
          Il cedolino italiano si divide in quattro parti. Ti mostriamo cosa cercare in ognuna —
          dalla testa con il CCNL, al netto a pagare in fondo. In cinque minuti.
        </p>
      </div>
    </section>

    <main class="slip-container max-w-4xl py-12">
      <ol class="space-y-8">
        <li
          v-for="(step, i) in howToReadPayslip.steps"
          :key="step.id"
          :id="step.id"
          class="flex gap-5"
        >
          <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-black text-xl shadow-lg">
            {{ i + 1 }}
          </div>
          <div class="pt-1">
            <h2 class="text-2xl font-bold text-base-content mb-2">{{ step.name }}</h2>
            <p class="text-base-content/80 leading-relaxed">{{ step.text }}</p>
          </div>
        </li>
      </ol>

      <section class="mt-16">
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

      <section class="mt-16 rounded-3xl bg-primary/10 border border-primary/20 p-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-black text-base-content mb-3">
          Lascia che lo faccia <span class="text-primary">l'AI</span>.
        </h2>
        <p class="text-base-content/75 mb-6 max-w-xl mx-auto">
          Slip legge il cedolino e te lo spiega voce per voce. Carichi il PDF, ottieni il riepilogo. Gratis.
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
