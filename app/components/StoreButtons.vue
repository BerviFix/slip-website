<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md',
  },
)

const { appStoreUrl, playStoreUrl } = useStoreLinks()

const containerHeightClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-10'
    case 'lg':
      return 'h-14'
    default:
      return 'h-11'
  }
})

const containerWidthClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[170px]'
    case 'lg':
      return 'w-[240px]'
    default:
      return 'w-[190px]'
  }
})

</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-4">
    <a
      :href="appStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="Scarica Slip su App Store"
    >
      <div
        :class="[containerHeightClass, containerWidthClass]"
        class="flex items-center justify-center overflow-hidden rounded-lg"
      >
        <img
          src="/images/Download_on_the_App_Store_Badge.svg"
          alt="Download on the App Store"
          class="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </a>

    <a
      :href="playStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="Scarica Slip su Google Play"
    >
      <div
        :class="[containerHeightClass, containerWidthClass]"
        class="flex items-center justify-center overflow-hidden rounded-lg"
      >
        <img
          src="/images/GetItOnGooglePlay_Badge_Web_color.svg"
          alt="Disponibile su Google Play"
          class="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </a>
  </div>
</template>
