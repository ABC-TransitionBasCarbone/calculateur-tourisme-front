import { Engine } from '@/publicodes-state/types'
import { EvaluatedNode, PublicodesExpression } from 'publicodes'

export const safeEvaluateHelper = (
  expr: PublicodesExpression,
  engineUsed: Engine
): EvaluatedNode | null => {
  let evaluation: EvaluatedNode | null = null
  try {
    evaluation = engineUsed.evaluate(expr)
  } catch (error) {
    console.warn(error)
    console.log(error)
  }
  return evaluation
}
