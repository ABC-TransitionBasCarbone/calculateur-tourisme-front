import Card from './Card'
import { twMerge } from 'tailwind-merge'
import { useRule } from '@/publicodes-state'
import { getBackgroundLightColor } from '@/helpers/getCategoryColorClass'

type SlideProps = {
  ruleName: string,
  className?: string
  category: string
  index: number
}
const colorClassName = ['200', '100', '50']

export default function Slide({ ruleName, className, category, index }: SlideProps) {
  const rule = useRule(ruleName)
  let mesure = undefined

  if (rule.value && rule.unite) {
    mesure = rule.value + ' ' + rule.unite
  }

  return (
    <Card
      icon={rule.icons}
      title={rule.title}
      className={twMerge(
        "min-h-[150px] min-w-[30%] ml-4",
        `border-categories-${category}`,
        getBackgroundLightColor(category).replace('100', colorClassName[index]),
        className
      )}
      description={rule.description}
      mesure={mesure}
    />
  )
}
