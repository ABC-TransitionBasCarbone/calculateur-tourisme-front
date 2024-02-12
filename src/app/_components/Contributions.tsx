'use client'

import Link from '@/components/Link'
import Trans from '@/components/translation/Trans'
import Card from '@/design-system/layout/Card'
import Kicker from '@/design-system/layout/Kicker'
import Emoji from '@/design-system/utils/Emoji'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useState } from 'react'
import Background from './organisations/Background'

export default function Contributions() {
  const { t } = useClientTranslation()

  const [isHover, setIsHover] = useState(false)
  return (
    <div className="relative mb-16 py-12 md:py-24">
      <Background direction={isHover ? 'right' : 'left'} />
      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-8">
        <Kicker>
          <Trans>Ouvert, documenté et contributif</Trans>
        </Kicker>
        <h2 className="mb-8 font-medium md:text-3xl">
          <Trans>Apportez votre pierre au simulateur de référence</Trans>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-7">
          <Card
            tag={Link}
            href="/nouveautes"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="flex-1 flex-row items-center gap-4 py-8 text-inherit no-underline md:flex-col"
            data-cypress-id="nouveautes-link">
            <Emoji className="text-3xl">🔍</Emoji>
            <p className="mb-0">
              <Trans>Le</Trans>{' '}
              <span className="text-primary-500 underline">
                <Trans>code source est ouvert</Trans>
              </span>
              , <Trans>le site est amélioré régulièrement.</Trans>
            </p>
          </Card>
          <Card
            tag={Link}
            href="/documentation"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="flex-1 flex-row items-center gap-4 py-8 text-inherit no-underline md:flex-col"
            data-cypress-id="documentation-link">
            <Emoji className="text-3xl">👀</Emoji>
            <p className="mb-0">
              <Trans>L'intégralité du</Trans>{' '}
              <span className="text-primary-500 underline">
                <Trans>calcul est documenté en ligne</Trans>
              </span>{' '}
              <Trans>pour les curieux et les experts.</Trans>
            </p>
          </Card>
          <Card
            tag={Link}
            href="/contact"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="flex-1 flex-row items-center gap-4 py-8 text-inherit no-underline md:flex-col"
            data-cypress-id="contact-link">
            <Emoji className="text-3xl">🖋️</Emoji>
            <p className="mb-0">
              {t('Une idée\u202f? Une correction\u202f? Une remarque\u202f?')}{' '}
              <span className="text-primary-500 underline">
                {t('Toute contribution est la bienvenue\u202f!')}
              </span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}