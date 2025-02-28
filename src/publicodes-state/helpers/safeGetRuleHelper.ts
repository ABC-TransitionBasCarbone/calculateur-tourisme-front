import { DottedName, NGCRuleNode } from '@abc-transitionbascarbone/calculateur-tourisme'
import { Engine } from '../types'

export const safeGetRuleHelper = (
  ruleName: DottedName,
  engineUsed: Engine
): NGCRuleNode | null => {
  let rule = null
  try {
    rule = engineUsed.getRule(ruleName)
  } catch (error) {
    console.warn(error)
    console.log(error)
  }
  return rule
}
