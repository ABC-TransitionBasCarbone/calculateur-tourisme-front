'use client'

import { getLocalisedMDX } from '@/helpers/getLocalisedMDX'
import { MDXProps } from 'mdx/types'
import { currentLocale } from 'next-i18n-router'
import { JSX, useEffect, useState } from 'react'

type Props = {
  contentFr: (props: MDXProps) => JSX.Element
  contentEn?: (props: MDXProps) => JSX.Element
  contentEs?: (props: MDXProps) => JSX.Element
}

export default function MDXContent({ contentFr, contentEn, contentEs }: Props) {
  const [locale, setLocale] = useState<string>('fr')

  useEffect(() => {
    const fetchLocale = async () => {
      const currentLoc = 'fr'
      setLocale(currentLoc ?? 'fr')
    }

    fetchLocale()
  }, [])

  const Content = getLocalisedMDX({
    dictionnaries: {
      fr: contentFr,
      en: contentEn || contentFr,
      es: contentEs || contentFr,
    },
    locale: locale ?? 'fr',
  })

  return (
    <div className="markdown">
      <Content />
    </div>
  )
}
