'use client'

import Trans from '@/components/translation/Trans'
import InlineLink from '@/design-system/inputs/InlineLink'
import { getLinkToSimulateur } from '@/helpers/navigation/simulateurPages'
import { useCurrentSimulation, useUser } from '@/publicodes-state'

export default function DoTheTest() {
  const { progression } = useCurrentSimulation()
  const { region, territory } = useUser()

  if (progression === 0) {
    return (
      <div>
        <Trans>Vous n'avez pas encore débuté votre test,</Trans>{' '}
        <InlineLink href={getLinkToSimulateur({ region, territory })}>
          <strong>
            <Trans>lancez-vous !</Trans>
          </strong>
        </InlineLink>
      </div>
    )
  }

  return (
    <div>
      <Trans>Vous avez commencé votre test,</Trans>{' '}
      <InlineLink href={getLinkToSimulateur({ region, territory })}>
        <strong>
          {' '}
          <Trans>cliquez ici pour le reprendre !</Trans>
        </strong>
      </InlineLink>
    </div>
  )
}
