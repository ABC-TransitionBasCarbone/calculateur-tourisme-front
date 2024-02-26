'use client'

import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Emoji from '@/design-system/utils/Emoji'
import { useFetchPollData } from '@/hooks/organisations/useFetchPollData'
import { usePathname } from 'next/navigation'
import ExportDataButton from '../ExportDataButton'

export default function SeeDetailedReportAndExport() {
  const pathname = usePathname()

  const { data: pollData } = useFetchPollData()

  return (
    <section className="flex flex-wrap justify-center gap-4 pb-8 md:justify-start">
      <ButtonLink
        size="lg"
        href={`${pathname}/resultats-detailles`}
        className="!text-sm">
        <Emoji className="mr-2">📊</Emoji>
        <Trans>Voir le rapport détaillé</Trans>
      </ButtonLink>

      <ExportDataButton simulationRecaps={pollData?.simulationRecaps ?? []} />
    </section>
  )
}
