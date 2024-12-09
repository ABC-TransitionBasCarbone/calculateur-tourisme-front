import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'

export function getSubcatsOfCategory(
  category: DottedName,
  subcategories: DottedName[] | undefined
): DottedName[] {
  return (
    subcategories?.filter((subcategory) => subcategory?.startsWith(category)) ??
    []
  )
}
