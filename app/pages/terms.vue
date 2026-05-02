<script setup lang="ts">
const appConfig = useAppConfig()
const lastUpdated = appConfig.legalLastUpdated

useSeoMeta({
  title: 'Termini di Servizio — Slip',
  description: 'Termini e condizioni di utilizzo di Slip, l\'app italiana che spiega la busta paga con l\'AI.',
  ogLocale: 'it_IT',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: 'Termini di Servizio — Slip',
    description: 'Termini e condizioni d\'uso di Slip.',
    inLanguage: 'it-IT',
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Termini di Servizio', item: '/terms' },
    ],
  }),
])
</script>

<template>
  <div class="bg-base-100">
    <section class="border-b border-base-200/70 bg-base-100 py-10">
      <div class="slip-container">
        <div class="flex items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Termini di Servizio</h1>
            <p class="mt-2 text-base-content/70">Ultimo aggiornamento: {{ lastUpdated }}</p>
          </div>
          <NuxtLink to="/" class="btn btn-ghost">Torna alla home</NuxtLink>
        </div>
      </div>
    </section>

    <main class="slip-container py-12">
      <div class="prose prose-lg max-w-3xl">

        <h2>Accettazione dei termini</h2>
        <p>
          Utilizzando Slip, accetti questi termini di servizio. Se non li accetti, non utilizzare l'app.
        </p>

        <h2>Descrizione del servizio</h2>
        <p>
          Slip è un'applicazione mobile che permette di:
        </p>
        <ul>
          <li>Caricare e archiviare buste paga in formato digitale</li>
          <li>Analizzare le buste paga tramite intelligenza artificiale</li>
          <li>Visualizzare statistiche e trend del proprio stipendio</li>
          <li>Pianificare il proprio budget mensile</li>
        </ul>

        <h2>Account utente</h2>
        <p>
          Per utilizzare Slip devi autenticarti con un account Google. Sei responsabile di:
        </p>
        <ul>
          <li>Mantenere la sicurezza del tuo account Google</li>
          <li>Tutte le attività che avvengono tramite il tuo account</li>
          <li>Comunicarci eventuali accessi non autorizzati</li>
        </ul>

        <h2>Costo e disponibilità</h2>
        <p>
          Slip è attualmente disponibile gratuitamente su App Store e Google Play. L'app può mostrare pubblicità. Eventuali modifiche al modello di distribuzione (compresa l'introduzione di funzionalità a pagamento) saranno comunicate tramite l'app e aggiornate in questi termini.
        </p>

        <h2>Uso accettabile</h2>
        <p>
          Ti impegni a non utilizzare Slip per:
        </p>
        <ul>
          <li>Attività illegali o fraudolente</li>
          <li>Violare i diritti di terzi</li>
          <li>Caricare contenuti dannosi o inappropriati</li>
          <li>Tentare di accedere a dati di altri utenti</li>
        </ul>

        <h2>Precisione dell'analisi AI</h2>
        <p>
          L'analisi AI delle buste paga è fornita a scopo informativo. Slip non garantisce l'accuratezza al 100% dei dati estratti. Per questioni fiscali o legali, consulta sempre un professionista.
        </p>

        <h2>Limitazione di responsabilità</h2>
        <p>
          Slip è fornito "così com'è". Non siamo responsabili per:
        </p>
        <ul>
          <li>Errori o imprecisioni nell'analisi AI</li>
          <li>Perdita di dati (i tuoi dati sono cifrati e protetti secondo GDPR)</li>
          <li>Interruzioni del servizio</li>
          <li>Decisioni prese basandosi sui dati dell'app</li>
        </ul>

        <h2>Proprietà intellettuale</h2>
        <p>
          Slip e tutti i suoi contenuti sono protetti da copyright. Non puoi copiare, modificare o distribuire l'app o parti di essa senza autorizzazione.
        </p>

        <h2>Modifiche ai termini</h2>
        <p>
          Possiamo modificare questi termini in qualsiasi momento. Le modifiche saranno comunicate tramite l'app. Continuando a utilizzare Slip dopo le modifiche, accetti i nuovi termini.
        </p>

        <h2>Risoluzione</h2>
        <p>
          Possiamo sospendere o terminare il tuo accesso a Slip in caso di violazione di questi termini. Puoi eliminare il tuo account in qualsiasi momento dall'app.
        </p>

        <h2>Legge applicabile</h2>
        <p>
          Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di Milano.
        </p>

        <h2>Contatti</h2>
        <p>
          Per domande sui termini di servizio: <a href="mailto:legal@slippino.app">legal@slippino.app</a>
        </p>
      </div>
    </main>
  </div>
</template>
