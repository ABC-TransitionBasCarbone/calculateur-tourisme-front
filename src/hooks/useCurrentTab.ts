import { defaultTab, tabs } from '@/constants/tabs'
import { useQueryParams } from '@/hooks/useQueryParams'
import { Tab } from '@/publicodes-state/types'
import { useCallback } from 'react'

const tabParamsName = 'tab'

export function useCurrentTab() {
  const { queryParams, setQueryParams } = useQueryParams()

  const queryParamsTab = queryParams.get(tabParamsName) as Tab | null

  const setCurrentTab = useCallback(
    (tab: Tab) => {
      setQueryParams({ [tabParamsName]: tab })
    },
    [setQueryParams]
  )

  let currentTab = queryParamsTab || defaultTab

  if (!tabs.includes(currentTab)) {
    currentTab = defaultTab
  }

  return { currentTab: currentTab, setCurrentTab: setCurrentTab }
}
