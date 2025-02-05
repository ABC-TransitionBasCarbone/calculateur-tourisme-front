import Link from '@/components/Link'
import PasserTestBanner from '@/components/layout/PasserTestBanner'
import Trans from '@/components/translation/Trans'
import Badge from '@/design-system/layout/Badge'
import Title from '@/design-system/layout/Title'
import Markdown from '@/design-system/utils/Markdown'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getPost } from '@/helpers/markdown/getPost'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import { capitalizeString } from '@/utils/capitalizeString'
import { notFound } from 'next/navigation'
import { use } from 'react';
import { headers } from 'next/headers'

type Props = {
  params: { slug: string }
}

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {params: Params}) {
  const headersList = await headers()
  const locale = headersList.get('x-next-i18n-router-locale') || 'fr'
  const { t } = await getServerTranslation(locale)
  const params = use(props.params);
  const slug = params.slug

  const post = await getPost('src/locales/blog/fr/', slug)

  return getMetadataObject({
    title: `${capitalizeString(decodeURI(slug))?.replaceAll(
      '-',
      ' '
    )}, ${t('article du blog - Nos Gestes Climat')}`,
    description: t('Découvrez les articles de blog du site Nos Gestes Climat.'),
    params: { slug },
    image: post?.data?.image,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  })
}

// Composant pour afficher l'article du blog
export default async function BlogPost(props: {params: Params}) {
  const params = use(props.params);
  const slug = params.slug
  const post = await getPost('src/locales/blog/fr/', slug)

  // Récupération de la dernière date de modification depuis GitHub
  const lastEditDate = await fetch(
    `https://api.github.com/repos/incubateur-ademe/nosgestesclimat-site-nextjs/commits?path=src%2Flocales%2Fblog%2Ffr%2F${slug}.mdx&page=1&per_page=1`
  )
    .then((res) => res.json())
    .then((json) => {
      return json[0]?.commit?.committer?.date
    })

  // Si l'article n'existe pas, afficher une page 404
  if (!post) {
    return notFound()
  }

  const { content, data } = post

  return (
    <div className="m-auto max-w-2xl">
      <Link href="/blog" className="mb-8 block text-sm">
        ← <Trans>Retour à la liste des articles</Trans>
      </Link>

      <PasserTestBanner />

      <Title title={data.title} />

      {content ? (
        <>
          <div className="flex flex-wrap"></div>

          <p className="text-sm text-gray-500">
            <Trans>Un article de </Trans>
            <strong>{data?.author}</strong>, <Trans>mis à jour le</Trans>{' '}
            {new Date(lastEditDate ?? data?.date).toLocaleDateString('fr')}
          </p>

          {data?.categories && data?.categories?.split(',')?.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {data.categories.split(',').map((category) => (
                <Badge className="inline-block text-xs" key={category}>
                  {category}
                </Badge>
              ))}
            </div>
          )}

          <Markdown>{content}</Markdown>
        </>
      ) : (
        <Trans>Oups, nous n'avons pas d'article correspondant</Trans>
      )}
    </div>
  )
}
