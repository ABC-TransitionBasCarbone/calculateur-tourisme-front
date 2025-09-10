import Ademe from '@/components/images/partners/Ademe'
import Marianne from '@/components/images/partners/Marianne'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from '../Link'
import { getServerTranslation } from '@/helpers/getServerTranslation'

export default async function Footer({ className = '' }) {
  const { t } = await getServerTranslation()

  return (
    <footer
      className={twMerge(
        'relative flex flex-col items-center gap-4 bg-gray-100 p-4 !pb-32 sm:p-8 md:mb-0',
        className,
      )}>
      <div className="flex w-full flex-col justify-between gap-2 md:max-w-5xl md:flex-row md:gap-12">
        <div className="flex flex-row items-center gap-4">
          <Link href="https://abc-transitionbascarbone.fr" target="_blank">
            <Image
              src="/images/misc/logo-abc-web.webp"
              alt={t("Logo de l'Association pour la transition Bas Carbone")}
              width="90"
              height="30"
              className="h-auto w-20"
            />
          </Link>
          <Link href="https://www.tourisme-en-hautsdefrance.com/" target="_blank">
            <Image
              src="/images/misc/logo-hdf.png"
              alt={t("Logo de Haut de France tourisme")}
              width="600"
              height="253"
              className="h-auto w-32"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Marianne className="h-auto w-12 md:w-auto" />

          <Link href="https://ademe.fr" target="_blank">
            <Ademe className="h-auto w-10 md:w-auto" />
          </Link>
        </div>
      </div>
    </footer >
  )
}
