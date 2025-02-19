import ToastDisplay from '@/components/messages/ToastDisplay'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { PropsWithChildren } from 'react'
import { use } from 'react'


type Params = Promise<{ orgaSlug: string }>

export async function generateMetadata({ params }: { params: Params }) {
    const locale = 'fr'
  const { t } = await getServerTranslation(locale)
  const { orgaSlug } = use(params)

  return getMetadataObject({
    title: t('Organisations, mon espace - Nos Gestes Climat'),
    description: t(
      'Accédez à des services sur mesure pour sensibiliser vos partenaires au sein de votre organisation.'
    ),
    alternates: {
      canonical: `/organisations/${orgaSlug}/parametres`,
    },
  })
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ToastDisplay />
    </>
  )
}
