<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const canonicalUrl = computed(() => {
  const base = String(config.public.siteUrl)
  return new URL(route.path, base).toString()
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [{ property: 'og:url', content: canonicalUrl }],
})

defineOgImage('OgDefault', {
  title: 'Slip',
  description: 'L\'app italiana che decifra la busta paga in 30 secondi.',
  badge: 'App busta paga AI',
})
</script>

<template>
  <div class="min-h-dvh bg-base-100 text-base-content">
    <SkipLink />
    <SiteNav />

    <main id="content">
      <slot />
    </main>

    <SiteFooter />
    <BackToTop />
  </div>
</template>
