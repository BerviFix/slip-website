<script setup lang="ts">
import { gsap } from 'gsap'

const { theme, toggle } = useThemeMode()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

let mm: gsap.MatchMedia | null = null

onMounted(() => {
  if (!import.meta.client) return
  mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    })
  })

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  mm?.revert()
  mm = null
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToSection = (id: string) => {
  isMobileMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isDark = computed(() => theme.value === 'slipdark')
const themeToggleLabel = computed(() =>
  isDark.value ? 'Passa al tema chiaro' : 'Passa al tema scuro',
)
const mobileMenuLabel = computed(() =>
  isMobileMenuOpen.value ? 'Chiudi menu' : 'Apri menu',
)
</script>

<template>
  <nav class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <div
      class="nav-item pointer-events-auto flex items-center gap-1 p-1.5 pr-2 rounded-full ring-1 transition-all duration-300 relative"
      :class="[
        isScrolled || isMobileMenuOpen
          ? 'bg-base-100/90 backdrop-blur-2xl ring-base-content/10 shadow-xl shadow-base-content/10'
          : 'bg-base-100/60 backdrop-blur-md ring-base-content/5 shadow-lg shadow-base-content/5'
      ]"
    >

      <!-- Logo Home -->
      <button @click="scrollToSection('hero')" class="flex items-center gap-2 pl-3 pr-4 py-2 hover:bg-base-content/5 rounded-full transition-colors group">
        <img src="/favicon.png" alt="Slip" class="w-6 h-6 rounded-lg group-hover:rotate-12 transition-transform" />
        <span class="font-bold text-base-content text-sm tracking-tight">Slip</span>
      </button>

      <!-- Desktop Links -->
      <div class="hidden sm:flex items-center gap-1 mx-2 border-l border-base-content/10 pl-2">
        <button @click="scrollToSection('features')" class="px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-content/5 rounded-full transition-all">
          Funzionalità
        </button>
        <button @click="scrollToSection('how-it-works')" class="px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-content/5 rounded-full transition-all">
          Come funziona
        </button>
        <button @click="scrollToSection('faq')" class="px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-content/5 rounded-full transition-all">
          FAQ
        </button>
      </div>

      <!-- Theme Toggle -->
      <button
        @click="toggle"
        class="p-2.5 text-base-content/60 hover:text-base-content hover:bg-base-content/5 rounded-full transition-colors"
        :aria-label="themeToggleLabel"
        :title="themeToggleLabel"
        type="button"
      >
        <ClientOnly>
          <UiIcon :name="isDark ? 'sun' : 'moon'" class="w-5 h-5" />
          <template #fallback>
            <span class="block w-5 h-5" />
          </template>
        </ClientOnly>
      </button>

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMobileMenu"
        class="sm:hidden p-2.5 text-base-content/60 hover:text-base-content hover:bg-base-content/5 rounded-full transition-colors border-l border-base-content/10 ml-1"
        :aria-label="mobileMenuLabel"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu-dropdown"
        aria-haspopup="menu"
        type="button"
      >
        <UiIcon :name="isMobileMenuOpen ? 'close' : 'menu'" class="w-5 h-5" />
      </button>

      <!-- CTA -->
      <a href="#download" class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 ml-1 bg-neutral text-neutral-content text-sm font-semibold rounded-full hover:scale-105 transition-transform shadow-md">
        Scarica
      </a>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMobileMenuOpen"
      id="mobile-menu-dropdown"
      role="menu"
      class="absolute top-full left-4 right-4 mt-2 p-2 rounded-[2rem] bg-base-100/95 backdrop-blur-2xl ring-1 ring-base-content/10 shadow-2xl pointer-events-auto flex flex-col gap-1 sm:hidden origin-top transform transition-all"
    >
      <button @click="scrollToSection('features')" role="menuitem" class="w-full text-left px-5 py-3 text-sm font-medium text-base-content/70 hover:bg-base-content/5 rounded-3xl transition-colors">
        Funzionalità
      </button>
      <button @click="scrollToSection('how-it-works')" role="menuitem" class="w-full text-left px-5 py-3 text-sm font-medium text-base-content/70 hover:bg-base-content/5 rounded-3xl transition-colors">
        Come funziona
      </button>
      <button @click="scrollToSection('faq')" role="menuitem" class="w-full text-left px-5 py-3 text-sm font-medium text-base-content/70 hover:bg-base-content/5 rounded-3xl transition-colors">
        FAQ
      </button>
      <div class="h-px bg-base-content/10 mx-2 my-1"></div>
      <a href="#download" @click="isMobileMenuOpen = false" role="menuitem" class="w-full flex items-center justify-center px-5 py-3 bg-neutral text-neutral-content text-sm font-bold rounded-3xl shadow-sm">
        Scarica l'app
      </a>
    </div>
  </nav>
</template>
