import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'

export async function generateMetadata() {
  const { t } = await getServerTranslation()

  return getMetadataObject({
    title: t('Empreinte Climat - Mon séjour durable'),
    description: t(`L'empreinte climat, qu'est-ce que c'est ?`),
    alternates: {
      canonical: '/empreinte-climat',
    },
  })
}

export default function AProposPage() {
  return null
}
