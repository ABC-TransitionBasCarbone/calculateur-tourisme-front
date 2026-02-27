import { Organisation } from '@/types/organisations'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePreventNavigation } from './usePreventNavigation'
import { useUser } from '@/publicodes-state'

type Props = {
  isError: boolean
  organisation: Organisation | undefined
}

export function useOrgaCreationGuard({ isError, organisation }: Props) {
  const router = useRouter()

  const [isGuardInit, setIsGuardInit] = useState(false)
  const [isGuardRedirecting, setIsGuardRedirecting] = useState(false)
  const { region, territory } = useUser()

  const { handleUpdateShouldPreventNavigation } = usePreventNavigation()

  useEffect(() => {
    handleUpdateShouldPreventNavigation(true)
  }, [handleUpdateShouldPreventNavigation])

  useEffect(() => {
    // we only run the guard at mount
    if (isGuardInit) return

    setIsGuardInit(true)

    if (isError) {
      handleUpdateShouldPreventNavigation(false)
      setIsGuardRedirecting(true)
      router.push(`/region/${region}/territoire/${territory}/organisations/connexion`)
      return
    }

    if (organisation?.slug) {
      handleUpdateShouldPreventNavigation(false)
      setIsGuardRedirecting(true)
      router.push(`/region/${region}/territoire/${territory}/organisations/${organisation.slug}`)
      return
    }
  }, [handleUpdateShouldPreventNavigation, isError, isGuardInit, organisation?.slug, region, router, territory])

  return { isGuardInit, isGuardRedirecting }
}
