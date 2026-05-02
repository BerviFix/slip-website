<script setup lang="ts">
type IconName =
  | 'sparkles'
  | 'cloud'
  | 'chart'
  | 'shield'
  | 'bolt'
  | 'lock'
  | 'camera'
  | 'drive'
  | 'check'
  | 'arrowRight'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'

const props = defineProps<{
  name: IconName
  class?: string
}>()

const paths = computed(() => {
  switch (props.name) {
    case 'sparkles':
      return [
        'M12 2l1.2 3.7 3.8 1.3-3.8 1.3L12 12l-1.2-3.7L7 7l3.8-1.3L12 2Z',
        'M5.5 10.5l.9 2.7 2.6.9-2.6.9-.9 2.7-.9-2.7-2.6-.9 2.6-.9.9-2.7Z',
        'M18.5 11.5l.9 2.7 2.6.9-2.6.9-.9 2.7-.9-2.7-2.6-.9 2.6-.9.9-2.7Z',
      ]
    case 'cloud':
      return [
        'M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7 1.8A3.5 3.5 0 1 1 17 18H7Z',
      ]
    case 'chart':
      return [
        'M4 19V5',
        'M8 15l3-3 3 2 6-7',
        'M20 19H4',
      ]
    case 'shield':
      return [
        'M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z',
        'M9 12l2 2 4-5',
      ]
    case 'bolt':
      return ['M13 2 3 14h7l-1 8 10-12h-7l1-8Z']
    case 'lock':
      return ['M7 11V8a5 5 0 0 1 10 0v3', 'M6 11h12v10H6V11Z']
    case 'camera':
      return ['M4 7h4l2-2h4l2 2h4v14H4V7Z', 'M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z']
    case 'drive':
      return [
        'M8.5 3h7l5 8.5-3.2 5.5H6.7L3.5 11.5 8.5 3Z',
        'M9.4 5 5.8 11.2',
        'M14.6 5 18.2 11.2',
        'M5.8 11.2h12.4',
      ]
    case 'sun':
      return ['M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z']
    case 'moon':
      return ['M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z']
    case 'check':
      return ['M4.5 12.75l6 6 9-13.5']
    case 'arrowRight':
      return ['M5 12h12', 'M13 6l6 6-6 6']
    case 'menu':
      return ['M4 6h16M4 12h16M4 18h16']
    case 'close':
      return ['M6 18L18 6M6 6l12 12']
    default:
      return []
  }
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="props.class"
    aria-hidden="true"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>