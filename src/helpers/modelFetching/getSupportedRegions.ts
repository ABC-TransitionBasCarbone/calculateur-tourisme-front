import { SupportedRegions } from '@abc-transitionbascarbone/calculateur-tourisme'
import supportedRegions from '@abc-transitionbascarbone/calculateur-tourisme/public/supportedRegions.json'

/**
 * This function is used to get the supported regions. It can be called directly from a server component.
 */
export function getSupportedRegions(): SupportedRegions {
  return supportedRegions
}
