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
import { isCorrectTerritory, TerritoriesType } from '@/utils/territories'
import { initMatomo } from '@/utils/matomo/trackEvent'

type Props = {
  initialRegion: RegionFromGeolocation
}
export default function MainLayoutProviders({
  children,
  initialRegion,
}: PropsWithChildren<Props>) {
  const [territory, setTerritory] = useState<TerritoriesType | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initMatomo()
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const territoryParams = urlParams.get('territoire');

    if (territoryParams && isCorrectTerritory(territoryParams) && territoryParams !== 'default') {
      setTerritory(territoryParams);
      localStorage.setItem('territory', territoryParams);
    } else {
      setTerritory('default');
      localStorage.setItem('territory', 'default');
    }
  }, []);

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
