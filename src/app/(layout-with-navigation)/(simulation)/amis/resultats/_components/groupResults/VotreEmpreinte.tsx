import Trans from '@/components/translation/Trans'
import { ValueObject } from '@/types/groups'

export default function VotreEmpreinte({
  categoriesFootprints,
  membersLength,
}: {
  categoriesFootprints?: Record<string, ValueObject> | undefined
  membersLength: number
}) {
  console.log(categoriesFootprints)
  return (
    <>
      <h2 className="mb-4 mt-0 text-lg" data-cypress-id="votre-empreinte-title">
        <Trans>Votre empreinte</Trans>
      </h2>
      {membersLength > 1 && (
        <p className="text-gray-500">
          <Trans>Par rapport à la moyenne du groupe.</Trans>
        </p>
      )}
      {/*}
      <ul className="mb-6 mt-6 pl-0">
        {Object.entries(categoriesFootprints ?? {}).reduce(
          (acc, [key, categoryObject]) => {
            if (!(EMOJI_TEXT_MAP as any)[key]) return acc
            return [
              ...acc,
              <li
                key={`cat-${key}`}
                className="flex items-center justify-between border-0 border-b-[1px] border-solid border-gray-200 py-4 last:border-b-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl">
                    <Emoji>{(EMOJI_TEXT_MAP as any)[key].emoji}</Emoji>
                  </div>
                  <div className="ml-4">
                    <div className="text-md font-bold text-gray-900">
                      {(EMOJI_TEXT_MAP as any)[key].text}
                    </div>
                  </div>
                  {membersLength > 1 && (
                    <PercentageDiff value={categoryObject.difference || 0} />
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-[5px] border-[1px] border-solid border-primary-800 bg-primary-100 p-1 text-sm text-primary-500">
                    <strong>
                      {formatValue(categoryObject.value / 1000, {
                        precision: 1,
                      })}
                    </strong>{' '}
                    t
                  </div>
                </div>
              </li>,
            ]
          },
          [] as JSX.Element[]
        )}
      </ul>
        */}
    </>
  )
}
