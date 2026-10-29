/* eslint-disable @typescript-eslint/no-unused-vars */
// const shouldUseDevTracker = process.env.NODE_ENV === 'development'

declare global {
  interface Window {
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
  if (!window?._mtm) {
    return
  }

  window._mtm.push({
    event: 'mtm.PageView',
    'page.url': url,
    'page.title': document.title,
  })
}

export const initMatomo = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const _mtm = (window._mtm = window._mtm || [])
  _mtm.push({ 'mtm.startTime': Date.now(), event: 'mtm.Start' })
  const d = document
  const g = d.createElement('script')
  const s = d.getElementsByTagName('script')[0]
  g.async = true;
  g.src = process.env.NEXT_PUBLIC_MATOMO_URL ?? ''

  if (!s || !s.parentNode) {
    return
  }
  s.parentNode.insertBefore(g, s)
}
