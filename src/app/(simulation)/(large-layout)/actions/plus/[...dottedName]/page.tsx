import Route404 from '@/components/layout/404'
import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Markdown from '@/design-system/utils/Markdown'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getPost } from '@/helpers/markdown/getPost'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import { use } from 'react'
import { headers } from 'next/headers'

type Params = Promise<{ dottedName: DottedName[] }>

export async function generateMetadata({ params }: { params: Params }) {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)
  const dottedName = use(params)

  return getMetadataObject({
    title: t(
      "Actions, suite à votre simulation d'empreinte climat - Nos Gestes Climat"
    ),
    description: t(
      'Découvrez les actions que vous pouvez mettre en place pour réduire votre empreinte carbone.'
    ),
  })
}

export default async function ActionPlus({ params }: { params: Params }) {
  const { dottedName } = use(params)

  const action = await getPost(
    `src/locales/actions-plus/fr/`,
    decodeURI(dottedName.join(' . ').replaceAll('-', ' '))
  )

  return (
    <div>
      <div className="mb-8 mt-4 flex flex-wrap gap-4">
        <ButtonLink size="sm" color="text" href={'/actions/plus'}>
          <Trans>◀ Retour à la liste des fiches</Trans>
        </ButtonLink>
        {action ? (
          <ButtonLink size="sm" href={'/actions/' + dottedName.join('/')}>
            <Trans>🧮 Voir le geste climat correspondant</Trans>
          </ButtonLink>
        ) : null}
      </div>
      {action ? <Markdown>{action?.content}</Markdown> : <Route404 />}
    </div>
  )
}
