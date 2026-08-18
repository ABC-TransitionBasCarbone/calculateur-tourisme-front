import '@/locales/initClient'
import '@/locales/initServer'
import { dir } from 'i18next'
import { getServerLocale } from '@/helpers/getServerLocale'
import localFont from 'next/font/local'
import Script from 'next/script'
import { PropsWithChildren } from 'react'
import MainLayoutProviders from './_components/MainLayoutProviders'
import './globals.css'
import Footer from '@/components/layout/Footer'
import ErrorModal from '@/components/error/ErrorModal'

export const dynamic = 'force-dynamic'

export const marianne = localFont({
  src: [
    {
      path: '../../public/fonts/Marianne-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Marianne-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Marianne-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Marianne-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Marianne-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Marianne-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-marianne',
})

export default async function RootLayout({ children }: PropsWithChildren) {
  try {
    const lang = await getServerLocale()

    const initialRegion = { "name": "France", "code": "FR" }

    return (
      <html lang={lang ?? ''} dir={dir(lang ?? '')}>
        <head>
          <meta
            name="google-site-verification"
            content="oQ9gPKS4kocrCJP6CoguSkdIKKZ6ilZz0aQw_ZIgtVc"
          />

          <meta property="twitter:card" content="summary_large_image" />

          <link rel="manifest" href="../manifest.webmanifest" />

          <meta name="theme-color" content="#4949ba" />

        </head>

        <body
          className={`${marianne.className} bg-white text-default transition-colors duration-700`}>
          <Script id="script-user-agent">{`
            const b = document.documentElement;
            b.setAttribute('data-useragent', navigator.userAgent);
          `}</Script>

          <MainLayoutProviders initialRegion={initialRegion}>
            {children}
            <Footer />
          </MainLayoutProviders>

          <div id="modal" />
        </body>
      </html>
    )
  } catch (error) {
    console.log(error)
    return (
      <html lang="fr">
        <body className={`${marianne.className} bg-white text-default`}>
          <div className="flex h-screen flex-col items-center justify-center">
            <ErrorModal />
          </div>
        </body>
      </html>
    )
  }
}
