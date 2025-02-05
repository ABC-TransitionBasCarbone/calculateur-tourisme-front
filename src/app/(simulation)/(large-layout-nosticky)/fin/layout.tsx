import { noIndexObject } from '@/constants/metadata'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { PropsWithChildren } from 'react'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t(
      "Vos résultats, simulateur d'empreinte climat - Nos Gestes Climat"
    ),
    description: t(
      "Vos résultats de tests de notre simulateur d'empreinte carbone."
    ),
    robots: noIndexObject,
    alternates: {
      canonical: '/fin',
    },
  })
}

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>
}
