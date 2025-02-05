import MDXContent from '@/components/mdx/MDXContent'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import DiffuserEn from '@/locales/pages/en/diffuser.mdx'
import DiffuserEs from '@/locales/pages/es/diffuser.mdx'
import DiffuserFr from '@/locales/pages/fr/diffuser.mdx'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t(
      "Diffuser notre simulateur d'empreinte climat - Nos Gestes Climat"
    ),
    description: t('Diffusez Nos Gestes Climat dans votre organisation.'),
    alternates: {
      canonical: '/diffuser',
    },
  })
}

export default function DiffuserPage() {
  return (
    <MDXContent
      contentEn={DiffuserEn}
      contentFr={DiffuserFr}
      contentEs={DiffuserEs}
    />
  )
}
