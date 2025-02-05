import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import ActionDetail from './_components/ActionDetail'
import { use } from 'react'
import { headers } from 'next/headers'

type Params = Promise<{ dottedName: DottedName[] }>

export async function generateMetadata({ params }: { params: Params }) {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
const { t } = await getServerTranslation(locale)
  const { dottedName } = use(params)
  const canonicalUrl = `/actions/${dottedName.join('/')}`

  return getMetadataObject({
    title: t(
      "Actions, suite à votre simulation d'empreinte climat - Nos Gestes Climat"
    ),
    description: t(
      'Découvrez les actions que vous pouvez mettre en place pour réduire votre empreinte carbone.'
    ),
    alternates: {
      canonical: canonicalUrl,
    },
  })
}

export default function ActionDetailPage({ params }: { params: Params }) {
  const { dottedName } = use(params)
  return (
    <div className="mx-auto max-w-[600px]">
      <ButtonLink
        size="sm"
        color="text"
        href="/actions"
        className="flex items-center">
        <span
          role="img"
          className="pr-2 !text-[0.5rem]"
          aria-label="arrow pointing left">
          ◀
        </span>{' '}
        <Trans> Retour à la liste</Trans>
      </ButtonLink>

      <ActionDetail params={{ dottedName }} /> {/* Passage des params à ActionDetail */}
    </div>
  )
}
