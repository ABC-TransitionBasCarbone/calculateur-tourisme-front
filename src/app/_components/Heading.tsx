import Trans from '@/components/translation/Trans'
import Buttons from './heading/Buttons'
import Icons from './heading/Icons'
import Partners from './heading/Partners'

export default async function Heading() {
  return (
    <>
      <div className="relative flex min-h-[588px] items-center justify-center overflow-hidden bg-gray-100 p-4 md:min-h-[36rem]">
        <Icons />
        <div className="relative mb-2 max-w-sm text-center md:mb-0 md:max-w-2xl">
          <h1 className="md:text-5xl">
            <Trans>Connaissez-vous votre empreinte sur le climat ?</Trans>
          </h1>
          <p className="md:text-2xl">
            <Trans>En</Trans>{' '}
            <span className="text-secondary-700">
              <Trans>10 minutes</Trans>
            </span>
            , <Trans>obtenez une estimation</Trans>{' '}
            <br className="hidden lg:inline" />
            <Trans>de votre</Trans>{' '}
            <strong>
              <Trans>empreinte carbone</Trans>
            </strong>
            .
          </p>
          {/*<p className="mb-6 md:mb-8 md:text-2xl">
            <Badge
              tag="span"
              color="secondary"
              size="sm"
              className="align-text-bottom">
              BETA
            </Badge>
            <Trans>Découvrez votre</Trans>{' '}
            <strong>
              <Trans>empreinte eau</Trans>
            </strong>{' '}
            <Trans>à la fin du test !</Trans>
          </p>*/}
          <Buttons />
        </div>
      </div>
      <Partners />
    </>
  )
}
