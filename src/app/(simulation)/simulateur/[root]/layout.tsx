import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { FormProvider } from '@/publicodes-state'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import { PropsWithChildren } from 'react'

type Props = { params: { root: DottedName } }

export async function generateMetadata({ params }: Props) {

  return getMetadataObject({
    title: 'Mon séjour durable',
    description: "Calculez l'empreinte de votre séjour en 5 minutes !",
    alternates: {
      canonical: `/simulateur/${params.root}`,
    },
  })
}

export default function Layout({ params, children }: PropsWithChildren<Props>) {
  return <FormProvider root={params.root}>{children}</FormProvider>
}
