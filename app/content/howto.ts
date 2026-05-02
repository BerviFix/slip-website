export type HowToStep = {
  id: string
  name: string
  text: string
  image?: string
}

export type HowTo = {
  id: string
  name: string
  description: string
  totalTime: string
  steps: HowToStep[]
}

export const howToReadPayslip: HowTo = {
  id: 'come-si-legge-busta-paga',
  name: 'Come si legge la busta paga in 4 passi',
  description: 'Guida pratica per leggere il cedolino italiano: testa con anagrafica e CCNL, corpo con competenze, piede con trattenute, totali con netto a pagare e TFR.',
  totalTime: 'PT5M',
  steps: [
    {
      id: 'testa',
      name: '1. Testa: anagrafica e CCNL',
      text: 'Controlla in alto i dati anagrafici, l\'azienda, il CCNL applicato, il livello, la qualifica, la posizione INPS e INAIL. Sono le informazioni che cambiano di rado e definiscono il quadro contrattuale del rapporto di lavoro.',
    },
    {
      id: 'corpo',
      name: '2. Corpo: competenze e voci variabili',
      text: 'Nel corpo trovi la retribuzione lorda di base, gli straordinari, le indennità, gli scatti di anzianità, i premi e i ratei di tredicesima e quattordicesima maturati nel mese. È la parte che varia mensilmente.',
    },
    {
      id: 'piede',
      name: '3. Piede: trattenute fiscali e contributive',
      text: 'Nel piede del cedolino vedi le trattenute INPS (circa 9,19% a carico del lavoratore), l\'IRPEF a scaglioni con detrazioni, le addizionali regionali e comunali. Sono le voci che riducono il lordo per arrivare al netto.',
    },
    {
      id: 'totali',
      name: '4. Totali: netto a pagare e TFR',
      text: 'In fondo trovi il netto a pagare (la cifra effettivamente bonificata), il TFR maturato nel mese e progressivo annuo, i giorni di ferie e le ore di permesso ROL residui. È il riepilogo finale del cedolino.',
    },
  ],
}
