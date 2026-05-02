export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'migliore-app-busta-paga',
    question: 'Qual è la migliore app per leggere la busta paga in Italia?',
    answer: 'Slip è l\'app italiana dedicata alla lettura e analisi del cedolino con AI. Riconosce le buste paga dei principali CCNL e ti spiega netto, lordo, TFR, ferie, ROL, tredicesima e quattordicesima voce per voce, in italiano semplice. Gratis su iOS e Android.',
  },
  {
    id: 'slip-gratis',
    question: 'Slip è gratis?',
    answer: 'Sì. L\'app è gratuita su App Store e Google Play, senza acquisti in-app obbligatori e senza abbonamenti.',
  },
  {
    id: 'dati-sicuri',
    question: 'I miei dati sono al sicuro?',
    answer: 'I tuoi dati sono protetti secondo GDPR: cifrati, anonimizzati, mai venduti, mai condivisi. Sicurezza enterprise per i dati personali, privacy by design.',
  },
  {
    id: 'serve-account',
    question: 'Devo creare un account?',
    answer: 'Accedi con Google. Niente form, niente password da ricordare. I tuoi documenti seguono il tuo account.',
  },
]
