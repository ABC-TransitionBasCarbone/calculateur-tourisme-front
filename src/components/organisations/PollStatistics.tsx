'use client'

import Trans from '@/components/translation/Trans'
import { SimulationRecap } from '@/types/organisations'
import { FunFacts } from '@abc-transitionbascarbone/calculateur-tourisme'
import DetailedStatistics from './orgaStatistics/DetailedStatistics'
import FunFactsBlock from './orgaStatistics/FunFactsBlock'
import StatisticsBlocks from './orgaStatistics/StatisticsBlocks'

export default function PollStatistics({
  title,
  simulationRecaps,
  simulationRecapsWithoutExtremes,
  funFacts,
}: {
  title?: string | JSX.Element
  simulationRecaps: SimulationRecap[]
  simulationRecapsWithoutExtremes: SimulationRecap[]
  funFacts: FunFacts | undefined
}) {
  const hasAtLeastThreeParticipants = simulationRecaps?.length > 2

  return (
    <>
      <h2>{title ?? <Trans>Statistiques</Trans>}</h2>

      <section className="relative mb-8 flex gap-4">
        <StatisticsBlocks
          simulationRecaps={simulationRecaps}
          simulationRecapsWithoutExtremes={simulationRecapsWithoutExtremes}
        />
      </section>

      {hasAtLeastThreeParticipants && (
        <>
          <FunFactsBlock funFacts={funFacts} className="mb-12" />

          <DetailedStatistics funFacts={funFacts} />
        </>
      )}
    </>
  )
}
