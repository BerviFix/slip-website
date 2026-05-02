<script setup lang="ts">
type ScreenId = 'scan' | 'explain' | 'dashboard'

type Screen = {
  id: ScreenId
  label: string
  title: string
  description: string
  bullets: string[]
}

const screens: Screen[] = [
  {
    id: 'scan',
    label: 'Scansione',
    title: 'Carica un PDF o fai una foto',
    description: 'Slip accetta i formati più comuni e ti guida con feedback chiari.',
    bullets: ['Rilevamento automatico', 'Controlli di qualità', 'Pronto in pochi secondi'],
  },
  {
    id: 'explain',
    label: 'Spiegazione AI',
    title: 'Traduzione umana del cedolino',
    description: 'Sigle, trattenute, contributi: tutto spiegato in modo semplice, senza tecnicismi inutili.',
    bullets: ['Glossario immediato', 'Risposte alle domande', 'Evidenzia cosa conta'],
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    title: 'Trend chiari, scelte migliori',
    description: 'Monitora netto, lordo, TFR e ferie nel tempo con grafici leggibili.',
    bullets: ['Statistiche per anno', 'Confronti mese su mese', 'Panoramica immediata'],
  },
]

const active = ref<ScreenId>('explain')

const activeScreen = computed(() => screens.find(s => s.id === active.value) ?? screens[0]!)
</script>

<template>
  <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
    <div>
      <div class="inline-flex rounded-full border border-base-200 bg-base-100/60 px-3 py-1 text-sm text-base-content/70">
        Un’esperienza progettata per mobile
      </div>

      <h2 class="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        Tutto quello che serve, nel flusso giusto.
      </h2>
      <p class="mt-4 max-w-xl text-base-content/70">
        Ogni schermata riduce il carico mentale: una cosa per volta, feedback immediati, e i dati sempre sotto controllo.
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <button
          v-for="screen in screens"
          :key="screen.id"
          type="button"
          class="slip-chip"
          :aria-pressed="active === screen.id"
          @click="active = screen.id"
        >
          {{ screen.label }}
        </button>
      </div>

      <div class="mt-6 slip-surface rounded-3xl p-6">
        <div class="text-lg font-semibold tracking-tight">{{ activeScreen.title }}</div>
        <p class="mt-2 text-base-content/70">{{ activeScreen.description }}</p>
        <ul class="mt-4 grid gap-2 text-sm text-base-content/80 sm:grid-cols-2">
          <li v-for="b in activeScreen.bullets" :key="b" class="flex items-start gap-2">
            <UiIcon name="check" class="mt-0.5 h-4 w-4 text-primary" />
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="relative">
      <div class="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl" />

      <div class="relative mx-auto w-full max-w-md">
        <div class="rounded-[2.5rem] border border-base-200/70 bg-base-100/70 p-3 shadow-soft-lg backdrop-blur-xl">
          <div class="rounded-[2rem] bg-base-100 shadow-inner">
            <div class="flex items-center justify-between px-5 pt-5">
              <div class="flex items-center gap-2">
                <NuxtImg src="/images/app-icon-round.png" width="32" height="32" densities="x1 x2" alt="" class="h-8 w-8 rounded-xl" />
                <div class="leading-tight">
                  <div class="text-sm font-semibold">Slip</div>
                  <div class="text-xs text-base-content/60">{{ activeScreen.label }}</div>
                </div>
              </div>
              <div class="h-2 w-16 rounded-full bg-base-200" aria-hidden="true" />
            </div>

            <div class="px-5 pb-6 pt-5">
              <transition name="fade" mode="out-in">
                <div :key="active">
                  <div
                    v-if="active === 'scan'"
                    class="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200 p-5"
                  >
                    <div class="flex items-center gap-3">
                      <div class="rounded-2xl bg-primary/10 p-3 text-primary">
                        <UiIcon name="camera" class="h-6 w-6" />
                      </div>
                      <div>
                        <div class="text-sm font-semibold">Carica busta paga</div>
                        <div class="text-xs text-base-content/60">PDF o foto, anche in controluce</div>
                      </div>
                    </div>
                    <div class="mt-5 grid grid-cols-3 gap-3">
                      <div class="h-16 rounded-xl bg-base-100 shadow-sm" />
                      <div class="h-16 rounded-xl bg-base-100 shadow-sm" />
                      <div class="h-16 rounded-xl bg-base-100 shadow-sm" />
                    </div>
                    <div class="mt-4 rounded-xl bg-base-100 px-4 py-3 text-xs text-base-content/70 shadow-sm">
                      Controllo qualità: <span class="font-medium text-success">ok</span> • Testo leggibile
                    </div>
                  </div>

                  <div
                    v-else-if="active === 'explain'"
                    class="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200 p-5"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <div class="text-sm font-semibold">Netto in busta</div>
                        <div class="mt-1 text-3xl font-semibold tracking-tight">1.642,10 €</div>
                        <div class="mt-1 text-xs text-base-content/60">Spiegazione rapida, senza sigle.</div>
                      </div>
                      <div class="rounded-2xl bg-secondary/10 p-3 text-secondary">
                        <UiIcon name="sparkles" class="h-6 w-6" />
                      </div>
                    </div>
                    <div class="mt-5 space-y-3">
                      <div class="rounded-xl bg-base-100 px-4 py-3 text-xs shadow-sm">
                        <div class="font-medium">IRPEF</div>
                        <div class="mt-1 text-base-content/70">Imposta sul reddito: qui è la trattenuta mensile.</div>
                      </div>
                      <div class="rounded-xl bg-base-100 px-4 py-3 text-xs shadow-sm">
                        <div class="font-medium">INPS</div>
                        <div class="mt-1 text-base-content/70">Contributi previdenziali: servono per pensione e tutele.</div>
                      </div>
                      <div class="rounded-xl bg-base-100 px-4 py-3 text-xs shadow-sm">
                        <div class="font-medium">Ferie residue</div>
                        <div class="mt-1 text-base-content/70">Hai ancora 7,5 giorni disponibili.</div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-else
                    class="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200 p-5"
                  >
                    <div class="flex items-center justify-between gap-4">
                      <div>
                        <div class="text-sm font-semibold">Trend stipendio</div>
                        <div class="mt-1 text-xs text-base-content/60">Ultimi 6 mesi</div>
                      </div>
                      <div class="rounded-2xl bg-accent/15 p-3 text-accent">
                        <UiIcon name="chart" class="h-6 w-6" />
                      </div>
                    </div>
                    <div class="mt-5 space-y-3">
                      <div class="h-20 rounded-xl bg-base-100 p-4 shadow-sm">
                        <div class="flex h-full items-end gap-2">
                          <div class="h-10 w-4 rounded-md bg-primary/30" />
                          <div class="h-14 w-4 rounded-md bg-primary/40" />
                          <div class="h-9 w-4 rounded-md bg-primary/25" />
                          <div class="h-16 w-4 rounded-md bg-primary/50" />
                          <div class="h-12 w-4 rounded-md bg-primary/35" />
                          <div class="h-[72px] w-4 rounded-md bg-primary/60" />
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-3">
                        <div class="rounded-xl bg-base-100 px-4 py-3 text-xs shadow-sm">
                          <div class="text-base-content/60">TFR</div>
                          <div class="mt-1 font-semibold">+ 142 €</div>
                        </div>
                        <div class="rounded-xl bg-base-100 px-4 py-3 text-xs shadow-sm">
                          <div class="text-base-content/60">Ferie</div>
                          <div class="mt-1 font-semibold">7,5 gg</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3 text-xs text-base-content/60">
          <div class="rounded-2xl border border-base-200 bg-base-100/60 p-3 text-center backdrop-blur">
            <div class="font-medium text-base-content">AI</div>
            <div class="mt-1">spiega</div>
          </div>
          <div class="rounded-2xl border border-base-200 bg-base-100/60 p-3 text-center backdrop-blur">
            <div class="font-medium text-base-content">Drive</div>
            <div class="mt-1">archivia</div>
          </div>
          <div class="rounded-2xl border border-base-200 bg-base-100/60 p-3 text-center backdrop-blur">
            <div class="font-medium text-base-content">Dash</div>
            <div class="mt-1">mostra</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
