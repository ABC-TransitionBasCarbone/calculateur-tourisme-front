import Footer from '@/components/layout/Footer'
import Logo from '@/components/misc/Logo'
import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Main from '@/design-system/layout/Main'
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Logo />
      </header>
      <Main>
        <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 pb-8 text-center md:mx-auto md:w-full  md:max-w-6xl md:items-start md:px-8 md:pb-10 md:text-left">
          <ButtonLink href="/simulateur/bilan" color="secondary" size="sm">
            <Trans>← Revenir au test</Trans>
          </ButtonLink>
          {children}
        </div>
      </Main>
      <Footer />
    </>
  )
}
