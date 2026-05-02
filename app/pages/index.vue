<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { faqs } from '~/content/faq'
import { howToReadPayslip } from '~/content/howto'

gsap.registerPlugin(ScrollTrigger)

const { appStoreUrl, playStoreUrl } = useStoreLinks()

useSeoMeta({
  title: 'Slip — App AI per leggere e capire la busta paga',
  ogTitle: 'Slip — App AI per leggere e capire la busta paga',
  description: 'L\'app italiana che legge la busta paga con l\'AI e te la spiega in italiano semplice: netto, lordo, IRPEF, INPS, TFR, ferie. Gratis su iOS e Android.',
  ogDescription: 'L\'app italiana che legge la busta paga con l\'AI e te la spiega in italiano semplice: netto, lordo, IRPEF, INPS, TFR, ferie. Gratis su iOS e Android.',
  twitterCard: 'summary_large_image',
  ogLocale: 'it_IT',
})

useSchemaOrg([
  defineWebSite({
    name: 'Slip',
    alternateName: 'Slip — App busta paga',
    inLanguage: 'it-IT',
  }),
  defineWebPage({
    '@type': ['WebPage', 'FAQPage'],
    name: 'Slip — Capisci la tua busta paga (senza diventare commercialista)',
    inLanguage: 'it-IT',
  }),
  defineSoftwareApp({
    '@type': 'MobileApplication',
    name: 'Slip',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'FinanceApplication',
    description: 'App italiana che usa l\'AI per leggere e spiegare la busta paga in italiano semplice. Carichi il cedolino, ottieni un riepilogo chiaro voce per voce.',
    inLanguage: 'it-IT',
    countriesSupported: 'IT',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    downloadUrl: [appStoreUrl, playStoreUrl],
    featureList: [
      'Spiegazione AI della busta paga',
      'Riepilogo netto/lordo in italiano semplice',
      'Storico annuale e dashboard',
      'Archiviazione sicura, GDPR compliant',
    ],
  }),
  ...faqs.map(f => defineQuestion({
    name: f.question,
    acceptedAnswer: f.answer,
    inLanguage: 'it-IT',
  })),
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
])

const heroRoot = ref<HTMLElement | null>(null)
let gsapCtx: gsap.Context | null = null

onMounted(() => {
  if (!import.meta.client) return

  const mm = gsap.matchMedia()

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsapCtx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-btns', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.6')
        .from('.hero-mockup', { y: 60, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.8')

      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none reverse' },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      gsap.from('.bento-item', {
        scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })
    })
  })

  onBeforeUnmount(() => {
    gsapCtx?.revert()
    gsapCtx = null
    mm.revert()
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
})

const bentoItems = [
  {
    title: 'Traduzione umana',
    desc: 'L\'AI legge il tuo cedolino e te lo spiega voce per voce. Senza codici, sigle o panico.',
    icon: 'sparkles',
    colSpan: 'col-span-1 md:col-span-2',
    bg: 'bg-primary/10 text-primary',
  },
  {
    title: 'Privacy by design',
    desc: 'Crittografia end-to-end. I tuoi dati anonimizzati, mai sui server di terze parti.',
    icon: 'shield',
    colSpan: 'col-span-1',
    bg: 'bg-warning/10 text-warning',
  },
  {
    title: 'Sicurezza GDPR',
    desc: 'Dati cifrati e anonimizzati. Mai venduti, mai condivisi.',
    icon: 'shield',
    colSpan: 'col-span-1',
    bg: 'bg-success/10 text-success',
  },
  {
    title: 'Dashboard completa',
    desc: 'TFR, ferie, ROL, tredicesima. L\'andamento del netto mese per mese, senza Excel.',
    icon: 'chart',
    colSpan: 'col-span-1 md:col-span-2',
    bg: 'bg-accent/10 text-accent',
  },
]
</script>

<template>
  <div ref="heroRoot" class="bg-base-100 text-base-content transition-colors duration-300 font-sans selection:bg-primary/20 selection:text-primary">

    <!-- HERO -->
    <section id="hero" class="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div class="absolute top-0 inset-x-0 h-[700px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(47,111,229,0.14),rgba(0,0,0,0))] pointer-events-none" />

      <div class="slip-container relative z-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div class="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div class="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbbf24] text-[#1a1d23] text-sm font-bold mb-6 shadow-md hover:scale-105 transition-transform cursor-default rotate-[-1deg]">
              <UiIcon name="bolt" class="w-4 h-4" />
              <span>Leggere la busta paga? Un gioco da ragazzi.</span>
            </div>

            <h1 class="hero-title text-[2.2rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.95] font-black tracking-tight text-base-content mb-6">
              Capisci la tua
              <span class="relative inline-block">
                <span class="text-primary">busta paga</span>
                <svg class="absolute left-0 -bottom-2 w-full h-3 text-primary/40" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 Q 50 2, 100 6 T 198 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
              </span>
              in 30&nbsp;secondi.
            </h1>

            <p class="hero-desc text-lg sm:text-xl text-base-content/70 mb-8 leading-relaxed text-pretty">
              Senza chiamare tuo cugino commercialista.<br class="hidden sm:block">
              Slip legge il cedolino con l'AI e te lo spiega in italiano:
              <strong class="text-base-content">netto, lordo, IRPEF, TFR, ferie</strong>. Tutto chiaro, finalmente.
            </p>

            <p class="text-sm text-base-content/55 italic mb-6 text-pretty">
              Slip ti aiuta a leggere la busta paga, non a calcolarla. Per questioni fiscali consulta il commercialista.
            </p>

            <div class="hero-btns flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start" id="download">
              <StoreButtons size="lg" />
            </div>

            <div class="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-base-content/60">
              <span>Gratis · iOS e Android</span>
            </div>
          </div>

          <!-- HERO MOCKUP -->
          <div class="hero-mockup relative h-[500px] sm:h-[600px] lg:h-[680px] flex items-center justify-center mt-4 lg:mt-0">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] bg-gradient-to-tr from-primary/20 via-secondary/15 to-accent/20 rounded-full blur-3xl animate-pulse" />

            <!-- Phone with real screenshot -->
            <div class="relative z-10 w-[260px] sm:w-[300px] aspect-[9/19.5] rounded-[3rem] bg-neutral p-2 shadow-2xl border-[3px] border-neutral rotate-[-4deg] hover:rotate-0 transition-transform duration-700">
              <NuxtImg
                src="/images/screens/dashboard.png"
                alt="Slip — dashboard busta paga con netto, ferie, ROL e TFR"
                width="600"
                height="1300"
                format="webp"
                quality="85"
                loading="eager"
                fetchpriority="high"
                class="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>

            <!-- Floating chip behind -->
            <div class="absolute -z-0 top-12 right-2 sm:right-8 lg:right-0 rotate-[8deg] bg-base-100 shadow-xl rounded-2xl px-4 py-3 border border-base-200 hidden sm:block">
              <div class="text-[11px] font-bold uppercase tracking-wider text-base-content/50 mb-1">Netto Ottobre</div>
              <div class="text-2xl font-black text-base-content">€ 1.842,00</div>
              <div class="text-xs text-success font-semibold mt-1">+ 47€ vs settembre</div>
            </div>

            <div class="absolute -z-0 bottom-16 left-2 sm:left-8 lg:left-0 -rotate-[6deg] bg-base-100 shadow-xl rounded-2xl px-4 py-3 border border-base-200 hidden sm:flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <UiIcon name="sparkles" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-base-content/50">Riepilogo AI</div>
                <div class="text-sm font-semibold text-base-content">"Ah, ecco perché."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <MarqueeStrip />

    <!-- SCREENSHOT SHOWCASE -->
    <section id="showcase" class="py-20 sm:py-28 bg-base-200 reveal-section">
      <div class="slip-container">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
            Lo stipendio, finalmente in italiano
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content tracking-tight mb-5">
            Dalle voci incomprensibili<br>
            <span class="text-primary">all'"ah, ecco perché"</span>.
          </h2>
          <p class="text-lg text-base-content/70">
            Tre tap, e quel PDF di otto pagine pieno di sigle diventa qualcosa che capisci.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <article class="group relative bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-6 sm:p-8 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div class="text-primary-content mb-6">
              <h3 class="text-2xl sm:text-3xl font-black mb-2 leading-tight">Comprendi<br>il tuo stipendio</h3>
              <p class="text-primary-content/80 text-sm">Dashboard con tutti i numeri che contano.</p>
            </div>
            <div class="relative aspect-[9/14] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-primary-content/20">
              <NuxtImg
                src="/images/screens/dashboard.png"
                alt="Schermata dashboard Slip — netto totale, lordo totale, ferie residue, TFR accumulato"
                width="500"
                height="780"
                format="webp"
                quality="80"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
          </article>

          <article class="group relative bg-gradient-to-br from-accent to-accent/80 rounded-[2.5rem] p-6 sm:p-8 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div class="text-accent-content mb-6">
              <h3 class="text-2xl sm:text-3xl font-black mb-2 leading-tight">L'AI<br>a tua disposizione</h3>
              <p class="text-accent-content/80 text-sm">Riepilogo intelligente di ogni cedolino.</p>
            </div>
            <div class="relative aspect-[9/14] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-accent-content/20">
              <NuxtImg
                src="/images/screens/ai.png"
                alt="Schermata riepilogo AI — spiegazione automatica della busta paga in italiano"
                width="500"
                height="780"
                format="webp"
                quality="80"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
          </article>

          <article class="group relative bg-gradient-to-br from-neutral to-neutral/80 rounded-[2.5rem] p-6 sm:p-8 overflow-hidden hover:scale-[1.02] transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <div class="text-neutral-content mb-6">
              <h3 class="text-2xl sm:text-3xl font-black mb-2 leading-tight">Analisi<br>dati nel tempo</h3>
              <p class="text-neutral-content/70 text-sm">Grafici dell'andamento netto e lordo.</p>
            </div>
            <div class="relative aspect-[9/14] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-neutral-content/20">
              <NuxtImg
                src="/images/screens/charts.png"
                alt="Schermata grafici Slip — andamento mensile lordo e netto, TFR accumulato"
                width="500"
                height="780"
                format="webp"
                quality="80"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BENTO FEATURES -->
    <section id="features" class="py-20 sm:py-28 bg-base-100">
      <div class="slip-container">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-section">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content mb-5 tracking-tight">
            Quattro cose. <span class="text-primary">Fatte bene.</span>
          </h2>
          <p class="text-lg text-base-content/70">
            Niente feature inutili per gonfiare la pagina. Solo ciò che serve davvero.
          </p>
        </div>

        <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <div
            v-for="(item, i) in bentoItems"
            :key="i"
            :class="[item.colSpan, item.bg, 'bento-item rounded-[2rem] p-7 lg:p-9 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300']"
          >
            <div class="relative z-10 h-full flex flex-col justify-between min-h-[180px]">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-base-100/70 backdrop-blur-md flex items-center justify-center mb-5">
                  <UiIcon :name="item.icon" class="w-6 h-6" />
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-2.5 text-base-content">{{ item.title }}</h3>
                <p class="text-base-content/75 text-base sm:text-lg leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS (3 step product flow) -->
    <section id="how-it-works" class="py-20 sm:py-28 bg-base-200 reveal-section">
      <div class="slip-container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="mb-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-300 text-base-content/80 text-xs font-bold uppercase tracking-wider mb-4">
                Come funziona Slip
              </div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content mb-4 tracking-tight">
                Tre tap. Zero panico.
              </h2>
              <p class="text-lg text-base-content/70">
                Il tempo di scaldare il caffè e hai già capito tutto.
              </p>
            </div>
            <ol class="space-y-8">
              <li class="flex gap-5 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">1</div>
                <div class="pt-1">
                  <h3 class="text-xl font-bold text-base-content mb-1.5">Scarica Slip</h3>
                  <p class="text-base-content/70 leading-relaxed">Gratis su iOS e Android. Login con Google. Niente form da compilare.</p>
                </div>
              </li>
              <li class="flex gap-5 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">2</div>
                <div class="pt-1">
                  <h3 class="text-xl font-bold text-base-content mb-1.5">Carica il cedolino</h3>
                  <p class="text-base-content/70 leading-relaxed">PDF dell'azienda, scansione o anche solo una foto al volo. Vale tutto.</p>
                </div>
              </li>
              <li class="flex gap-5 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">3</div>
                <div class="pt-1">
                  <h3 class="text-xl font-bold text-base-content mb-1.5">L'AI te la spiega</h3>
                  <p class="text-base-content/70 leading-relaxed">Riepilogo in italiano. Ogni voce, ogni trattenuta, ogni "ma perché?". Fatto.</p>
                </div>
              </li>
            </ol>
          </div>

          <div class="order-1 lg:order-2 flex justify-center">
            <div class="relative w-full max-w-sm aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-neutral">
              <NuxtImg
                src="/images/screens/details.png"
                alt="Schermata dettaglio busta paga Slip — voci variabili, retribuzione, scatti anzianità"
                width="600"
                height="1066"
                format="webp"
                quality="80"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLOUD -->
    <section class="py-20 sm:py-28 bg-base-200 reveal-section">
      <div class="slip-container text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content mb-4 tracking-tight">
          Casa tua, regole tue.
        </h2>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-12">
          I tuoi dati restano protetti, cifrati e anonimizzati.
          Mai sui server di terze parti. Mai venduti, mai condivisi.
        </p>

        <div class="max-w-2xl mx-auto p-8 rounded-[2rem] bg-base-100 border border-base-300">
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
            <UiIcon name="shield" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-base-content">Sicurezza GDPR by design</h3>
          <p class="text-sm text-base-content/70">
            I tuoi dati sono cifrati end-to-end e anonimizzati. Architettura privacy by design,
            sicurezza enterprise per i dati personali. Tu hai le chiavi, sempre.
          </p>
        </div>
      </div>
    </section>

    <FaqSection />

    <!-- RISORSE / INTERNAL LINKS -->
    <section id="risorse" class="py-20 sm:py-24 bg-base-200 reveal-section">
      <div class="slip-container max-w-5xl">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Risorse busta paga
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content tracking-tight mb-4">
            Vuoi capirne di più?
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            Guide pratiche, glossario e tabelle aggiornate per padroneggiare il cedolino italiano.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <NuxtLink to="/come-leggere-busta-paga" class="group rounded-3xl bg-base-100 border border-base-300 p-7 hover:border-primary transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <UiIcon name="sparkles" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold text-base-content mb-2">Come si legge la busta paga</h3>
            <p class="text-sm text-base-content/70 leading-relaxed mb-3">Guida in 4 passi: testa, corpo, piede, totali. Cosa cercare in ogni parte del cedolino.</p>
            <span class="text-sm font-bold text-primary group-hover:underline">Leggi la guida →</span>
          </NuxtLink>
          <NuxtLink to="/glossario" class="group rounded-3xl bg-base-100 border border-base-300 p-7 hover:border-primary transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <UiIcon name="chart" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="text-xl font-bold text-base-content mb-2">Glossario busta paga</h3>
            <p class="text-sm text-base-content/70 leading-relaxed mb-3">IRPEF, INPS, TFR, RAL, CCNL, ROL, conguaglio: tutti i termini spiegati in italiano semplice.</p>
            <span class="text-sm font-bold text-primary group-hover:underline">Apri il glossario →</span>
          </NuxtLink>
          <NuxtLink to="/scaglioni-irpef-2026" class="group rounded-3xl bg-base-100 border border-base-300 p-7 hover:border-primary transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center mb-5">
              <UiIcon name="bolt" class="w-6 h-6 text-success" />
            </div>
            <h3 class="text-xl font-bold text-base-content mb-2">Scaglioni IRPEF 2026</h3>
            <p class="text-sm text-base-content/70 leading-relaxed mb-3">Aliquote IRPEF aggiornate e simulazioni lordo→netto per RAL da 20k a 60k euro.</p>
            <span class="text-sm font-bold text-primary group-hover:underline">Vedi le tabelle →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-accent text-primary-content relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
      <div class="slip-container relative z-10 text-center max-w-2xl">
        <h2 class="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
          Smetti di fingere<br>di aver capito.
        </h2>
        <p class="text-lg sm:text-xl text-primary-content/80 mb-10">
          Scarica Slip. Carica una busta paga. Capisci. Fine.
        </p>
        <div class="flex justify-center">
          <StoreButtons size="lg" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.slip-container {
  @apply max-w-7xl mx-auto px-5 sm:px-6 lg:px-8;
}
</style>
