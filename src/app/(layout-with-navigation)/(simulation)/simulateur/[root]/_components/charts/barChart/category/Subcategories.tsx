import { useEngine, useForm } from '@/publicodes-state'
import { useMemo } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'

import Subcategory from '@/components/misc/Subcategory'

type Props = {
  category: string
  max: number
}
export default function Subcategories({ category, max }: Props) {
  const { subcategories } = useForm()

  const { getValue, checkIfValid } = useEngine()

  const sortedSubcategories = useMemo(
    () =>
      subcategories[category]
        .filter((subcategory: string) => checkIfValid(subcategory))
        .sort((a: string, b: string) => (getValue(a) > getValue(b) ? -1 : 1)),
    [subcategories, category, getValue, checkIfValid]
  )

  return (
    <Flipper
      flipKey={sortedSubcategories
        .map((subcategory: string) => subcategory)
        .join()}>
      {sortedSubcategories.map((subcategory: string) => (
        <Flipped flipId={subcategory} key={subcategory}>
          <Subcategory subcategory={subcategory} max={max} />
        </Flipped>
      ))}
    </Flipper>
  )
}