import { noIndexObject } from '@/constants/metadata'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { FormProvider } from '@/publicodes-state'
import { PropsWithChildren } from 'react'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t('Mon Empreinte Carbone - Nos Gestes Climat'),
    description: t('Découvre mon bilan carbone sur Nos Gestes Climat.'),
    robots: noIndexObject,
    alternates: {
      canonical: '/empreinte',
    },
  })
}

export default function Layout({ children }: PropsWithChildren) {
  return <FormProvider>{children}</FormProvider>
}
