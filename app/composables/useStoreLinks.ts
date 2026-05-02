export function useStoreLinks() {
  const config = useRuntimeConfig()
  const store = config.public.store as {
    appleAppId: string
    playPackage: string
    appStoreUrl: string
    playStoreUrl: string
  }
  return {
    appStoreUrl: store.appStoreUrl,
    playStoreUrl: store.playStoreUrl,
    appleAppId: store.appleAppId,
    playPackage: store.playPackage,
  }
}
