'use client'

import { getMatomoEventVisitViaIframe } from '@/constants/matomo'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { PropsWithChildren, createContext } from 'react'
import { getIsIframe } from '../utils/getIsIframe'

export const IframeOptionsContext = createContext<{ isIframe?: boolean }>({})

const nullDecode = (string: string) =>
	string == null ? string : decodeURIComponent(string)

export const IframeOptionsProvider = ({ children }: PropsWithChildren) => {
	const urlParams = new URLSearchParams(window.location.search)
	const isIframe = getIsIframe()
	const isIframeParameterDefined = urlParams.get('iframe') !== null

	// Si l'on détecte que l'on est dans un iframe sans paramètre iframe défini
	// on essaie de récupérer l'URL du referrer
	if (isIframe && !isIframeParameterDefined) {
		urlParams.set('iframe', '')
		urlParams.set('integratorUrl', document.referrer)
	}

	if (isIframe) {
		trackEvent(
			getMatomoEventVisitViaIframe(
				urlParams.get('integratorUrl') || "Pas d'URL d'intégration"
			)
		)
	}

	const iframeIntegratorOptions = Object.fromEntries(
		[
			'integratorLogo',
			'integratorName',
			'integratorActionUrl',
			'integratorYoutubeVideo',
			'integratorActionText',
		].map((key) => [
			key,
			nullDecode(new URLSearchParams(document.location.search).get(key) ?? ''),
		])
	)
	const finalValue = { ...iframeIntegratorOptions, isIframe }
	return (
		<IframeOptionsContext.Provider value={finalValue}>
			{children}
		</IframeOptionsContext.Provider>
	)
}