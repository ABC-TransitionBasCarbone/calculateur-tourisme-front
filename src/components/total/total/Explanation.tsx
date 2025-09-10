'use client'

import Trans from '@/components/translation/Trans'
import Button from '@/design-system/inputs/Button'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Explanation({
  toggleOpen,
  isFirstToggle,
}: {
  toggleOpen: () => void
  isFirstToggle: boolean
}) {

  const { t } = useClientTranslation()

  const [shouldRender, setShouldRender] = useState(!isFirstToggle)

  useEffect(() => {
    if (isFirstToggle) {
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isFirstToggle])

  if (!shouldRender) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute left-2 top-0 z-50 mx-4 mb-2 w-full max-w-[calc(100%-2rem)] rounded-xl border-2 border-primary-200 bg-gray-100 p-3 pt-2 text-sm md:left-8 md:top-4 lg:w-2/3">
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-full left-8">
        <path
          d="M14 0L27.8564 24H0.143594L14 0Z"
          className=" fill-gray-100 stroke-primary-200 stroke-2"
        />
      </svg>
      <div className="flex justify-end">
        <button
          onClick={toggleOpen}
          className="h-3 w-3 bg-gray-100 text-xl leading-none"
          title={t('Fermer')}>
          ×
        </button>
      </div>

      <p className="mb-2">
        <Trans i18nKey={'components.ScoreExplanation.text.p1'}>
          🧮 Voici votre empreinte provisoire, elle évolue à chaque nouvelle réponse.
        </Trans>
      </p>
      <p className="mb-2">
        <Trans i18nKey={'components.ScoreExplanation.text.p3'}>
          🤔 Si vous passez une question, l’empreinte ne changera pas : une empreinte par défaut sera attribuée.
        </Trans>
      </p>
      <div className="flex justify-end">
        <Button
          size="xs"
          data-cypress-id="understood-explanation-button"
          onClick={toggleOpen}>
          <Trans>J'ai compris</Trans>
        </Button>
      </div>
    </motion.div>
  )
}
