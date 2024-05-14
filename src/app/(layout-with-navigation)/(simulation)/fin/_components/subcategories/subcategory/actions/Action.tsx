import Emoji from '@/design-system/utils/Emoji'
import { formatCarbonFootprint } from '@/helpers/formatCarbonFootprint'
import {
  getBackgroundLightColor,
  getBorderColor,
  getTextDarkColor,
} from '@/helpers/getCategoryColorClass'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useLocale } from '@/hooks/useLocale'
import { useCurrentSimulation, useRule } from '@/publicodes-state'
import { DottedName } from '@/publicodes-state/types'
import { twMerge } from 'tailwind-merge'
import ActionButtons from './action/ActionButtons'

const colorClassName = ['200', '100', '50']

type Props = {
  action: DottedName
  index: number
}

export default function Action({ action, index }: Props) {
  const locale = useLocale()
  const { t } = useClientTranslation()

  const { actionChoices } = useCurrentSimulation()

  const isActionChoosen = actionChoices[action] === true

  const { numericValue: total } = useRule('bilan')

  const { icons, title, numericValue, category } = useRule(action)

  const { formattedValue, unit } = formatCarbonFootprint(numericValue, {
    locale,
    t,
  })

  const percent = Math.round((numericValue / total) * 100)
  return (
    <div
      className={twMerge(
        'max-w-80 flex-1 flex-col justify-between rounded-xl border-2 px-3 py-4 md:flex',
        colorClassName[index],
        getTextDarkColor(category),
        isActionChoosen
          ? 'bg-green-100'
          : getBackgroundLightColor(category).replace(
              '100',
              colorClassName[index]
            ),
        isActionChoosen ? 'border-green-600' : getBorderColor(category),
        index === 2 ? 'hidden' : 'flex'
      )}>
      <div className="mb-4">
        <div className="mb-4 flex flex-1 items-center justify-between">
          <Emoji className="inline-flex justify-center">{icons}</Emoji>
          <div
            className={twMerge(
              'whitespace-nowrap rounded-xl border-2 bg-white px-3 py-2 text-xs font-black leading-none lg:text-sm',
              getBorderColor(category)
            )}>
            - {formattedValue} {unit}
          </div>
        </div>
        <div className="mb-3 text-center text-sm font-bold leading-tight lg:text-base">
          {title}
        </div>
        <div className="text-center text-xs">
          <span className="font-black text-secondary-700">{percent} %</span> de
          votre empreinte
        </div>
      </div>
      {!isActionChoosen ? <ActionButtons action={action} /> : null}
    </div>
  )
}
