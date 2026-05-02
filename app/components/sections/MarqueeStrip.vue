<script setup lang="ts">
const items = [
  'traccia',
  'impara',
  'comprendi',
  'archivia',
  'capisci il netto',
  'AI',
  'gestisci',
]
</script>

<template>
  <section class="py-6 bg-neutral border-y border-neutral overflow-hidden" aria-hidden="true">
    <div class="marquee-track flex gap-10 whitespace-nowrap text-2xl sm:text-3xl font-black text-neutral-content tracking-tight">
      <template v-for="n in 2" :key="n">
        <template v-for="(item, i) in items" :key="`${n}-${i}`">
          <span>{{ item }}</span>
          <span class="text-primary" aria-hidden="true">·</span>
        </template>
      </template>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  width: max-content;
  animation: marquee 30s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
