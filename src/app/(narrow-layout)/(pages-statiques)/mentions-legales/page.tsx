import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { LegalNotice } from '@incubateur-ademe/legal-pages-react/LegalNotice'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)

  return getMetadataObject({
    title: t('Mentions légales - Nos Gestes Climat'),
    description: t('Mentions légales du site Nos Gestes Climat.'),
  })
}

export default function MentionsLegalesPage() {
  return (
    <div className="markdown">
      <LegalNotice
        includeBetaGouv
        siteName="Nos Gestes Climat"
        siteUrl={process.env.NEXT_PUBLIC_SITE_URL!}
        licenceUrl="https://github.com/incubateur-ademe/nosgestesclimat-site-nextjs/blob/main/LICENSE"
        privacyPolicyUrl="/politique-de-confidentialite"
        siteHost={{
          name: 'Vercel Inc.',
          address: '440 N Barranca Ave #4133<br/>Covina, CA 91723',
          country: 'États-Unis',
          email: 'privacy@vercel.com',
        }}
      />
    </div>
  )
}
