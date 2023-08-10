'use client'

import TransClient from '@/components/translation/TransClient'
import { IframeOptionsContext } from '@/contexts/IframeOptionsContext'
import { useLang } from '@/contexts/LangContext'
import InlineLink from '@/design-system/inputs/InlineLink'
import { getLocalisedMDX } from '@/helpers/getLocalisedMDX'
import LandingContentEn from '@/locales/pages/en-us/landing.mdx'
import LandingContentFr from '@/locales/pages/fr/landing.mdx'
import { useContext } from 'react'
import ListedAdvantages from './ListedAdvantaged'

// Commented until validation by a native speaker
// import contentEs from '../../locales/pages/es/landing.md'
// import contentIt from '../../locales/pages/it/landing.md'

export default function LandingExplanations() {
	const { isIframe } = useContext(IframeOptionsContext)

	const lang = useLang()

	const LandingContent = getLocalisedMDX({
		dictionnaries: {
			fr: LandingContentFr,
			'en-US': LandingContentEn,
		},
		locale: lang,
	})

	if (isIframe) return null

	return (
		<>
			<div className="bg-primaryLight  py-10">
				<div className="w-full max-w-3xl mx-auto">
					<LandingContent />
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto py-10">
				<h2>
					<TransClient>Ouvert, documenté et contributif</TransClient>
				</h2>
				<ListedAdvantages />
				<h2>
					<TransClient>Des questions ?</TransClient>
				</h2>
				<p>
					<TransClient>
						Retrouvez les réponses aux questions courantes sur notre page{' '}
						<InlineLink href="/questions-frequentes">FAQ</InlineLink>.
					</TransClient>
				</p>
			</div>
		</>
	)
}