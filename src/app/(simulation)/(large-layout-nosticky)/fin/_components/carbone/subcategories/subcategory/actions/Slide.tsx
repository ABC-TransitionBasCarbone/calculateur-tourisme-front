import Card from './Card'
import { twMerge } from 'tailwind-merge'
import { useRule } from '@/publicodes-state'

type SlideProps = {
  ruleName: string,
  className?: string
  category: string
}

export default function Slide({ ruleName, className, category }: SlideProps) {
  const rule = useRule(ruleName)
  const intensiteCouleur = rule.intensiteCouleur ?? 200
  let mesure = undefined

  if (rule.value && rule.unite){
    mesure = rule.value + ' ' + rule.unite
  }

  return (
    <Card
      icon={rule.icons}
      title={rule.title}
      className={twMerge(
        "min-h-[150px] min-w-[30%] ml-4",
        `border-categories-${category}`,
        `bg-${category}-${intensiteCouleur}`,
        className
      )}
      description={rule.description}
      mesure={mesure}
    />
  )
}
