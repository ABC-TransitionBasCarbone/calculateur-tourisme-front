import { useRule } from '@/publicodes-state'

export const useEndPageSharedUrl = () => {
  const { numericValue } = useRule('bilan')

  const params = `?total=${Math.round(numericValue)}`

  const sharedUrl = `${window.location.origin}/partage${params}`

  return { sharedUrl }
}
