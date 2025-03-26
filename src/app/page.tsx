import Header from '@/components/layout/Header'
import Main from '@/design-system/layout/Main'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import Actions from './_components/Actions'
import Amis from './_components/Amis'
import Contributions from './_components/Contributions'
import Explanations from './_components/Explanations'
import Heading from './_components/Heading'
import Organisations from './_components/Organisations'

export async function generateMetadata() {
  const { t } = await getServerTranslation()
  return getMetadataObject({
    title: t(
      "Votre calculateur d'empreinte carbone personnelle - Nos Gestes Climat"
    ),
    description: t(
      'Connaissez-vous votre empreinte sur le climat ? Faites le test et découvrez comment réduire votre empreinte carbone sur le climat.'
    ),
    alternates: {
      canonical: '',
    },
  })
}

export default async function Homepage() {
  return (
    <>
      <Header />
      <Main className="lg:-mt-8">
        <Heading />
        <Explanations />
      </Main>
    </>
  )
}
