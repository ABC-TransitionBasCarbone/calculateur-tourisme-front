import { useState, useEffect, useMemo } from 'react'

type Props = {
  engine: any
  order: string[] | null
}

export default function useCategories({ engine, order }: Props) {
  const missingVariables = useMemo(
    () => Object.keys(engine.evaluate('bilan').missingVariables),
    [engine]
  )

  const categories = useMemo(
    () =>
      missingVariables
        .reduce(
          (accumulator: any, currentValue: string) =>
            accumulator.includes(currentValue.split(' . ')[0])
              ? accumulator
              : [...accumulator, currentValue.split(' . ')[0]],
          []
        )
        .sort((a: string, b: string) =>
          !order ? 0 : order.indexOf(a) > order.indexOf(b) ? 1 : -1
        ),
    [missingVariables, order]
  )

  const subcategories = useMemo(
    () =>
      categories.reduce(
        (accumulator: object, currentValue: string) => ({
          ...accumulator,
          [currentValue]:
            currentValue === 'services sociétaux'
              ? []
              : engine
                  .getRule(
                    currentValue === 'logement'
                      ? 'logement . impact'
                      : currentValue === 'transport'
                      ? 'transport . empreinte'
                      : currentValue
                  )
                  ?.rawNode?.formule?.somme?.map(
                    (rule) =>
                      (currentValue === 'logement'
                        ? 'logement . impact'
                        : currentValue) +
                      ' . ' +
                      rule
                  ) || [],
        }),
        {}
      ),
    [engine, categories]
  )

  return { categories, subcategories }
}