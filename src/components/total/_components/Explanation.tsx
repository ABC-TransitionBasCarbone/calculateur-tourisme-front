'use client'

import Link from '@/components/Link'
import TransClient from '@/components/translation/TransClient'
import Button from '@/design-system/inputs/Button'
import { useForm } from '@/publicodes-state'

type Props = { toggleOpen: any }

export default function Explanation({ toggleOpen }: Props) {
  const { progression } = useForm()

  return (
    <div className="relative mb-2 mt-6 rounded-lg border-4 border-primary p-4 pt-2">
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-full left-8 md:left-1/2 md:-translate-x-1/2 ">
        <path d="M14 0L27.8564 24H0.143594L14 0Z" className=" fill-primary" />
      </svg>

      <div className="flex justify-end">
        <button onClick={toggleOpen} className="text-3xl leading-none">
          ×
        </button>
      </div>
      {progression === 0 ? (
        <p className="mb-2 md:mb-4">
          <TransClient i18nKey={'components.ScoreExplanation.text.p1'}>
            🧮 Voici votre score de départ, calculé à partir de réponses
            attribuées à l'avance à chaque question ! Il évoluera à chaque
            nouvelle réponse.
          </TransClient>
        </p>
      ) : (
        <p className="mb-2 md:mb-4">
          <TransClient i18nKey={'components.ScoreExplanation.text.p2'}>
            🧮 Voici votre score provisoire, il évolue à chaque nouvelle réponse
            !
          </TransClient>
        </p>
      )}
      <p className="mb-2 md:mb-4">
        <TransClient i18nKey={'components.ScoreExplanation.text.p3'}>
          🤔 Si vous répondez "je ne sais pas" à une question, le score ne
          changera pas : une valeur par défaut vous est attribuée.
        </TransClient>
      </p>
      <p className="mb-2 md:mb-4">
        <TransClient i18nKey={'components.ScoreExplanation.text.p4'}>
          💡 Nous améliorons le calcul et ses valeurs par défaut{' '}
          <Link href="/nouveautés">tous les mois</Link>!
        </TransClient>
      </p>
      <div className="flex justify-end">
        <Button onClick={toggleOpen}>J'ai compris</Button>
      </div>
    </div>
  )
}
