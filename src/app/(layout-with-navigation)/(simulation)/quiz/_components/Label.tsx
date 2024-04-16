import Link from '@/components/Link'
import Title from '@/design-system/layout/Title'
import { formatCarbonFootprint } from '@/helpers/formatCarbonFootprint'
import { useEndPage } from '@/hooks/navigation/useEndPage'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useRule } from '@/publicodes-state'
import { DottedName } from '@/publicodes-state/types'
import { AnswerType } from '@/types/quiz'

type Props = {
  choices: DottedName[]
  isAnswerCorrect: AnswerType
  isAnswerValidated: boolean
}

export default function Label({
  choices,
  isAnswerCorrect,
  isAnswerValidated,
}: Props) {
  const { t } = useClientTranslation()

  const { getLinkToEndPage } = useEndPage()

  const { title, numericValue } = useRule(choices[0])

  const { formattedValue, unit } = formatCarbonFootprint(numericValue)

  // If the answer is not yet validated, we display the question
  if (!isAnswerValidated) {
    return (
      <div className="mb-2">
        <Title className="text-lg md:text-2xl">
          {t('Une devinette pour finir\u202f!')}{' '}
          <br className="hidden md:inline" />
          <NGCTrans>D’après vous, quel est</NGCTrans>{' '}
          <span className="text-secondary-700">
            <NGCTrans>votre</NGCTrans>
          </span>{' '}
          {t('poste le plus important\u202f?')}
        </Title>
      </div>
    )
  }

  const WrongComponent = () => (
    <>
      <h1 className="mb-4 text-lg md:text-2xl">{t('Loupé\u202f!')}&nbsp;😓</h1>
      <p className="md:text-lg">
        <NGCTrans>Avec</NGCTrans>{' '}
        <strong className="text-secondary-200">
          {formattedValue} <NGCTrans>{unit}</NGCTrans>
        </strong>
        , {t('le poste')}{' '}
        <span className="text-secondary-200">{title?.toLowerCase()}</span>{' '}
        {t('est votre poste le plus important\u202f!')}{' '}
        <br className="hidden md:inline" />
        <Link
          className="text-white hover:text-secondary-200 focus:text-secondary-200"
          href={getLinkToEndPage()}>
          <NGCTrans>Découvrez vos résultats détaillés</NGCTrans>
        </Link>
      </p>
    </>
  )

  const AlmostComponent = () => (
    <>
      <h1 className="mb-4 text-lg md:text-2xl">
        {t('Presque\u202f!')}&nbsp;🙃
      </h1>
      <p className="md:text-lg">
        <NGCTrans>Avec</NGCTrans>{' '}
        <strong className="text-secondary-200">
          {formattedValue} <NGCTrans>{unit}</NGCTrans>
        </strong>
        , {t('le poste')}{' '}
        <span className="text-secondary-200">{title?.toLowerCase()}</span>{' '}
        {t('est votre poste le plus important\u202f!')}{' '}
        <br className="hidden md:inline" />
        <Link
          className="text-white hover:text-secondary-200 focus:text-secondary-200"
          href={getLinkToEndPage()}>
          <NGCTrans>Découvrez vos résultats détaillés</NGCTrans>
        </Link>
      </p>
    </>
  )

  const CorrectComponent = () => (
    <>
      <h1 className="mb-4 text-lg md:text-2xl">
        {t('Bien vu\u202f!')}&nbsp;👌
      </h1>
      <p className="md:text-lg">
        <NGCTrans>Effectivement, avec</NGCTrans>{' '}
        <strong className="text-secondary-200">
          {formattedValue} <NGCTrans>{unit}</NGCTrans>
        </strong>
        , {t('le poste')}{' '}
        <span className="text-secondary-200">{title?.toLowerCase()}</span>{' '}
        {t('est votre poste le plus important\u202f!')}{' '}
        <br className="hidden md:inline" />
        <Link
          className="text-white hover:text-secondary-200 focus:text-secondary-200"
          href={getLinkToEndPage()}>
          <NGCTrans>Découvrez vos résultats détaillés</NGCTrans>
        </Link>
      </p>
    </>
  )

  return (
    <div className="relative mb-4 overflow-hidden rounded-xl bg-primary-700 p-4 text-white">
      {isAnswerCorrect === 'correct' ? <CorrectComponent /> : null}
      {isAnswerCorrect === 'almost' ? <AlmostComponent /> : null}
      {isAnswerCorrect === 'wrong' ? <WrongComponent /> : null}
    </div>
  )
}
