import { TerritoriesType } from "../../utils/territories";

type PossiblePlaceholders = 'localisation'

type QuestionText = Partial<Record<PossiblePlaceholders, string>>

export const replacePlaceHolders = (text: string | undefined, territory: TerritoriesType) => {
  if (!text || typeof text !== 'string') return text

  const placeholdersToReplace = { ...questionTexts['general'], ...questionTexts[territory] }

  for (const key in placeholdersToReplace) {
    text = text.replaceAll(`${key.toUpperCase()}_PLACEHOLDER`, placeholdersToReplace[key as PossiblePlaceholders] ?? '')
  }

  return text
}

export const questionTexts: Record<TerritoriesType, QuestionText> = {
  'arras-pays-d-artois': {
  },
  'artois-lys': {},
  audomarois: {},
  'aumale-blangy': {},
  'avesnois-thierache': {
    localisation: 'dans l\'Avesnois-Thiérache'
  },
  'baie-de-somme': {},
  boulonnais: {},
  calaisis: {},
  cambresis: {},
  chaunois: {},
  'coeur-des-hauts-de-france': {},
  'compiègne-pierrefonds': {},
  'cote-d-opale': {},
  'creil-halatte': {},
  dunkerquois: {},
  'flandre-rurale': {},
  'grand-Amiénois': {},
  'grand-Beauvaisis': {},
  'grand-Laonnois': {},
  hainaut: {},
  'lens-hénin': {},
  liancourtois: {},
  'métropole-européenne-de-lille': {},
  'noyonnais-deux-vallées': {},
  'pays-de-valois': {},
  'pévélois-douaisis': {},
  'plateau-picard': {},
  'portes-de-la-champagne': {},
  'saint-quentinois': {},
  'senlis-chantilly': {},
  'soissonnais-valois': {},
  'vexin-sablons': {},
  'villes-soeurs': {},
  general: {
    localisation: 'sur votre lieu de séjour'
  }
}