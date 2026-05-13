import Route404 from '@/components/layout/404'
import Main from '@/design-system/layout/Main'
import { getServerTranslation } from '@/helpers/getServerTranslation'

export async function generateMetadata() {
  const { t } = await getServerTranslation()

  return {
    title: t('404 - Mon séjour durable'),
    description: t(
      "Oups, vous êtes bien sur mon séjour durable, mais cette page n'existe pas."
    ),
    alternates: {
      canonical: '/404',
    },
  }
}

export default function NotFound() {
  return (
    <>
      <Main>
        <Route404 />
      </Main>
    </>
  )
}
