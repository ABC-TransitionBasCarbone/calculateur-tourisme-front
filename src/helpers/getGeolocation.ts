'use server'

import { RegionFromGeolocation } from '@/publicodes-state/types'
import { SERVER_URL } from '@/constants/urls'
import axios from 'axios'

export async function getGeolocation(): Promise<RegionFromGeolocation> {
  return await axios
    .get(
      `${SERVER_URL}/api/geolocation`
    )
    .then((res) => res.data)
}
