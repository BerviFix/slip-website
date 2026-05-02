export type AnswerBlock = {
  id: string
  query: string
  heading: string
  answer: string
  citations?: string[]
  seeAlso?: { label: string, href: string }[]
}

export const answers: AnswerBlock[] = [
  {
    id: 'cose-busta-paga',
    query: 'cos\'è la busta paga',
    heading: 'Cos\'è la busta paga?',
    answer: 'La busta paga è il documento mensile che il datore di lavoro consegna al lavoratore dipendente: riepiloga lo stipendio lordo, le trattenute fiscali (IRPEF) e contributive (INPS), eventuali bonus, ferie, permessi e indica il netto effettivamente pagato. È obbligatoria in Italia dal 1953 e regolata dalla Legge 4/1953.',
    citations: ['Legge 4/1953', 'D.Lgs. 152/1997'],
    seeAlso: [
      { label: 'differenza con il cedolino', href: '#differenza-busta-paga-cedolino' },
      { label: 'come si legge il cedolino', href: '#come-leggere-cedolino' },
      { label: 'cos\'è l\'IRPEF', href: '#cose-irpef' },
    ],
  },
  {
    id: 'come-leggere-cedolino',
    query: 'come si legge il cedolino',
    heading: 'Come si legge il cedolino?',
    answer: 'Il cedolino si legge in quattro parti: testa con dati anagrafici e CCNL, corpo con competenze (retribuzione lorda, straordinari, indennità), piede con trattenute (INPS, IRPEF, addizionali) e totali (netto a pagare, TFR maturato). Ogni voce ha un codice CCNL specifico. Il netto si ottiene sottraendo le trattenute dal lordo.',
    citations: ['Legge 4/1953'],
    seeAlso: [
      { label: 'cos\'è l\'IRPEF', href: '#cose-irpef' },
      { label: 'cos\'è l\'INPS', href: '#cose-inps' },
      { label: 'cos\'è il TFR', href: '#cose-tfr' },
    ],
  },
  {
    id: 'differenza-busta-paga-cedolino',
    query: 'differenza busta paga e cedolino',
    heading: 'Che differenza c\'è tra busta paga e cedolino?',
    answer: 'Busta paga e cedolino paga sono sinonimi: indicano lo stesso documento mensile previsto dalla Legge 4/1953. "Busta paga" è il termine colloquiale (deriva dalla busta cartacea consegnata al dipendente), "cedolino" è il termine tecnico-amministrativo usato nei software paghe e nei riferimenti contrattuali. Nel contenuto e nell\'obbligatorietà non cambia nulla.',
    citations: ['Legge 4/1953'],
  },
  {
    id: 'cose-irpef',
    query: 'cosa è IRPEF',
    heading: 'Cos\'è l\'IRPEF?',
    answer: 'IRPEF è l\'Imposta sul Reddito delle Persone Fisiche, la principale imposta diretta italiana, regolata dal DPR 917/1986 (TUIR). Si calcola per scaglioni: nel 2026 si applica il 23% fino a 28.000€, il 35% tra 28.000€ e 50.000€, il 43% oltre 50.000€. In busta paga viene trattenuta mensilmente in acconto dal sostituto d\'imposta.',
    citations: ['DPR 917/1986 (TUIR)'],
    seeAlso: [
      { label: 'scaglioni IRPEF 2026', href: '#scaglioni-irpef' },
      { label: 'come si calcola il netto', href: '#calcolo-netto-da-lordo' },
      { label: 'cosa significa RAL', href: '#cose-ral' },
    ],
  },
  {
    id: 'cose-inps',
    query: 'cosa è INPS',
    heading: 'Cos\'è l\'INPS?',
    answer: 'INPS è l\'Istituto Nazionale della Previdenza Sociale, l\'ente pubblico che gestisce la previdenza obbligatoria italiana. In busta paga compare come trattenuta contributiva: per il dipendente è circa il 9,19% del lordo (la quota a carico del datore di lavoro è maggiore ma non viene mostrata al lavoratore). Finanzia pensioni, indennità di malattia, maternità, disoccupazione.',
  },
  {
    id: 'cose-tfr',
    query: 'cosa è TFR',
    heading: 'Cos\'è il TFR?',
    answer: 'Il TFR (Trattamento di Fine Rapporto) è una somma che il datore di lavoro accantona ogni mese per il dipendente e gli liquida alla cessazione del rapporto, regolata dall\'art. 2120 del Codice Civile. Si calcola dividendo la retribuzione annua per 13,5 e applicando ogni anno una rivalutazione fissa dell\'1,5% più il 75% dell\'inflazione ISTAT.',
    citations: ['art. 2120 Codice Civile'],
    seeAlso: [
      { label: 'cosa significa RAL', href: '#cose-ral' },
    ],
  },
  {
    id: 'cose-ccnl',
    query: 'cosa è CCNL',
    heading: 'Cos\'è il CCNL?',
    answer: 'CCNL è il Contratto Collettivo Nazionale di Lavoro: l\'accordo tra sindacati e associazioni datoriali che fissa retribuzioni minime, livelli, ferie, permessi, mensilità aggiuntive e tutele per ogni settore (Commercio, Metalmeccanici, Edilizia, Pubblico Impiego, Sanità). In busta paga il CCNL applicato è indicato in alto, accanto al livello e alla qualifica del lavoratore.',
  },
  {
    id: 'cose-tredicesima',
    query: 'cosa è la tredicesima',
    heading: 'Cos\'è la tredicesima?',
    answer: 'La tredicesima è una mensilità aggiuntiva prevista dalla maggior parte dei CCNL italiani, pagata di norma a dicembre prima di Natale. Matura un dodicesimo per ogni mese lavorato nell\'anno solare. È soggetta a IRPEF e contributi INPS come una mensilità ordinaria, quindi il netto risulta inferiore allo stipendio mensile per via della tassazione separata.',
    seeAlso: [
      { label: 'cos\'è l\'IRPEF', href: '#cose-irpef' },
    ],
  },
  {
    id: 'calcolo-netto-da-lordo',
    query: 'come si calcola il netto da lordo',
    heading: 'Come si calcola il netto da lordo?',
    answer: 'Dal lordo annuo si tolgono prima i contributi INPS a carico del lavoratore (circa 9,19%), ottenendo l\'imponibile fiscale. Su questo si applica l\'IRPEF a scaglioni 2026 (23%/35%/43%) sottraendo le detrazioni per lavoro dipendente. Si tolgono infine le addizionali regionali e comunali. Il risultato è il netto annuo, da dividere per le mensilità.',
    citations: ['DPR 917/1986 (TUIR)'],
    seeAlso: [
      { label: 'scaglioni IRPEF 2026', href: '#scaglioni-irpef' },
      { label: 'cos\'è l\'INPS', href: '#cose-inps' },
    ],
  },
  {
    id: 'cose-ral',
    query: 'cosa significa RAL',
    heading: 'Cosa significa RAL?',
    answer: 'RAL è la Retribuzione Annua Lorda: il totale lordo che il lavoratore percepisce in un anno solare prima di trattenute fiscali e contributive. Include tutte le mensilità ordinarie più tredicesima ed eventuale quattordicesima previste dal CCNL. È la cifra di riferimento usata nelle offerte di lavoro e nei calcoli per stimare il netto annuo dopo IRPEF, INPS e addizionali.',
  },
]
