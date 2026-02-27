'use client'

import { useUser } from '@/publicodes-state'
/**
 * https://github.com/vercel/next.js/discussions/47583
 */
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useQueryParams<T>() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const urlSearchParams = new URLSearchParams(searchParams?.toString())
  const { region, territory } = useUser()

  function setQueryParams(params: Partial<T>) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        urlSearchParams.delete(key)
      } else {
        urlSearchParams.set(key, String(value))
      }
    })

    const search = urlSearchParams.toString()
    const query = search ? `?${search}` : ''
    // replace since we don't want to build a history
    router.replace(`/region/${region}/territoire/${territory}${pathname}${query}`, { scroll: false })
  }

  return { queryParams: searchParams, setQueryParams }
}
