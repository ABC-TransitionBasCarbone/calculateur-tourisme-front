import Trans from '@/components/translation/Trans'
import { useRule } from '@/publicodes-state'

export default function DishesNumberInfo() {
  const { numericValue: totalNumberOfPlats } = useRule(
    'ui . nombre de repas par semaine'
  )

  const travelTimeRule = useRule('transport . voyageurs . duree')

  return (
    <>
      <div aria-live="polite" className="mb-2 text-center text-sm">
        {travelTimeRule.value && (
          <span className="text-red-700">
            <Trans>Vous avez dit rester </Trans>
            <strong>
              <strong>{+travelTimeRule.value}</strong>{' '}
            </strong>{' '}
            <Trans>jours, êtes vous sûr de vouloir renseigner </Trans>
            <strong>
              <strong>
                {totalNumberOfPlats < 2 * +travelTimeRule.value
                  ? `moins de ${2 * +travelTimeRule.value}`
                  : `plus de ${2 * +travelTimeRule.value}`}
              </strong>{' '}
            </strong>{' '}
            <Trans>
              repas (soit {totalNumberOfPlats < 2 * +travelTimeRule.value ? 'moins' : 'plus'} de 2 repas par jour).
            </Trans>
          </span>
        )}
      </div>
    </>
  )
}
