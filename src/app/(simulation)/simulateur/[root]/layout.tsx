import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { FormProvider } from '@/publicodes-state'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import { PropsWithChildren } from 'react'
import { use } from 'react'


type Params = Promise<{ root: DottedName }>
type Props = {
  params: Promise<{ root: DottedName }>
}
export async function generateMetadata({ params }: { params: Params }) {
    const locale = 'fr'
  const { t } = await getServerTranslation(locale)
  const { root } = use(params)

  return getMetadataObject({
    title: t('Simulateur d’empreinte climat - Nos Gestes Climat'),
    description: t(
      'Calculez votre empreinte sur le climat en 10 minutes chrono. Découvrez les gestes qui comptent vraiment pour le climat.'
    ),
    alternates: {
      canonical: `/simulateur/${root}`,
    },
  })
}

export default function Layout({ params, children }: PropsWithChildren<Props>) {
  const { root } = use(params)

  return <FormProvider root={root}>{children}</FormProvider>
}
