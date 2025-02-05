import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import StatsContent from './_components/StatsContent'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t("Nos Statistiques d'utilisation - Nos Gestes Climat"),
    description: t(
      "Observez l'évolution de l'impact de Nos Gestes Climat en mesures chiffrées."
    ),
    alternates: {
      canonical: '/stats',
    },
  })
}

export default function Dashboard() {
  return <StatsContent />
}
