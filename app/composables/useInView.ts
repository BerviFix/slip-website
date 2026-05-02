export function useInView(options: IntersectionObserverInit = {}) {
  const element = ref<HTMLElement | null>(null)
  const inView = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!import.meta.client) return
    if (!element.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (!entry) return
      if (entry.isIntersecting) {
        inView.value = true
        observer?.disconnect()
        observer = null
      }
    }, options)

    observer.observe(element.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { element, inView }
}

