import React, { useEffect, useState } from 'react';
import { ImpactCO2Module } from '@/components/encapsulage/ImpactCO2Module'

export const TransitionPage = ({ transitionPage }: { transitionPage: string }) => {
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    setTitle(transitionPage);
  }, [transitionPage]);

  return (
    <div>
      {transitionPage === 'transport' ? (
        <ImpactCO2Module
          src="https://impactco2.fr/iframe.js"
          dataType="transport"
          dataSearch="?theme=default&language=fr&km=100&defaultMode=list"
          name="impact-co2"
          title="Quelques ordres de grandeur pour comparaison :"
        />
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
};
