export type ThemeMode = 'slip' | 'slipdark'

export const THEME_STORAGE_KEY = 'slip_theme'
export const THEME_LIGHT: ThemeMode = 'slip'
export const THEME_DARK: ThemeMode = 'slipdark'

export function resolveTheme(): ThemeMode {
  if (typeof window === 'undefined' || typeof document === 'undefined') return THEME_LIGHT
  try {
    const stored = window.localStorage?.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    if (stored === THEME_LIGHT || stored === THEME_DARK) return stored
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return THEME_DARK
    return THEME_LIGHT
  } catch {
    return THEME_LIGHT
  }
}

export function applyThemeToDocument(theme: ThemeMode) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = theme
  if (theme === THEME_DARK) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const themeInlineScript =
  "(function(){try{var k='slip_theme';var t=localStorage.getItem(k);var v=(t==='slip'||t==='slipdark')?t:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'slipdark':'slip');document.documentElement.dataset.theme=v;if(v==='slipdark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){}})();"
