import Trans from '@/components/translation/Trans'
import { homeClickClassements } from '@/constants/tracking/pages/home'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Kicker from '@/design-system/layout/Kicker'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import Image from 'next/image'

export default async function Amis() {
  const { t } = await getServerTranslation()
  return (
    <div className="flex-1">
      <Image
        src="/images/illustrations/people-playing.png"
        alt={t('Des amis jouant à un jeu de société')}
        width="444"
        height="275"
        className="mb-6 block h-auto max-w-full"
        loading="lazy"
      />
      <Kicker>
        <Trans>Entre amis</Trans>
      </Kicker>
      <h2 className="font-medium md:text-3xl">
        <Trans>Comparez vos résultats</Trans>
      </h2>
      <p className="max-w-sm md:mb-8 md:text-lg">
        <Trans>Faites le test en</Trans>{' '}
        <strong className="text-primary-700">
          <Trans>famille</Trans>
        </strong>
        , <Trans>entre</Trans>{' '}
        <strong className="text-primary-700">
          {' '}
          <Trans>amis</Trans>
        </strong>{' '}
        <Trans>ou</Trans>{' '}
        <strong className="text-primary-700">
          {' '}
          <Trans>collègues</Trans>
        </strong>{' '}
        <Trans>et comparez vos résultats.</Trans>
      </p>
      <ButtonLink
        href="/classements"
        data-cypress-id="classements-link"
        trackingEvent={homeClickClassements}>
        <Trans>Commencer</Trans>
      </ButtonLink>
    </div>
  )
}
