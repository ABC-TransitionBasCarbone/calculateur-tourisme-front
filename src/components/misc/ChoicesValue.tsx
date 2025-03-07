import { useRule } from '@/publicodes-state'
import { DottedName, NodeValue } from '@abc-transitionbascarbone/calculateur-tourisme'

type Props = {
  value: NodeValue
  question: DottedName
}
export default function ChoicesValue({ value, question }: Props) {
  const { title, icons } = useRule((question + ' . ' + value) as DottedName)

  return (
    <>
      {icons} {title}
    </>
  )
}
