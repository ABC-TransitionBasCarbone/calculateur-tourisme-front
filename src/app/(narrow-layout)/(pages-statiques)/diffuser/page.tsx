import MDXContent from '@/components/mdx/MDXContent'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import DiffuserEn from '@/locales/pages/en/diffuser.mdx'
import DiffuserEs from '@/locales/pages/es/diffuser.mdx'
import DiffuserFr from '@/locales/pages/fr/diffuser.mdx'


export async function generateMetadata() {
    const locale = 'fr'
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
export const dynamic = "force-dynamic"
