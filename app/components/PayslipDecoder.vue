<script setup lang="ts">
type Term = {
  key: string
  label: string
  short: string
  long: string
}

const terms: Term[] = [
  {
    key: 'irpef',
    label: 'IRPEF',
    short: 'Imposta sul reddito.',
    long: 'È l’imposta sul reddito delle persone fisiche. In busta paga la vedi come trattenuta: riduce il netto.',
  },
  {
    key: 'inps',
    label: 'INPS',
    short: 'Contributi previdenziali.',
    long: 'Sono contributi per pensione e tutele. Non è “una tassa in più”: finanzia la tua posizione previdenziale.',
  },
  {
    key: 'tfr',
    label: 'TFR',
    short: 'Accantonamento mensile.',
    long: 'È una quota del tuo stipendio che viene accantonata ogni mese e maturata nel tempo.',
  },
  {
    key: 'detrazioni',
    label: 'Detrazioni',
    short: 'Riduzioni delle imposte.',
    long: 'Sono sconti fiscali che riducono l’IRPEF (ad esempio lavoro dipendente o familiari a carico).',
  },
  {
    key: 'ferie',
    label: 'Ferie residue',
    short: 'Giorni disponibili.',
    long: 'Mostra quante ferie hai maturato, usato e quante te ne restano.',
  },
  {
    key: 'netto',
    label: 'Netto',
    short: 'Quanto ti entra davvero.',
    long: 'È lo stipendio che ricevi sul conto dopo trattenute e contributi.',
  },
]

const activeKey = ref(terms[0]!.key)
const active = computed(() => terms.find(t => t.key === activeKey.value) ?? terms[0]!)
</script>

<template>
  <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
    <div class="slip-surface rounded-3xl p-6 md:p-8">
      <div class="flex items-center gap-3">
        <div class="rounded-2xl bg-primary/10 p-3 text-primary">
          <UiIcon name="sparkles" class="h-6 w-6" />
        </div>
        <div>
          <div class="text-sm text-base-content/60">Provalo qui</div>
          <div class="text-lg font-semibold tracking-tight">Decodifica le sigle più comuni</div>
        </div>
      </div>

      <p class="mt-4 text-base-content/70">
        Tocca una sigla: ti mostro come Slip la “traduce” in un linguaggio comprensibile.
        È lo stesso stile che trovi nell’app.
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <button
          v-for="term in terms"
          :key="term.key"
          type="button"
          class="slip-chip"
          :aria-pressed="activeKey === term.key"
          @click="activeKey = term.key"
        >
          {{ term.label }}
        </button>
      </div>

      <div class="mt-6 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
        <div class="text-xs font-medium text-base-content/60">Spiegazione</div>
        <div class="mt-2 text-xl font-semibold tracking-tight">{{ active.label }}</div>
        <div class="mt-3 text-base-content/70">{{ active.long }}</div>
      </div>
    </div>

    <div class="relative">
      <div class="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
      <div class="rounded-[2.5rem] border border-base-200/70 bg-base-100/60 p-6 shadow-soft-lg backdrop-blur-xl md:p-8">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold tracking-tight">Esempio (semplificato)</div>
            <div class="mt-1 text-xs text-base-content/60">Estratto busta paga — per capire “cosa conta”</div>
          </div>
          <div class="rounded-2xl bg-base-100 px-3 py-2 text-xs text-base-content/70 shadow-sm">
            Netto: <span class="font-semibold text-base-content">1.642,10 €</span>
          </div>
        </div>

        <div class="mt-6 grid gap-3">
          <div class="flex items-center justify-between rounded-2xl bg-base-100 px-4 py-3 shadow-sm">
            <span class="text-sm font-medium">Retribuzione lorda</span>
            <span class="text-sm text-base-content/70">2.180,00 €</span>
          </div>
          <div class="flex items-center justify-between rounded-2xl bg-base-100 px-4 py-3 shadow-sm">
            <span class="text-sm font-medium">INPS</span>
            <span class="text-sm text-base-content/70">- 198,20 €</span>
          </div>
          <div class="flex items-center justify-between rounded-2xl bg-base-100 px-4 py-3 shadow-sm">
            <span class="text-sm font-medium">IRPEF</span>
            <span class="text-sm text-base-content/70">- 242,10 €</span>
          </div>
          <div class="flex items-center justify-between rounded-2xl bg-base-100 px-4 py-3 shadow-sm">
            <span class="text-sm font-medium">Detrazioni</span>
            <span class="text-sm text-base-content/70">+ 54,40 €</span>
          </div>
          <div class="flex items-center justify-between rounded-2xl bg-base-100 px-4 py-3 shadow-sm">
            <span class="text-sm font-medium">TFR (maturato)</span>
            <span class="text-sm text-base-content/70">+ 142,00 €</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <div class="rounded-2xl border border-base-200 bg-base-100/70 p-4">
            <div class="text-xs text-base-content/60">Ferie residue</div>
            <div class="mt-1 text-lg font-semibold">7,5 gg</div>
          </div>
          <div class="rounded-2xl border border-base-200 bg-base-100/70 p-4">
            <div class="text-xs text-base-content/60">TFR totale</div>
            <div class="mt-1 text-lg font-semibold">3.184 €</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

