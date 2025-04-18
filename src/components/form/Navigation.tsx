'use client'

import {
  DEFAULT_FOCUS_ELEMENT_ID,
  QUESTION_DESCRIPTION_BUTTON_ID,
} from '@/constants/accessibility'
import {
  questionClickPass,
  questionClickPrevious,
  questionClickSuivant,
} from '@/constants/tracking/question'
import Button from '@/design-system/inputs/Button'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useMagicKey } from '@/hooks/useMagicKey'
import { useCurrentSimulation, useRule } from '@/publicodes-state'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import { MouseEvent, useCallback, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import SyncIndicator from './navigation/SyncIndicator'

export default function Navigation({
  question,
  tempValue,
  onComplete = () => '',
  isEmbedded,
  gotoPrevQuestion,
  gotoNextQuestion,
  noPrevQuestion,
  noNextQuestion,
  transitionPage,
}: {
  question: DottedName
  tempValue?: number
  onComplete?: () => void
  isEmbedded?: boolean
  gotoPrevQuestion: () => string | undefined
  gotoNextQuestion: (onComplete?: () => void) => string | undefined
  noPrevQuestion: boolean
  noNextQuestion: boolean
  transitionPage?: string
  remainingQuestions?: DottedName[]
}) {
  const { t } = useClientTranslation()

  const { isMissing, plancher, value } = useRule(question)

  const { updateCurrentSimulation } = useCurrentSimulation()

  const isNextDisabled =
    tempValue !== undefined && plancher !== undefined && tempValue < plancher

  // Start time of the question
  //(we need to use question to update the start time when the question changes, but it is not exactly usefull as a dependency)
  const startTime = useMemo(() => {
    if (question) {
      return Date.now()
    }
    return Date.now()
  }, [question])

  const handleGoToNextQuestion = useCallback(
    async (e: KeyboardEvent | MouseEvent) => {
      e.preventDefault()

      const endTime = Date.now()
      const timeSpentOnQuestion = endTime - startTime

      if (isMissing) {
        trackEvent(questionClickPass({ question, timeSpentOnQuestion }))
      } else {
        trackEvent(
          questionClickSuivant({ question, answer: value, timeSpentOnQuestion })
        )
      }

      if (isMissing) {
        updateCurrentSimulation({ foldedStepToAdd: question })
      }

      handleMoveFocus()

      gotoNextQuestion(onComplete)
    },
    [startTime, isMissing, gotoNextQuestion, onComplete, question, value, updateCurrentSimulation]
  )

  useMagicKey({
    gotToNextQuestion: handleGoToNextQuestion,
  })

  const handleMoveFocus = () => {
    // Focus the question title upon question change
    setTimeout(() => {
      const focusedElement =
        // Default : focus the first element focusable in the modified area of the form
        document.getElementById(
          QUESTION_DESCRIPTION_BUTTON_ID
          // Otherwise focus the first input or field button
        ) ??
        document.getElementById(
          DEFAULT_FOCUS_ELEMENT_ID
          // Edge case : mosaics
        ) ??
        document.getElementById(`${DEFAULT_FOCUS_ELEMENT_ID}-0`)

      if (focusedElement) {
        focusedElement?.focus()
      }
    })
  }

  return (
    <div
      className={twMerge(
        'fixed bottom-0 left-0 right-0 z-50 bg-gray-100 py-3',
        isEmbedded && 'static bg-primary-100 p-0'
      )}>
      <SyncIndicator />

      <div
        className={twMerge(
          'relative mx-auto flex w-full max-w-6xl justify-between gap-4 px-4 lg:justify-start',
          isEmbedded && 'justify-start'
        )}>
        <Button
          size="md"
          onClick={() => {
            trackEvent(questionClickPrevious({ question }))

            if (!noPrevQuestion) {
              gotoPrevQuestion()
            }

            handleMoveFocus()
          }}
          disabled={noPrevQuestion}
          color="text"
          className={twMerge('px-3')}>
          {'← ' + t('Précédent')}
        </Button>

        <Button
          color={isMissing ? 'secondary' : 'primary'}
          disabled={isNextDisabled}
          size="md"
          data-cypress-id="next-question-button"
          onClick={handleGoToNextQuestion}>
          {noNextQuestion
            ? t('Terminer')
            : isMissing && !transitionPage
              ? t('Passer la question') + ' →'
              : t('Suivant') + ' →'}
        </Button>
      </div>
    </div>
  )
}
