import React, { useEffect, useState } from 'react';
import { ImpactCO2Module } from '@/components/encapsulage/ImpactCO2Module'

export const TransitionPage = ({ transitionPage }: { transitionPage: string }) => {
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    setTitle(transitionPage);
  }, [transitionPage]);

  return (
    <div>
      {transitionPage !== 'divers' &&
        <div>Quelques ordres de grandeur pour comparaison :</div>
      }
      {(() => {
        switch (transitionPage) {
          case 'transport':
            return (
              <ImpactCO2Module
                src="https://impactco2.fr/iframe.js"
                dataType="transport"
                dataSearch="?theme=default&language=fr&km=100&defaultMode=list&modes=tgv,voiturethermique+1,voiturethermique,voitureelectrique+1,voitureelectrique,autocar,moto,ter,avion,intercites"
                name="impact-co2"
              />
            );
          case 'séjour':
            return (
              <ImpactCO2Module
                src="https://impactco2.fr/iframe.js"
                dataType="transport"
                dataSearch="?theme=default&language=fr&km=10&defaultMode=list&comparison=voiturethermique,autocar&modes=intercites,voiturethermique+1,voiturethermique,voitureelectrique+1,voitureelectrique,autocar,marche,velo,veloelectrique,busthermique,tramway,metro,scooter,moto,rer,buselectrique,trottinette,busgnv"
                name="impact-co2"
              />
            );
          case 'alimentation':
            return (
              <ImpactCO2Module
                src="https://impactco2.fr/iframe.js"
                dataType="/alimentation"
                dataSearch="?alimentationCategory=group&theme=default&language=fr"
                name="impact-co2"
              />
            );
          case 'logement':
            return (
              <div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <img
                    src="/images/illustrations/logement-sensibilisation.png"
                    alt=""
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            )
          case 'divers':
            return (
              <div>
                <div>Avant de faire vous faire découvrir l’empreinte de votre séjour, nous vous proposons un petit quizz rapide</div>
                <ImpactCO2Module
                  src="https://impactco2.fr/iframe.js"
                  dataType="quiz"
                  dataSearch="?&language=fr&theme=default"
                  name="impact-co2"
                />
              </div>
            )
          default:
            return <div>{title}</div>;
        }
      })()}
    </div>
  );
};
