import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { PropsWithChildren } from 'react'
import FiltersProvider from './_components/FiltersProvider'
import { use } from 'react'
import { headers } from 'next/headers'

type Params = Promise<{ orgaSlug: string; pollSlug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)
  const { orgaSlug, pollSlug } = use(params)

  return getMetadataObject({
    title: t('Organisations, mon espace - Nos Gestes Climat'),
    description: t(
      'Accédez à des services sur mesure pour sensibiliser vos partenaires au sein de votre organisation.'
    ),
    alternates: {
      canonical: `/organisations/${orgaSlug}/campagnes/${pollSlug}`,
    },
  })
}

export default function Layout({ children }: PropsWithChildren) {
  return <FiltersProvider>{children}</FiltersProvider>
}
