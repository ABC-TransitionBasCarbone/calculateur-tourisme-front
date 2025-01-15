import React, { useEffect, useState } from 'react';
import { ImpactCO2Module } from '@/components/encapsulage/ImpactCO2Module'

export const TransitionPage = ({ transitionPage }: { transitionPage: string }) => {
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    setTitle(transitionPage);
  }, [transitionPage]);

  return (
    <div>
      {(() => {
        switch (transitionPage) {
          case 'transport':
            return (
              <ImpactCO2Module
                src="https://impactco2.fr/iframe.js"
                dataType="transport"
                dataSearch="?theme=default&language=fr&km=100&defaultMode=list"
                name="impact-co2"
                title="Quelques ordres de grandeur pour comparaison :"
              />
            );
          case 'alimentation':
            return (
              <ImpactCO2Module
                src="https://impactco2.fr/iframe.js"
                dataType="/alimentation"
                dataSearch="?alimentationCategory=group&theme=default&language=fr"
                name="impact-co2"
                title="Quelques ordres de grandeur pour comparaison :"
              />
            );
          case 'logement':
            return (
              <div>
                <div>Quelques ordres de grandeur pour comparaison</div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <img
                    src="/images/illustrations/logement.png"
                    alt=""
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            )
          case 'divers':
            return (
              <div>
                <div>Quelques ordres de grandeur pour comparaison</div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <img
                    src="/images/illustrations/divers.png"
                    alt=""
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            )
          default:
            return <div>{title}</div>;
        }
      })()}
    </div>
  );
};
