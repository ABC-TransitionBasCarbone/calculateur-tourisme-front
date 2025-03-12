'use client'

import MetricSlider from '@/components/fin/MetricSlider'
import IframeDataShareModal from '@/components/iframe/IframeDataShareModal'
import CategoriesAccordion from '@/components/results/CategoriesAccordion'
import Trans from '@/components/translation/Trans'
import { carboneMetric, eauMetric } from '@/constants/metric'
import Title from '@/design-system/layout/Title'
import { useEndGuard } from '@/hooks/navigation/useEndGuard'
import { useSimulationIdInQueryParams } from '@/hooks/simulation/useSimulationIdInQueryParams'
import { useCurrentMetric } from '@/hooks/useCurrentMetric'
import { Metric } from '@/publicodes-state/types'
import React, { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'
import Carbone from './_components/Carbone'
import FinPageSkeleton from './skeleton'
import ShareBlock from './_components/ShareBlock'
import { ImpactCO2Module } from '@/components/encapsulage/ImpactCO2Module'

const titles: Record<Metric, ReactElement> = {
  [carboneMetric]: <Trans>carbone</Trans>,
  [eauMetric]: <Trans>eau</Trans>,
}

export default function FinPage() {
  // Guarding the route and redirecting if necessary
  const { isGuardInit, isGuardRedirecting } = useEndGuard()

  const { simulationIdInQueryParams } = useSimulationIdInQueryParams()

  const { currentMetric } = useCurrentMetric()

  // If the simulationIdInQueryParams is set, it means that the simulation is not loaded yet
  if (!isGuardInit || isGuardRedirecting || !!simulationIdInQueryParams)
    return <FinPageSkeleton />

  return (
    <div className="relative">
      <IframeDataShareModal />

      {/* <Poll /> */}

      <div>
        <Title tag="h1">
          <Trans>L'empreinte de mon séjour</Trans>
        </Title>
      </div>

      <MetricSlider />

      <ImpactCO2Module
        src="https://impactco2.fr/iframe.js"
        dataType="comparateur"
        dataSearch="?value=100"
        name="impact-co2"
      />

      <div className="relative flex flex-col-reverse gap-16 lg:flex-row lg:gap-10">
        <div className="relative flex flex-1 flex-col gap-16 lg:mt-7">
          <div
            className={twMerge(
              'transition-opacity duration-500',
              currentMetric === carboneMetric
                ? 'relative opacity-100'
                : 'pointer-events-none absolute top-0 opacity-0'
            )}>
            <Carbone />
          </div>

          <div id="categories-block">
            <Title tag="h2" className="text-lg lg:text-2xl">
              <Trans>Le détail de mon empreinte</Trans>{' '}
              <strong className="text-secondary-700">
                {titles[currentMetric]}
              </strong>
            </Title>
            <CategoriesAccordion metric={currentMetric} />
          </div>

          <ShareBlock />
        </div>
      </div>
    </div>
  )
}
