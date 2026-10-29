import i18nConfig from '@/i18nConfig'
import { NextRequest, NextResponse } from 'next/server'

export default function i18nMiddleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const pathLocale = i18nConfig.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  const detectedLocale = i18nConfig.localeDetector?.(request)
  const locale = pathLocale ?? cookieLocale ?? detectedLocale ?? i18nConfig.defaultLocale
  const headers = new Headers(request.headers)

  headers.set('x-next-i18n-router-locale', locale)

  const response = pathLocale
    ? NextResponse.rewrite(
        new URL(
          `${pathname.slice(`/${pathLocale}`.length) || '/'}${search}`,
          request.url
        ),
        { request: { headers } }
      )
    : NextResponse.next({ request: { headers } })

  response.headers.set('x-next-i18n-router-locale', locale)
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', sameSite: 'lax' })

  return response
}
