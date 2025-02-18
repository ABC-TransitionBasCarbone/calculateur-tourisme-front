import Trans from '@/components/translation/Trans'
import { useRule } from '@/publicodes-state'

export default function DishesNumberInfo() {
  const { numericValue: totalNumberOfPlats } = useRule(
    'ui . nombre de repas par semaine'
  )

  const { numericValue: travelTime = 0 } = useRule('transport . durée séjour') ?? {};

  return (
    <>
      <div aria-live="polite" className="mb-2 text-center text-sm">
        {travelTime !== 0 && totalNumberOfPlats !== 2 * travelTime && (
          <span className="text-red-700">
            <Trans>Vous avez dit rester </Trans>
            <strong>
              <strong>{travelTime}</strong>{' '}
            </strong>{' '}
            <Trans>jours, êtes vous sûr de vouloir renseigner </Trans>
            <strong>
              <strong>
                {totalNumberOfPlats < 2 * travelTime
                  ? `moins de ${2 * travelTime}`
                  : `plus de ${2 * travelTime}`}
              </strong>{' '}
            </strong>{' '}
            <Trans>
              repas (soit {totalNumberOfPlats < 2 * travelTime ? 'moins' : 'plus'} de 2 repas par jour).
            </Trans>
          </span>
        )}
      </div>
    </>
  )
}
