import { twMerge } from 'tailwind-merge'
import Emoji from '@/design-system/utils/Emoji'
import { getBorderColor, getTextDarkColor } from '@/helpers/getCategoryColorClass'
import Markdown from '@/design-system/utils/Markdown'

type CardProps = {
  title?: string
  className?: string
  icon?: string
  percent?: number
  category?: string
  isSelected?: boolean
  hide?: boolean
  description?: string
  mesure?: string
  showPercentFallback?: boolean
}

export default function Card({
  title,
  className,
  icon,
  percent,
  category,
  isSelected = false,
  hide = false,
  description,
  mesure,
  showPercentFallback = false
}: CardProps) {
  if (hide) return null

  return (
    <div
      className={twMerge(
        'flex-1 flex-col justify-between rounded-xl border-2 px-3 pb-4 pt-6',
        'max-w-80 lg:flex',
        category ? getTextDarkColor(category) : '',
        isSelected ? 'bg-green-100 border-green-600' : category ? getBorderColor(category) : '',
        className
      )}
    >
      <div className="mb-4">
        {icon && (
          <div className="mb-2 flex flex-1 items-center justify-center">
            <Emoji className="inline-flex justify-center">{icon}</Emoji>
          </div>
        )}
        <div className="text-center text-sm font-bold leading-tight lg:text-base">
          <Markdown>{title ?? ''}</Markdown>
        </div>
      </div>
      <div className="text-center text-base leading-tight">
        {percent !== undefined ? (
          <div className="text-center text-base leading-tight">
            <Markdown className="block text-2xl font-black text-secondary-700">
              {percent.toString()}
            </Markdown>
            <Markdown> % de votre empreinte</Markdown>
          </div>
        ) : showPercentFallback ? (
          <div className="text-center text-base leading-tight">
            <Markdown className="block text-2xl font-black text-secondary-700">
              👏👏👏
            </Markdown>
          </div>
        ) : null}
      </div>
      {description !== undefined && (
        <Markdown className="text-center text-base leading-tight">
          {description ?? ''}
        </Markdown>
      )}
      {mesure !== undefined && (
        <div className="text-center text-base leading-tight">
          <Markdown className="block text-2xl font-black text-secondary-700">
            {mesure ?? ''}
          </Markdown>
        </div>
      )}
    </div>
  )
}
