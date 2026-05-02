<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  const redirectLegacyHash = () => {
    const hash = window.location.hash
    if (hash === '#pro' || hash === '#pricing' || hash === '#slip-pro') {
      const target = document.getElementById('download')
      if (target) {
        history.replaceState(null, '', '#download')
        target.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.replace('/#download')
      }
    }
  }
  redirectLegacyHash()
  window.addEventListener('hashchange', redirectLegacyHash)
})
</script>

<template>
  <div class="min-h-dvh">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  @apply bg-base-100 text-base-content transition-colors duration-300 overflow-x-hidden;
}
</style>
