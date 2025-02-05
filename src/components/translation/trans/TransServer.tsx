'use client'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { TransPropsWithInterpolation } from '@/types/translation'
import { ReactElement, useEffect, useState } from 'react'
import { Trans } from 'react-i18next/TransWithoutContext'
import { currentLocale } from 'next-i18n-router'

export default async function TransServer({
  children,
  i18nKey,
}: TransPropsWithInterpolation): Promise<ReactElement> {
  const [locale, setLocale] = useState<string>('fr')
  useEffect(() => {
    const fetchLocale = async () => {
      const currentLoc = await currentLocale()
      setLocale(currentLoc ?? 'fr')
    }

    fetchLocale()
  }, [])
const { t } = await getServerTranslation(locale)
  return (
    <Trans i18nKey={i18nKey} t={t}>
      {children}
    </Trans>
  )
}
