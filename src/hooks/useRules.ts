import { getRules } from '@/helpers/modelFetching/getRules'
import { useUser } from '@/publicodes-state'
import { NGCRules } from '@abc-transitionbascarbone/calculateur-tourisme'
import {
  UseQueryResult,
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query'

type Props = {
  isOptim?: boolean
  region?: string
  PRNumber?: string
}

export function useRules(
  { isOptim = true, region = 'FR', PRNumber }: Props = {
    isOptim: true,
    region: 'FR',
  }
): UseQueryResult<NGCRules, Error> {
  const locale = 'fr'
  const { user } = useUser()

  const regionCode =
    user?.region?.code != undefined && user?.region?.code !== ''
      ? user?.region?.code
      : region

  return useQuery({
    queryKey: ['rules', locale, regionCode, isOptim, PRNumber],
    queryFn: () => getRules({ locale, regionCode, isOptim, PRNumber }),
    placeholderData: keepPreviousData,
    staleTime: Infinity, // We don't want to import the rule multiple times
  })
}
