import { replacePlaceHolders } from '@/constants/territories/questions';
import { TerritoriesType } from '@/utils/territories';
import { DottedName, NGCRule } from '@abc-transitionbascarbone/calculateur-tourisme'
import { utils } from 'publicodes'

export const getRuleTitle = (
  rule: NGCRule & { dottedName: DottedName; titre?: string },
  territory: TerritoriesType
) => {
  return replacePlaceHolders(rule?.titre ?? utils.nameLeaf(rule.dottedName), territory)
}
