'use server'
import { headers } from 'next/headers'

export const getServerLocale = async (): Promise<string | null> => {
  return (await headers()).get('x-next-i18n-router-locale')
}
