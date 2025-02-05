import Title from '@/design-system/layout/Title'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import NorthStarIframe from './_components/NorthStarIframe'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t('Nos statistiques "phares" - Nos Gestes Climat'),
    description: t(
      "Observez nos l'évolution de nos deux mesures d'impact principales."
    ),
    alternates: {
      canonical: '/northstar',
    },
  })
}

export default async function NorthStarPage() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  const title = t('Statistiques Northstar')

  return (
    <div>
      <Title title={title} />

      <p>
        {t(
          'Le chargement prend parfois plusieurs minutes, visualiser ce dashboard demande un peu de patience ! 🕙'
        )}
      </p>

      <NorthStarIframe />
    </div>
  )
}
