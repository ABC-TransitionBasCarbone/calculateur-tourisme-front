'use client'

import ErrorBoundary from '@/components/error/ErrorBoundary'
import { UserProvider } from '@/publicodes-state'
import { RegionFromGeolocation } from '@/publicodes-state/types'
import migrationInstructions from '@abc-transitionbascarbone/calculateur-tourisme/public/migration.json'
import { PropsWithChildren, useEffect, useState } from 'react'
import { IframeOptionsProvider } from './mainLayoutProviders/IframeOptionsContext'
import MainHooks from './mainLayoutProviders/MainHooks'
import { PreventNavigationProvider } from './mainLayoutProviders/PreventNavigationProvider'
import QueryClientProviderWrapper from './mainLayoutProviders/QueryClientProviderWrapper'
import { isCorrectRegion, isCorrectTerritory, isTerritoryFromRegion, RegionType, TerritoriesType } from '@/utils/territories'
import { initMatomo } from '@/utils/matomo/trackEvent'
import { usePathname } from 'next/navigation'

type Props = {
  initialRegion: RegionFromGeolocation
}
export default function MainLayoutProviders({
  children,
  initialRegion,
}: PropsWithChildren<Props>) {
  const [territory, setTerritory] = useState<TerritoriesType | null>(null);
  const [region, setRegion] = useState<RegionType>(RegionType.default);
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname()

  useEffect(() => {
    setMounted(true);
    initMatomo()
  }, []);

  useEffect(() => {
    console.log(pathName)
    const regionFromPath = pathName.match('/region/*') ? pathName.split('/')[2] : null;
    const territoireFromPath = pathName.match('/territoire/*') ? pathName.split('/')[4] : null;

    if (isTerritoryFromRegion(territoireFromPath ?? '', regionFromPath ?? '')) {
      if (regionFromPath && isCorrectRegion(regionFromPath) && regionFromPath !== 'default') {
        setRegion(regionFromPath);
        localStorage.setItem('region', regionFromPath);
      } else {
        setRegion(RegionType.default);
        localStorage.setItem('region', RegionType.default);
      }
      if (territoireFromPath && isCorrectTerritory(territoireFromPath) && territoireFromPath !== 'default') {
        setTerritory(territoireFromPath);
        localStorage.setItem('territory', territoireFromPath);
      } else {
        setTerritory('default');
        localStorage.setItem('territory', 'default');
      }
    } else {
      setTerritory('default');
      localStorage.setItem('territory', 'default');
      setRegion(RegionType.default);
      localStorage.setItem('region', RegionType.default);
    }
  }, [pathName]);

  if (!mounted || !territory) {
    return null;
  }

  return (
    <ErrorBoundary>
      <IframeOptionsProvider>
        <QueryClientProviderWrapper>
          <UserProvider
            storageKey={`monsejourdurable-${territory}`}
            migrationInstructions={migrationInstructions}
            initialRegion={initialRegion}
            territory={territory}
            region={region}
          >
            <PreventNavigationProvider>
              <MainHooks>{children}</MainHooks>
            </PreventNavigationProvider>
          </UserProvider>
        </QueryClientProviderWrapper>
      </IframeOptionsProvider>
    </ErrorBoundary>
  )
}
