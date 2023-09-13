import { EvaluatedNode, Evaluation, RuleNode } from 'publicodes'

export type User = {
  region: {
    code: string
    name: string
  }
  initialRegion: {
    code: string
    name: string
  }
  name: string
  email: string
  northStarRatings?: any // TODO: should be NorthStartType or something
  id: string
}

export type Rules = any

export type Tutorials = Record<string, boolean>

export type Situation = Record<string, NodeValue>

export type Suggestion = {
  label: string
  value: any // TODO: sorry...
  // value:
  //   | NodeValue
  //   | {
  //       [key: string]: NodeValue
  //     }
}

// TODO: what's the type of Engine ?
export type Engine = any

export type NGCRuleNode = RuleNode & {
  rawNode: NGCRule
}

export type NGCEvaluatedNode = EvaluatedNode

export type ActionChoices = Record<string, boolean>

export type NodeValue = Evaluation

export type Simulation = {
  id: string
  date: Date | string
  situation: Situation
  actionChoices: ActionChoices
  persona?: string
}

export type Persona = {
  nom: string
  icônes: string
  situation: Situation
  description?: string
  résumé: string
}

type Color = `#${string}`

type SuggestionsNode = Record<
  string,
  string | number | Record<string, string | number>
>

type MosaiqueNode = {
  type: 'selection' | 'nombre'
  clé: string
  total?: number
  suggestions?: SuggestionsNode
}

type MosaicInfos = {
  mosaicRule: RuleNode
  mosaicParams: MosaiqueNode
  mosaicDottedNames: [string, NGCRuleNode][]
}

type Formule = any

type NGCRule = {
  abréviation?: string
  couleur?: Color
  mosaique?: MosaiqueNode
  type?: string
  sévérité?: string
  action?: { dépasse: string[] }
  icônes?: string
  dottedName?: string
  plus?: boolean
  formule?: Formule
  aide?: string
  inactif?: string
}