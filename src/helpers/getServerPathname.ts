import { headers } from 'next/headers'

export const getServerPathname = async () => {
  const headersList = await headers()

  return headersList.get('next-url') || ''
}
