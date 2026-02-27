import Trans from '@/components/translation/Trans'
import { profilClickCtaCommencer } from '@/constants/tracking/pages/profil'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Card from '@/design-system/layout/Card'
import ProgressCircle from '@/design-system/utils/ProgressCircle'
import { getLinkToSimulateur } from '@/helpers/navigation/simulateurPages'
import TutorialLink from './_components/TutorialLink'
import { useUser } from '@/publicodes-state'

export default function SimulationNotStarted() {
  const { region, territory } = useUser()
  return (
    <Card className="my-4 flex !w-[35rem] max-w-full flex-1 items-start gap-2 self-start border-none bg-gray-100 md:p-8">
      <p className="w-full text-center md:text-left">
        <span
          role="img"
          aria-label="hole emoji"
          className="mb-2 block text-center text-3xl md:mb-0 md:mr-4 md:inline-block">
          🕳️
        </span>
        <Trans>Vous n'avez pas encore fait le test.</Trans>
      </p>

      <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:items-start">
        <ButtonLink
          href={getLinkToSimulateur({ region, territory })}
          trackingEvent={profilClickCtaCommencer}>
          <ProgressCircle className="mr-2" white />
          <Trans>Faire le test</Trans>
        </ButtonLink>

        <TutorialLink className="w-auto" />
      </div>
    </Card>
  )
}
