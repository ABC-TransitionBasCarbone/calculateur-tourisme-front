import Trans from '@/components/translation/Trans'
import Buttons from './heading/Buttons'
import Partners from './heading/Partners'

export default async function Heading() {
  return (
    <>
      <div className="relative flex min-h-[588px] items-center justify-center overflow-hidden bg-gray-100 p-4 md:min-h-[36rem]">
        <div className="relative mb-2 max-w-sm text-center md:mb-0 md:max-w-2xl">
          <h1 className="md:text-5xl">
            <Trans>Connaissez vous l’empreinte carbone de votre séjour ?</Trans>
          </h1>
          <p className="md:text-2xl">
            Obtenez une estimation en seulement 5 minutes !
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
