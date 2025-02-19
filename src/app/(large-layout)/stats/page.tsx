import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import StatsContent from './_components/StatsContent'


export async function generateMetadata() {
    const locale = 'fr'
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
export const dynamic = "force-dynamic"
