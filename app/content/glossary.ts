export type GlossaryTerm = {
  id: string
  term: string
  definition: string
  legalRef?: string
}

export const glossary: GlossaryTerm[] = [
  {
    id: 'busta-paga',
    term: 'Busta paga',
    definition: 'Documento mensile obbligatorio che il datore di lavoro consegna al dipendente, riepiloga retribuzione lorda, trattenute fiscali e contributive, mensilità aggiuntive, ferie e netto pagato. Sinonimo colloquiale di cedolino.',
    legalRef: 'Legge 4/1953',
  },
  {
    id: 'cedolino',
    term: 'Cedolino',
    definition: 'Termine tecnico-amministrativo equivalente a busta paga. Indica il prospetto paga emesso ogni mese dal sostituto d\'imposta con il dettaglio analitico di competenze e trattenute applicate al lavoratore.',
    legalRef: 'Legge 4/1953',
  },
  {
    id: 'irpef',
    term: 'IRPEF',
    definition: 'Imposta sul Reddito delle Persone Fisiche, principale imposta diretta italiana. Calcolata per scaglioni progressivi (23%/35%/43% nel 2026) e trattenuta mensilmente in busta paga dal sostituto d\'imposta.',
    legalRef: 'DPR 917/1986 (TUIR)',
  },
  {
    id: 'inps',
    term: 'INPS',
    definition: 'Istituto Nazionale della Previdenza Sociale, ente che gestisce la previdenza obbligatoria. In busta paga compare come trattenuta contributiva pari a circa il 9,19% del lordo a carico del lavoratore dipendente.',
  },
  {
    id: 'tfr',
    term: 'TFR',
    definition: 'Trattamento di Fine Rapporto, quota di retribuzione differita accantonata mensilmente dal datore di lavoro e liquidata al lavoratore alla cessazione del rapporto. Si calcola dividendo la retribuzione annua per 13,5.',
    legalRef: 'art. 2120 Codice Civile',
  },
  {
    id: 'ral',
    term: 'RAL',
    definition: 'Retribuzione Annua Lorda, totale lordo percepito in un anno solare prima di trattenute fiscali e contributive. Include tutte le mensilità previste dal CCNL applicato (tredicesima ed eventuale quattordicesima).',
  },
  {
    id: 'ccnl',
    term: 'CCNL',
    definition: 'Contratto Collettivo Nazionale di Lavoro, accordo tra sindacati e associazioni datoriali che fissa minimi retributivi, livelli, ferie, permessi e mensilità aggiuntive per ciascun settore di attività.',
  },
  {
    id: 'conguaglio',
    term: 'Conguaglio',
    definition: 'Operazione di ricalcolo annuale (di norma a dicembre o a marzo) con cui il sostituto d\'imposta verifica l\'IRPEF effettivamente dovuta sul reddito complessivo e regola in busta paga eventuali differenze tra acconti e saldo.',
    legalRef: 'DPR 917/1986 (TUIR)',
  },
  {
    id: 'tredicesima',
    term: 'Tredicesima',
    definition: 'Mensilità aggiuntiva prevista dalla maggior parte dei CCNL italiani, erogata di norma a dicembre. Matura un dodicesimo per ogni mese lavorato nell\'anno ed è soggetta a tassazione IRPEF e contributi INPS.',
  },
  {
    id: 'sostituto-imposta',
    term: 'Sostituto d\'imposta',
    definition: 'Soggetto (di norma il datore di lavoro) che la legge obbliga a trattenere alla fonte le imposte dovute dal lavoratore — in primis IRPEF e addizionali — e a versarle direttamente all\'Erario per conto del dipendente.',
    legalRef: 'DPR 600/1973',
  },
  {
    id: 'rol',
    term: 'ROL',
    definition: 'Riduzione Orario di Lavoro, ore di permesso retribuito che il lavoratore matura ogni mese in base al CCNL applicato e che possono essere fruite o, in alcuni contratti, monetizzate al termine del periodo di maturazione.',
  },
]
