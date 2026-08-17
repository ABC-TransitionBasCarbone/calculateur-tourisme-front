'use client'

import Trans from '@/components/translation/Trans'
import { homePageTexts } from '@/constants/territories/homePage'
import { TerritoriesType } from '@/utils/territories';
import Title from '@/design-system/layout/Title'

const getExplanationsText = (territory: TerritoriesType) => {
  const territoryInfos = homePageTexts[territory];
  const generalInfos = homePageTexts['general'];

  if (territory === 'general') {
    return generalInfos.explanations;
  }

  if (territoryInfos.overrideExplanations) {
    return territoryInfos.explanations ?? generalInfos.explanations;
  }

  return [...territoryInfos.explanations ?? [], ...generalInfos.explanations];
}

export default function Explanations({ territory }: { territory: TerritoriesType }) {
  const explanationsText = getExplanationsText(territory);

  return (
    <>
      {explanationsText.map((text, index) =>
        <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24" key={`explanations-${index}`}>
          <Title tag="h2" className="font-medium md:text-3xl">
            <Trans>{text.title}</Trans>
          </Title>

          <div className="md:text-lg text-justify">
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
