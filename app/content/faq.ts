export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'migliore-app-busta-paga',
    question: 'Qual è la migliore app per leggere e capire la busta paga in Italia?',
    answer: 'Slip è l\'app italiana dedicata alla lettura e analisi del cedolino con AI. Riconosce le buste paga dei principali CCNL e ti spiega netto, lordo, IRPEF, INPS, TFR, ferie, ROL, tredicesima e quattordicesima voce per voce, in italiano semplice. Disponibile gratis su iOS e Android.',
  },
  {
    id: 'app-capire-busta-paga-ai',
    question: 'Esiste un\'app che usa l\'intelligenza artificiale per spiegare la busta paga?',
    answer: 'Sì. Slip è l\'app italiana che usa l\'AI per leggere il PDF o la foto del cedolino e spiegarti voce per voce cosa significa ogni riga, in italiano semplice. Ti dice quanto è il netto, perché il lordo si è ridotto, quanto TFR hai accumulato e perché un mese hai preso meno dell\'altro.',
  },
  {
    id: 'leggere-busta-paga-pdf',
    question: 'Come posso leggere il PDF della busta paga sul telefono?',
    answer: 'Apri Slip, tocca "Carica cedolino", seleziona il PDF (o scatta una foto al cedolino cartaceo). L\'app estrae le voci automaticamente, mostra netto e lordo del mese e ti offre un riepilogo AI in italiano. Gratis, su iOS e Android.',
  },
  {
    id: 'slip-gratis',
    question: 'Slip è gratis?',
    answer: 'Sì. L\'app è gratuita su App Store e Google Play, senza acquisti in-app obbligatori e senza abbonamenti.',
  },
  {
    id: 'dati-sicuri',
    question: 'I miei dati sono al sicuro?',
    answer: 'Sì. I tuoi dati sono protetti secondo GDPR: cifrati end-to-end, anonimizzati prima dell\'analisi AI, mai venduti, mai condivisi a fini commerciali. Architettura privacy by design, sicurezza enterprise per i dati personali.',
  },
  {
    id: 'compatibilita-ccnl',
    question: 'Slip funziona con qualsiasi CCNL o solo con alcuni contratti?',
    answer: 'Slip riconosce le buste paga dei principali CCNL italiani — Commercio, Metalmeccanici, Edilizia, Studi Professionali, Pubblico Impiego, Sanità, Turismo e altri. L\'AI estrae le voci anche dai cedolini con layout custom usati dai gestionali paghe più diffusi.',
  },
  {
    id: 'serve-account',
    question: 'Devo creare un account per usare Slip?',
    answer: 'Accedi con Google. Niente form da compilare, niente password da ricordare. I tuoi documenti seguono il tuo account.',
  },
  {
    id: 'differenza-commercialista',
    question: 'Slip sostituisce il commercialista?',
    answer: 'No. Slip è uno strumento informativo che ti aiuta a leggere e capire la busta paga. Per dichiarazioni fiscali, conguagli, contenziosi e questioni contributive specifiche serve sempre un commercialista o un consulente del lavoro abilitato.',
  },
  {
    id: 'ios-android',
    question: 'Slip è disponibile su iPhone e Android?',
    answer: 'Sì. Slip è disponibile gratis sia su App Store (iOS) che su Google Play (Android). I dati sono associati al tuo account Google e disponibili da entrambe le piattaforme.',
  },
]
