import { Markdown } from '@/components/utils/markdown'
import { useTranslation } from 'react-i18next'

import { getMarkdownInCurrentLang, Lang } from '@/locales/translation'
import AutoCanonicalTag from '../utils/AutoCanonicalTag'

export type PageProps = {
	markdownFiles: Array<[Lang, string]>
	// Information about the page metadata
	title?: string
	description?: string
	image?: string
}

export default ({ markdownFiles, title, description, image }: PageProps) => {
	const { i18n } = useTranslation()
	const lang: Lang = i18n.language as Lang

	const content = getMarkdownInCurrentLang(markdownFiles, lang)

	return (
		<section className="ui__ container">
			{title && description && (
				<Meta title={title} description={description} image={image} />
			)}
			<AutoCanonicalTag />

			<Markdown children={content} />
		</section>
	)
}