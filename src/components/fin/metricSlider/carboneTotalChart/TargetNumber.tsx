import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import Arrow from './Arrow'
import { useRule } from '@/publicodes-state'

type Props = {
  isSmall?: boolean
}
export default function TargetNumber({ isSmall }: Props) {

  const { numericValue: travelTime = 0 } = useRule('transport . durée séjour') ?? {};
  const value = Math.round((9200/365)*travelTime);
  const position = (value * 100) / 1000
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2 }}
      className={twMerge(
        'absolute top-8 -translate-x-1/2 lg:top-10',
        isSmall && 'pointer-events-none !opacity-0 !delay-0'
      )}
      style={{ left: `${position}%` }}>
      <div className="absolute top-full mt-1 whitespace-nowrap">
        <strong className="font-black text-secondary-700">{value} kgCO2e,</strong>
        <br />
        <span>
          l'empreinte moyenne d'un français pour {travelTime} jour
        </span>
      </div>
      <Arrow className="h-4 w-4 rotate-180" />
    </motion.div>
  )
}
