<script setup lang="ts">
import { faqs } from '~/content/faq'

const activeId = ref<string | null>(faqs[0]?.id ?? null)

function toggle(id: string) {
  activeId.value = activeId.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="py-20 sm:py-28 bg-base-100">
    <div class="slip-container max-w-3xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/20 text-base-content text-xs font-bold uppercase tracking-wider mb-4">
          FAQ
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content tracking-tight mb-4">
          Le solite domande.<br>
          <span class="text-primary">Risposte secche.</span>
        </h2>
        <p class="text-lg text-base-content/70">
          Tutto quello che vuoi sapere su Slip prima di scaricarla.
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="rounded-2xl bg-base-200 border border-base-300 overflow-hidden"
        >
          <h3>
            <button
              :id="`faq-trigger-${faq.id}`"
              type="button"
              class="faq-trigger w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-base-300/60 transition-colors"
              :aria-expanded="activeId === faq.id"
              :aria-controls="`faq-panel-${faq.id}`"
              @click="toggle(faq.id)"
            >
              <span class="font-bold text-base-content text-base sm:text-lg">{{ faq.question }}</span>
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-base-300 flex items-center justify-center text-base-content/70 transition-transform"
                :class="{ 'rotate-45': activeId === faq.id }"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
          </h3>
          <div
            :id="`faq-panel-${faq.id}`"
            role="region"
            :aria-labelledby="`faq-trigger-${faq.id}`"
            class="faq-panel grid"
            :class="activeId === faq.id ? 'faq-panel-open' : ''"
          >
            <div class="faq-panel-inner">
              <div class="px-5 sm:px-6 pb-5 sm:pb-6 text-base-content/80 leading-relaxed text-sm sm:text-base">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-trigger {
  min-height: 56px;
}

.faq-trigger:focus-visible {
  outline: 2px solid hsl(var(--p));
  outline-offset: 2px;
}

.faq-panel {
  grid-template-rows: 0fr;
  transition: grid-template-rows 250ms ease;
}

.faq-panel-open {
  grid-template-rows: 1fr;
}

.faq-panel-inner {
  overflow: hidden;
  min-height: 0;
}

@media (prefers-reduced-motion: reduce) {
  .faq-panel {
    transition: none;
  }
}
</style>
