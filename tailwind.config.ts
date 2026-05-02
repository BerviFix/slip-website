import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand identity preserved — primary blue, secondary cyan, accent violet.
        // Light values are slightly less saturated for the new softer palette.
        'slip-primary': '#2f6fe5',
        'slip-secondary': '#0ea5b7',
        'slip-accent': '#7c5cf0',
        'md-sys-light-surface': '#fafbfd',
        'md-sys-light-on-surface': '#1a1d23',
        'md-sys-light-surface-container': '#f1f4f9',
        'md-sys-dark-surface': '#141923',
        'md-sys-dark-on-surface': '#e6e9ef',
        'md-sys-dark-surface-container': '#1c2230',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,20,30,.04), 0 12px 40px rgba(15,20,30,.06)',
        'soft-lg': '0 2px 8px rgba(15,20,30,.05), 0 24px 80px rgba(15,20,30,.08)',
      },
      backgroundImage: {
        'mesh': [
          'radial-gradient(60% 50% at 10% 10%, rgba(47,111,229,.14) 0%, rgba(47,111,229,0) 60%)',
          'radial-gradient(55% 50% at 90% 20%, rgba(14,165,183,.12) 0%, rgba(14,165,183,0) 60%)',
          'radial-gradient(55% 55% at 50% 90%, rgba(124,92,240,.10) 0%, rgba(124,92,240,0) 60%)',
        ].join(','),
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        // LIGHT — soft off-white, near-black text (#1a1d23, not pure black),
        // slightly desaturated brand blue. Inspired by NeN / Reset Energia:
        // bright surfaces, generous whitespace, single saturated accent.
        slip: {
          'primary': '#2f6fe5',
          'primary-content': '#ffffff',
          'secondary': '#0ea5b7',
          'secondary-content': '#ffffff',
          'accent': '#7c5cf0',
          'accent-content': '#ffffff',
          'neutral': '#1a1d23',
          'neutral-content': '#ffffff',
          'base-100': '#fafbfd',
          'base-200': '#f1f4f9',
          'base-300': '#e4e9f2',
          'base-content': '#1a1d23',
          'info': '#2f6fe5',
          'success': '#0f7a3b',
          'success-content': '#ffffff',
          'warning': '#e3a008',
          'warning-content': '#1a1d23',
          'error': '#c92a3f',
          'error-content': '#ffffff',
          '--rounded-box': '1rem',
          '--rounded-btn': '9999px',
          '--rounded-badge': '9999px',
          '--animation-btn': '0.15s',
          '--animation-input': '0.15s',
          '--btn-focus-scale': '0.98',
          '--border-btn': '1px',
        },
        // DARK — softer than before. NO pure black bg. Base is a blue-gray
        // (#141923), surfaces lift above it (#1c2230 / #232a3a), text is a
        // near-white (#e6e9ef) instead of pure white. Primary is a brighter
        // blue so it reads against the lifted surfaces.
        slipdark: {
          'primary': '#7aa9f5',
          'primary-content': '#0a1426',
          'secondary': '#3dd3e5',
          'secondary-content': '#0a1426',
          'accent': '#b39bf7',
          'accent-content': '#10112b',
          'neutral': '#1c2230',
          'neutral-content': '#e6e9ef',
          'base-100': '#141923',
          'base-200': '#1c2230',
          'base-300': '#232a3a',
          'base-content': '#e6e9ef',
          'info': '#7aa9f5',
          'success': '#39c46b',
          'success-content': '#0a1426',
          'warning': '#fbbf24',
          'warning-content': '#1a1d23',
          'error': '#f0697b',
          'error-content': '#1a1d23',
          '--rounded-box': '1rem',
          '--rounded-btn': '9999px',
          '--rounded-badge': '9999px',
          '--animation-btn': '0.15s',
          '--animation-input': '0.15s',
          '--btn-focus-scale': '0.98',
          '--border-btn': '1px',
        },
      },
    ],
    darkTheme: 'slipdark',
  },
} satisfies Config
