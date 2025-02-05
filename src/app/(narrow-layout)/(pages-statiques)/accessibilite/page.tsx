import MDXContent from '@/components/mdx/MDXContent'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import accessibilityEn from '@/locales/pages/en/accessibility.mdx'
import accessibilityEs from '@/locales/pages/es/accessibility.mdx'
import accessibilityFr from '@/locales/pages/fr/accessibility.mdx'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)
  return getMetadataObject({
    title: t('Accessibilité - Nos Gestes Climat'),
    description: t(
      "Informations relatives à l'accessibilité de Nos Gestes Climat."
    ),
    alternates: {
      canonical: '/accessibilite',
    },
  })
}

export default function AccessibilityPage() {
  return (
    <MDXContent
      contentEn={accessibilityEn}
      contentFr={accessibilityFr}
      contentEs={accessibilityEs}
    />
  )
}
