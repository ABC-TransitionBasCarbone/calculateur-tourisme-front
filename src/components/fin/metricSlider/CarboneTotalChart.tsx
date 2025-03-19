'use client'

import TotalNumber from './carboneTotalChart/TotalNumber'

type Props = {
  total?: number
  isSmall?: boolean
}
export default function CarboneTotalChart({ total, isSmall }: Props) {
  return (
    <div className="py-4 lg:py-8">
      <div className="relative mx-auto mb-16 mt-32 w-full md:w-[100%] lg:mt-36">
        <TotalNumber total={total} isSmall={isSmall} />
      </div>
    </div>
  )
}
