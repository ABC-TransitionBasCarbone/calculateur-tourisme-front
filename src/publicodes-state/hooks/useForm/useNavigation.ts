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
    () => currentQuestion === relevantQuestions[0] && !transitionPage,
    [relevantQuestions, currentQuestion, transitionPage]
  )

  const isLastQuestionOfCategory = useMemo<boolean>(
    () =>
      getNamespace(relevantQuestions[currentQuestionIndex + 1]) !==
      currentQuestionNamespace,
    [currentQuestionNamespace, currentQuestionIndex, relevantQuestions]
  )

  const noNextQuestion = useMemo<boolean>(
    () =>
      (!relevantQuestions[currentQuestionIndex + 1] && transitionPage === getNamespace(relevantQuestions[relevantQuestions.length - 1])),
    [relevantQuestions, currentQuestionIndex, transitionPage]
  );



  const isFirstQuestionOfCategory = useMemo<boolean>(
    () =>
      getNamespace(relevantQuestions[currentQuestionIndex - 1]) !==
      currentQuestionNamespace,
    [currentQuestionNamespace, currentQuestionIndex, relevantQuestions]
  )

  const gotoPrevQuestion = (): string | undefined => {
    if (noPrevQuestion) {
      return undefined;
    }

    const newCurrentQuestion = relevantQuestions[currentQuestionIndex - 1];

    const currentCategory = getNamespace(relevantQuestions[currentQuestionIndex]);
    const nextCategory = getNamespace(newCurrentQuestion);

    // Si on revient à une autre catégorie, afficher une page de transition
    if (!transitionPage && currentCategory !== nextCategory) {
      setTransitionPage(nextCategory);
    }

    if (transitionPage) {
      setTransitionPage(undefined);
    }

    setCurrentQuestion(newCurrentQuestion);

    return newCurrentQuestion;
  };

  const gotoNextQuestion = (): string | undefined => {
    if (noNextQuestion) {
      return undefined;
    }

    // Si on est sur une page de transition, passer à la première question de la nouvelle catégorie
    if (transitionPage) {
      setTransitionPage(undefined); // Réinitialiser la page de transition
      const newCurrentQuestion = relevantQuestions[currentQuestionIndex + 1];
      setCurrentQuestion(newCurrentQuestion); // Passer à la première question de la nouvelle catégorie
      return newCurrentQuestion;
    }

    const newCurrentQuestion = relevantQuestions[currentQuestionIndex + 1];
    const currentCategory = getNamespace(relevantQuestions[currentQuestionIndex]);

    // Affiche une page de transition à la fin de la catégorie actuelle
    if (isLastQuestionOfCategory) {
      setTransitionPage(currentCategory); // Transition pour la catégorie actuelle
      return;
    }

    setCurrentQuestion(newCurrentQuestion); // Passer à la question suivante

    return newCurrentQuestion;
  };


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
