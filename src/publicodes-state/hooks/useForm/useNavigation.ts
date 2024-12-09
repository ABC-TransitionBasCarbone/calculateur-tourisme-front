import getNamespace from '@/publicodes-state/helpers/getNamespace'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import { useMemo, useState } from 'react'

type Props = {
  remainingQuestions: DottedName[]
  relevantQuestions: DottedName[]
  currentQuestion: DottedName | null
  setCurrentQuestion: (question: DottedName | null) => void
}

export default function useNavigation({
  remainingQuestions,
  relevantQuestions,
  currentQuestion,
  setCurrentQuestion,
}: Props) {
  const [transitionPage, setTransitionPage] = useState<string | undefined>(undefined);

  const currentQuestionNamespace = useMemo<string | undefined>(
    () => getNamespace(currentQuestion),
    [currentQuestion]
  )

  const currentQuestionIndex = useMemo<number>(
    () => (currentQuestion ? relevantQuestions?.indexOf(currentQuestion) : 0),
    [relevantQuestions, currentQuestion]
  )

  const noPrevQuestion = useMemo<boolean>(
    () => transitionPage === getNamespace(relevantQuestions[0]),
    [relevantQuestions, transitionPage]
  )
  const noNextQuestion = useMemo<boolean>(
    () =>
      remainingQuestions.length === 0 ||
      (remainingQuestions.length === 1 &&
        remainingQuestions[0] === currentQuestion),
    [currentQuestion, remainingQuestions]
  )

  const isLastQuestionOfCategory = useMemo<boolean>(
    () =>
      getNamespace(relevantQuestions[currentQuestionIndex + 1]) !==
      currentQuestionNamespace,
    [currentQuestionNamespace, currentQuestionIndex, relevantQuestions]
  )

  const isFirstQuestionOfCategory = useMemo<boolean>(
    () =>
      getNamespace(relevantQuestions[currentQuestionIndex - 1]) !==
      currentQuestionNamespace,
    [currentQuestionNamespace, currentQuestionIndex, relevantQuestions]
  )

  const gotoPrevQuestion = (): string | undefined => {
    if (noPrevQuestion) {
      return undefined
    }

    const newCurrentQuestion = relevantQuestions[currentQuestionIndex - 1]

    const currentCategory = getNamespace(relevantQuestions[currentQuestionIndex]);
    const nextCategory = getNamespace(newCurrentQuestion);

    // Si la catégorie change, redirige vers une page intermédiaire
    if (!transitionPage && currentCategory !== nextCategory) {
      setTransitionPage(currentCategory);
      return;
    }

    if (transitionPage) {
      setTransitionPage(undefined)
    }

    setCurrentQuestion(newCurrentQuestion)

    return newCurrentQuestion
  }
  const gotoNextQuestion = (): string | undefined => {
    if (noNextQuestion) {
      return undefined
    }
    if (transitionPage) {
      setTransitionPage(undefined);
      return;
    }

    const newCurrentQuestion = relevantQuestions[currentQuestionIndex + 1]

    const currentCategory = getNamespace(relevantQuestions[currentQuestionIndex]);
    const nextCategory = getNamespace(newCurrentQuestion);

    // Si la catégorie change, redirige vers une page intermédiaire
    if (!transitionPage && currentCategory !== nextCategory) {
      setTransitionPage(nextCategory);
    }

    setCurrentQuestion(newCurrentQuestion)

    return newCurrentQuestion
  }

  return {
    transitionPage,
    setTransitionPage,
    gotoPrevQuestion,
    gotoNextQuestion,
    noPrevQuestion,
    noNextQuestion,
    isFirstQuestionOfCategory,
    isLastQuestionOfCategory,
  }
}
