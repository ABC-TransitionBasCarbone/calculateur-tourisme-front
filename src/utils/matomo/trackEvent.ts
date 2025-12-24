/* eslint-disable @typescript-eslint/no-unused-vars */
// const shouldUseDevTracker = process.env.NODE_ENV === 'development'

declare global {
  interface Window {
    _paq: any[]
    _mtm: any[]
  }
}

export const trackEvent = (args: (string | null)[]) => {
  // if (shouldUseDevTracker || !window?._paq) {
  //   console.debug(args.join(' => '))
  //   return
  // }

  // // Pass a copy of the array to avoid mutation
  // window?._paq?.push([...args])
  return;
}

export const trackPageView = (url: string) => {
  // if (shouldUseDevTracker || !window?._paq) {
  //   console.debug('trackPageView => ' + url)
  //   return
  // }

  // window?._paq?.push(['setCustomUrl', url])
  // window?._paq?.push(['setDocumentTitle', document?.title])

  // // remove all previously assigned custom variables, requires Matomo (formerly Piwik) 3.0.2
  // window?._paq?.push(['deleteCustomVariables', 'page'])
  // window?._paq?.push(['setPagePerformanceTiming', 0])

  // window?._paq?.push(['trackPageView'])
  return;
}

export const initMatomo = () => {
  const _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = process.env.NEXT_PUBLIC_MATOMO_URL ?? '';

  if (!s || !s.parentNode) {
    return;
  }
  s.parentNode.insertBefore(g,s);
}
