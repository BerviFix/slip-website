import { ref, readonly } from 'vue'
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
  type ThemeMode,
} from '~/utils/theme'

const themeRef = ref<ThemeMode>(THEME_LIGHT)
const mountedRef = ref(false)

function writeDom(next: ThemeMode) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = next
  if (next === THEME_DARK) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function syncFromDom() {
  if (typeof document === 'undefined') return
  const current = document.documentElement.dataset.theme
  themeRef.value = current === THEME_DARK ? THEME_DARK : THEME_LIGHT
  mountedRef.value = true
}

export function useThemeMode() {
  if (import.meta.client && !mountedRef.value) {
    syncFromDom()
  }

  const apply = (next: ThemeMode) => {
    themeRef.value = next
    if (import.meta.client) {
      writeDom(next)
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {
        // ignore
      }
    }
  }

  const toggle = () => apply(themeRef.value === THEME_DARK ? THEME_LIGHT : THEME_DARK)

  const clearPreference = () => {
    if (!import.meta.client) return
    try {
      localStorage.removeItem(THEME_STORAGE_KEY)
    } catch {
      // ignore
    }
    const fallback = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT
    apply(fallback)
  }

  return {
    theme: readonly(themeRef),
    mounted: readonly(mountedRef),
    apply,
    toggle,
    clearPreference,
  }
}
