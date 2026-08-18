import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { LegalNotice } from '@incubateur-ademe/legal-pages-react/LegalNotice'

export async function generateMetadata() {
  const { t } = await getServerTranslation()

  return getMetadataObject({
    title: t('Mentions légales - Nos Gestes Climat'),
    description: t('Mentions légales du site Nos Gestes Climat.'),
  })
}

export default function MentionsLegalesPage() {
  return (
    <div className="markdown">
    </div>
  )
}
