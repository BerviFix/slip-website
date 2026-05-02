<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-base-100 pt-24 pb-12 px-6 border-t border-base-200">
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-12">
        <div class="inline-flex items-center justify-center p-3 mb-6 bg-base-200 rounded-2xl shadow-sm">
          <img src="/images/app-icon-round.png" alt="Slip" class="w-12 h-12 rounded-xl" />
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-base-content mb-4 tracking-tight">
          La busta paga non deve far paura.
        </h2>
        <p class="text-base-content/70 max-w-lg mx-auto">
          Progettato per darti la chiarezza che meriti.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 text-sm font-medium text-base-content/70">
        <NuxtLink to="/privacy" class="hover:text-primary transition-colors">Privacy Policy</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-primary transition-colors">Termini e Condizioni</NuxtLink>
        <a href="mailto:support@slip.app" class="hover:text-primary transition-colors">Supporto</a>
      </div>

      <div class="flex flex-col items-center justify-center gap-4 text-base-content/50 text-sm">
        <span>© {{ currentYear }} Slip. Tutti i diritti riservati.</span>

        <a href="https://x.com/BerviFix" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
          Made with ♥️ by Sgravati from Italy
        </a>
      </div>

      <div class="mt-8 text-xs text-base-content/40">
         Non siamo commercialisti, ma ci proviamo forte.
      </div>
    </div>
  </footer>
</template>
