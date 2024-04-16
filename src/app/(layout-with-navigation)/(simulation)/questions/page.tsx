import Title from '@/design-system/layout/Title'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import Questions from './_components/Questions'

export async function generateMetadata() {
  const { t } = await getServerTranslation()

  return getMetadataObject({
    title: t('Liste des questions - Nos Gestes Climat'),
    description: t(
      'Calculez votre empreinte sur le climat en 10 minutes chrono. Découvrez les gestes qui comptent vraiment pour le climat.'
    ),
    alternates: {
      canonical: '/questions',
    },
  })
}

export default function QuestionsPage() {
  return (
    <>
      <Title>
        <NGCTrans>Questions</NGCTrans>
      </Title>
      <Questions />
    </>
  )
}
