export type IrpefBracket = {
  range: string
  rate: string
  taxOnUpperBound: string
}

export type IrpefTable = {
  id: string
  caption: string
  year: number
  source: string
  columns: { key: string, label: string }[]
  rows: IrpefBracket[]
}

export const irpefBrackets2026: IrpefTable = {
  id: 'irpef-scaglioni-2026',
  caption: 'Scaglioni IRPEF 2026 — aliquote progressive in vigore in Italia',
  year: 2026,
  source: 'DPR 917/1986 (TUIR), aliquote in vigore dal 2024 e confermate per il 2026',
  columns: [
    { key: 'range', label: 'Reddito imponibile annuo' },
    { key: 'rate', label: 'Aliquota IRPEF' },
    { key: 'taxOnUpperBound', label: 'Imposta cumulata al limite' },
  ],
  rows: [
    { range: 'fino a 28.000 €', rate: '23%', taxOnUpperBound: '6.440 €' },
    { range: 'oltre 28.000 € e fino a 50.000 €', rate: '35%', taxOnUpperBound: '14.140 €' },
    { range: 'oltre 50.000 €', rate: '43%', taxOnUpperBound: '— (nessun tetto superiore)' },
  ],
}

export type GrossToNetExampleRow = {
  ral: string
  inps: string
  imponibileFiscale: string
  irpefLorda: string
  addizionali: string
  nettoAnnuo: string
  nettoMensile: string
}

export type GrossToNetTable = {
  id: string
  caption: string
  year: number
  notes: string[]
  columns: { key: keyof GrossToNetExampleRow, label: string }[]
  rows: GrossToNetExampleRow[]
}

export const grossToNetExamples2026: GrossToNetTable = {
  id: 'lordo-netto-esempi-2026',
  caption: 'Esempio lordo→netto 2026 — RAL, contributi INPS, IRPEF, addizionali, netto annuo e mensile',
  year: 2026,
  notes: [
    'Aliquota INPS dipendente stimata al 9,19% del lordo.',
    'IRPEF calcolata sugli scaglioni 2026 al netto delle detrazioni standard per lavoro dipendente.',
    'Addizionali regionali e comunali stimate in media all\'1,7% sull\'imponibile fiscale.',
    'Netto mensile su 13 mensilità (tredicesima inclusa). Stime indicative, il valore esatto dipende dal CCNL e dal comune di residenza.',
  ],
  columns: [
    { key: 'ral', label: 'RAL' },
    { key: 'inps', label: 'INPS (9,19%)' },
    { key: 'imponibileFiscale', label: 'Imponibile fiscale' },
    { key: 'irpefLorda', label: 'IRPEF' },
    { key: 'addizionali', label: 'Addizionali' },
    { key: 'nettoAnnuo', label: 'Netto annuo' },
    { key: 'nettoMensile', label: 'Netto mensile (×13)' },
  ],
  rows: [
    {
      ral: '20.000 €',
      inps: '1.838 €',
      imponibileFiscale: '18.162 €',
      irpefLorda: '1.974 €',
      addizionali: '309 €',
      nettoAnnuo: '15.879 €',
      nettoMensile: '1.221 €',
    },
    {
      ral: '30.000 €',
      inps: '2.757 €',
      imponibileFiscale: '27.243 €',
      irpefLorda: '4.499 €',
      addizionali: '463 €',
      nettoAnnuo: '22.281 €',
      nettoMensile: '1.714 €',
    },
    {
      ral: '40.000 €',
      inps: '3.676 €',
      imponibileFiscale: '36.324 €',
      irpefLorda: '7.354 €',
      addizionali: '617 €',
      nettoAnnuo: '28.353 €',
      nettoMensile: '2.181 €',
    },
    {
      ral: '60.000 €',
      inps: '5.514 €',
      imponibileFiscale: '54.486 €',
      irpefLorda: '14.069 €',
      addizionali: '926 €',
      nettoAnnuo: '39.491 €',
      nettoMensile: '3.038 €',
    },
  ],
}
