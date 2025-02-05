import Providers from '@/components/providers/Providers'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { getSupportedRegions } from '@/helpers/modelFetching/getSupportedRegions'
import { PropsWithChildren } from 'react'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t("Nos personas d'utilisateurs types - Nos Gestes Climat"),
    description: t(
      "Découvrez les personas d'utilisateurs types qui nous servent à tester le simulateur sous toutes ses coutures."
    ),
    alternates: {
      canonical: '/personas',
    },
  })
}

export default function PersonasLayout({ children }: PropsWithChildren) {
  const supportedRegions = getSupportedRegions()

  return <Providers supportedRegions={supportedRegions}>{children}</Providers>
}
