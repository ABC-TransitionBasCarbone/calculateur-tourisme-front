import Trans from '@/components/translation/Trans'
import { formatCarbonFootprint } from '@/helpers/formatters/formatCarbonFootprint'
import { getColorAtPosition } from '@/helpers/getColorOfGradient'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useRule } from '@/publicodes-state'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { CountUp } from 'use-count-up'

type Props = {
  total?: number
  isSmall?: boolean
}

export default function TotalNumber({ total, isSmall }: Props) {
  const { t } = useClientTranslation()

  const { numericValue } = useRule('bilan')

  const usedValue = total ?? numericValue

  const { formattedValue, unit } = formatCarbonFootprint(usedValue, {
    t,
    localize: false,
  })

  const originPosition = (usedValue / 1000 / 12) * 100

  const position = useMemo(() => {
    if (originPosition <= 0) {
      return 0
    }
    if (originPosition >= 100) {
      return 100
    }
    return originPosition
  }, [originPosition])

  const color = getColorAtPosition(position / 100)
  const cssColor = `rgba(${color['r']},${color['g']},${color['b']},${color['a']})`

  return (
    <motion.div
      initial={{ opacity: 0, x: isSmall ? '1rem' : '-400%' }}
      animate={{ opacity: 1, x: isSmall ? '1rem' : '-50%' }}
      transition={{ duration: 1.5 }}
      className="absolute bottom-10 z-10 transition-transform duration-300"
      style={{ left: '50%', color: cssColor }}>
      <div
        className={twMerge(
          'absolute bottom-full mb-1 origin-top whitespace-nowrap text-right font-medium transition-all duration-300 left-1/2 -translate-x-1/2',
          isSmall
            ? 'translate-y-2 scale-75 lg:translate-y-3 lg:scale-50'
            : 'scale-100'
        )}>
        <strong className="bottom-7 right-full -translate-x-4 text-6xl font-black leading-none lg:bottom-7 lg:text-8xl">
          <CountUp
            isCounting
            end={Number(formattedValue)}
            duration={1.5}
            updateInterval={0.033}
            easing="linear"
            decimalSeparator=","
            thousandsSeparator=" "
          />
        </strong>{' '}
        <span className="text-5xl leading-[3rem] lg:text-6xl lg:leading-tight">
          {unit}
        </span>
        <br />
        <span className="text-lg lg:text-xl">
          <Trans>de</Trans> CO₂e
        </span>
      </div>
    </motion.div>
  )
}
