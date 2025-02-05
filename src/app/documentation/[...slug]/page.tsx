import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { getRules } from '@/helpers/modelFetching/getRules'
import { getSupportedRegions } from '@/helpers/modelFetching/getSupportedRegions'
import { currentLocale } from 'next-i18n-router'
import DocumentationRouter from './_components/DocumentationRouter'
import DocumentationServer from './_components/documentationRouter/DocumentationServer'
import { use } from 'react'
import { headers } from 'next/headers'

type Params = Promise<{ slug: string[] }>

export async function generateMetadata({ params }: { params: Params }) {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)
  const { slug } = await use(params)

  return getMetadataObject({
    title: t(
      "Documentation, votre simulateur d'empreinte carbone - Nos Gestes Climat"
    ),
    description: t(
      'Notre documentation détaille les calculs qui nous ont permis de calculer votre bilan carbone personnel.'
    ),
    alternates: {
      canonical: `/documentation/${slug.join('/')}`,
    },
  })
}

// The page content is in layout.tsx in order to persist the state
// between the server and the client
export default async function DocumentationPage({
                                                  params,
                                                }: {
  params: Params
}) {
  const { slug } = await use(params)
  const locale = 'fr'

  const supportedRegions = await getSupportedRegions()

  const rules = await getRules({
    isOptim: false,
    locale,
    regionCode: 'FR',
  })

  return (
    <DocumentationRouter
      supportedRegions={supportedRegions}
      rules={rules}
      slug={slug}
      serverComponent={<DocumentationServer slugs={slug} rules={rules} />}
    />
  )
}
