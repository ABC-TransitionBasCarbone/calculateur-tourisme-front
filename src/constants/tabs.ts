import { Tab } from '@/publicodes-state/types'

export const carboneTab = 'carbone' as const

export const comparateurTab = 'comparateur' as const

export const tabs: Tab[] = [carboneTab, comparateurTab]

export const defaultTab: Tab = carboneTab
