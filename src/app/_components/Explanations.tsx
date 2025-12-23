'use client'

import Trans from '@/components/translation/Trans'
import { homePageTexts } from '@/constants/territories/homePage'
import Title from '@/design-system/layout/Title'

export default function Explanations({ territory }: { territory: keyof typeof homePageTexts | null }) {
  const territoryTexts = territory && homePageTexts[territory] ? homePageTexts[territory] : homePageTexts['default'];
  const explanationsText = territoryTexts.explanations;

  return (
    <> {explanationsText.map((text, index) => <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24" key={`explanations-${index}`}>
      <Title tag="h2" className="font-medium md:text-3xl">
        <Trans>{text.title}</Trans>
      </Title>

      <div className="md:text-lg">
        <Trans>
          {text.description}
        </Trans>
      </div>
      {!!text.button && text.button}
    </div>
    )}
    </>
  )
}
