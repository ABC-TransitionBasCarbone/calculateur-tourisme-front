import Link from '@/components/Link'
import Trans from '@/components/translation/Trans'
import { endClickActions } from '@/constants/tracking/pages/end'
import { useEngine, useRule } from '@/publicodes-state'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { DottedName } from '@abc-transitionbascarbone/calculateur-tourisme'
import Action from './actions/Action'
import Carousel
  from '@/app/(simulation)/(large-layout-nosticky)/fin/_components/carbone/subcategories/subcategory/actions/Carousel'
import Button from '@/design-system/inputs/Button'
import { motion } from 'framer-motion'
import Markdown from '@/design-system/utils/Markdown'
import { useState } from 'react';
import { useClientTranslation } from '@/hooks/useClientTranslation'

type Props = {
  subcategory: DottedName
  noNumberedFootprint?: boolean
}

type ActionObject = {
  dottedName: DottedName
  value: number
}

export default function Actions({ subcategory, noNumberedFootprint }: Props) {
  const { getValue } = useEngine()
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useClientTranslation()

  const { title, actions, informations, category, titreInformations, descriptionInformations } = useRule(subcategory)
  const filteredActions = noNumberedFootprint
    ? actions
    : actions?.filter((action) => getValue(action))

  if (!filteredActions?.length) return null
  
  const sortedActions = noNumberedFootprint
    ? filteredActions.sort((a: string) => {
      if (a.includes('voter')) {
        return -1
      }
      return 1
    })
    : filteredActions
      .map((action) => ({
        dottedName: action,
        value: getValue(action) as number,
      }))
      .sort((a: ActionObject, b: ActionObject) =>
        a.value > b.value ? -1 : 1
      )
      .map((actionObject: ActionObject) => actionObject.dottedName)

  const firstThreeActions = sortedActions.slice(0, 3)

  console.log(category)
  let customTitle = ''

  switch (category) {
    case 'transport':
      customTitle = '🚗 Transport'
      break
    case 'séjour':
      customTitle = '🚗 Transport'
      break
    case 'alimentation':
      customTitle = '🍽️ Alimentation'
      break
    case 'logement':
      customTitle = '🏠 Hébergement'
      break
    case 'divers':
      customTitle = '💻 Activités et loisirs'
      break
    default:
      customTitle = '📦 Autre catégorie'
      break
  }

  return (
    <>
      {!noNumberedFootprint && (
        <p className="mb-6">
          <Trans>
            Voici quelques idées pour vous aider à réduire votre impact :
          </Trans>
        </p>
      )}
      <div className="mb-4 flex flex-row-reverse justify-center gap-4">
        {firstThreeActions.map((action, index) => (
          <Action key={action} action={action} index={index} />
        ))}
      </div>
      <p className="mb-6">
        <Trans>
          {titreInformations}
        </Trans>
        {informations && informations?.length > 0 && descriptionInformations ? (
          <Button
            type="button"
            onClick={() => {
              setIsOpen((previsOpen) => !previsOpen)
            }}
            color="secondary"
            size="xs"
            className={`inline-flex ml-2 h-6 w-6 items-center justify-center rounded-full p-0 align-text-bottom font-mono`}
            title={t("Voir plus d'informations")}>
            i
          </Button>
        ) : null}
      </p>
      {isOpen && descriptionInformations ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="mb-3 origin-top rounded-xl border-2 border-primary-50 bg-gray-100 p-3 text-sm">
          <Markdown className="[&>blockquote]:mb-2 [&>blockquote]:mt-0 [&>blockquote]:p-0 [&>blockquote]:text-default [&>p]:mb-2">
            {descriptionInformations}
          </Markdown>{' '}
          <Button
            size="xs"
            color={'secondary'}
            onClick={() => {
              setIsOpen(false)
            }}
            title={t('Fermer')}>
            <Trans>Fermer</Trans>
          </Button>
        </motion.div>
      ) : null}
      <Carousel informations={informations} category={category} />
      <div className="flex justify-center">
        <Link
          onClick={() => trackEvent(endClickActions)}
          href="/actions"
          className="text-center text-xs">
          <Trans>Voir tous les gestes</Trans> : {customTitle}
        </Link>
      </div>
    </>
  )
}
