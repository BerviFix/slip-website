import {
  applyThemeToDocument,
  resolveTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
} from '~/utils/theme'

export default defineNuxtPlugin(() => {
  const resolved = resolveTheme()
  applyThemeToDocument(resolved)

  if (typeof window === 'undefined' || !window.matchMedia) return
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = (e: MediaQueryListEvent) => {
    try {
      if (window.localStorage?.getItem(THEME_STORAGE_KEY)) return
    } catch {
      return
    }
    applyThemeToDocument(e.matches ? THEME_DARK : THEME_LIGHT)
  }
  mql.addEventListener?.('change', onChange)
})
