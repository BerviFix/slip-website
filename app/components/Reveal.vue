<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
    delayMs?: number
  }>(),
  {
    as: 'div',
    delayMs: 0,
  },
)

const { element, inView } = useInView({ rootMargin: '0px 0px -10% 0px', threshold: 0.15 })
</script>

<template>
  <component
    :is="props.as"
    ref="element"
    class="motion-reduce:transition-none motion-reduce:transform-none"
    :class="[
      'transition-all duration-700 ease-out will-change-transform',
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
    ]"
    :style="{ transitionDelay: `${props.delayMs}ms` }"
  >
    <slot />
  </component>
</template>

