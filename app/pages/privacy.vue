<script setup lang="ts">
const appConfig = useAppConfig()
const lastUpdated = appConfig.legalLastUpdated

useSeoMeta({
  title: 'Privacy Policy — Slip',
  description: 'Informativa privacy di Slip: dati cifrati end-to-end, anonimizzazione AI, conformità GDPR. Mai venduti, mai condivisi.',
  ogLocale: 'it_IT',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: 'Privacy Policy — Slip',
    description: 'Informativa privacy di Slip: dati cifrati end-to-end, anonimizzazione AI, conformità GDPR.',
    inLanguage: 'it-IT',
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Privacy Policy', item: '/privacy' },
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
            <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
            <p class="mt-2 text-base-content/70">Ultimo aggiornamento: {{ lastUpdated }}</p>
          </div>
          <NuxtLink to="/" class="btn btn-ghost">Torna alla home</NuxtLink>
        </div>
      </div>
    </section>

    <main class="slip-container py-12">
      <div class="prose prose-lg max-w-3xl">

        <h2>Introduzione</h2>
        <p>
          Slip ("noi", "nostro" o "app") rispetta la tua privacy. Questa informativa descrive come gestiamo i tuoi dati quando utilizzi la nostra app per la gestione delle buste paga.
        </p>

        <h2>Dati che raccogliamo</h2>
        <h3>Dati di autenticazione</h3>
        <p>
          Quando accedi con Google Sign-In, riceviamo le seguenti informazioni dal tuo account Google:
        </p>
        <ul>
          <li>Nome e cognome</li>
          <li>Indirizzo email</li>
          <li>Immagine del profilo</li>
        </ul>

        <h3>Dati delle buste paga</h3>
        <p>
          I dati delle tue buste paga (PDF e dati estratti) sono trattati secondo i principi del GDPR: <strong>cifrati end-to-end e anonimizzati</strong>. La conservazione segue un'architettura privacy by design con sicurezza enterprise.
        </p>

        <h2>Come utilizziamo i dati</h2>
        <ul>
          <li><strong>Autenticazione:</strong> Per identificarti e permetterti di accedere ai tuoi dati</li>
          <li><strong>Analisi AI:</strong> Le buste paga vengono elaborate da un servizio di intelligenza artificiale per la sola estrazione e spiegazione delle voci. I dati sono trasmessi in forma anonimizzata e non vengono memorizzati al di fuori della sessione di analisi</li>
          <li><strong>Archiviazione:</strong> I dati sono cifrati e protetti secondo GDPR. Mai venduti, mai condivisi</li>
        </ul>

        <h2>Sicurezza dei dati</h2>
        <p>
          La sicurezza dei tuoi dati è la nostra priorità:
        </p>
        <ul>
          <li>Crittografia end-to-end dei dati in transito e a riposo</li>
          <li>Anonimizzazione applicata prima di qualsiasi trattamento AI</li>
          <li>Architettura privacy by design, sicurezza enterprise</li>
          <li>Conformità GDPR e principi di minimizzazione del dato</li>
          <li>Puoi eliminare tutti i tuoi dati in qualsiasi momento dall'app</li>
        </ul>

        <h2>Condivisione dei dati</h2>
        <p>
          I tuoi dati personali non sono mai venduti né condivisi a fini commerciali. Per garantire il funzionamento del servizio, alcuni trattamenti tecnici minimi possono coinvolgere fornitori conformi al GDPR (autenticazione, elaborazione AI per la sola estrazione delle voci della busta paga). In tutti i casi i dati sono trasmessi in forma cifrata e anonimizzata, e non sono utilizzati per finalità diverse dal servizio descritto.
        </p>

        <h2>I tuoi diritti</h2>
        <p>
          Hai il diritto di:
        </p>
        <ul>
          <li>Accedere ai tuoi dati</li>
          <li>Cancellare tutti i tuoi dati dall'app</li>
          <li>Revocare l'accesso all'app dal tuo account Google</li>
          <li>Richiedere informazioni sul trattamento dei dati</li>
        </ul>

        <h2>Contatti</h2>
        <p>
          Per qualsiasi domanda sulla privacy, contattaci all'indirizzo: <a href="mailto:privacy@slippino.app">privacy@slippino.app</a>
        </p>

        <h2>Modifiche alla policy</h2>
        <p>
          Potremmo aggiornare questa informativa di tanto in tanto. Ti informeremo di eventuali modifiche significative tramite l'app o via email.
        </p>
      </div>
    </main>
  </div>
</template>
