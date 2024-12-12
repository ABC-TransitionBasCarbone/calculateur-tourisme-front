import React, { useEffect } from 'react';

export const TransitionPage = ({ transitionPage }: { transitionPage: string }) => {
  useEffect(() => {
    if (transitionPage === 'transport') {
      const script = document.createElement('script');
      script.src = "https://impactco2.fr/iframe.js";
      script.async = true;
      script.setAttribute('data-type', 'transport');
      script.setAttribute('data-search', '?theme=default&language=fr&km=100&defaultMode=list');
      script.setAttribute('name', 'impact-co2');

      const target = document.getElementById('impact-co2-container');
      if (target) {
        target.appendChild(script);
      } else {
        console.error("Conteneur non trouvé");
      }

      return () => {
        if (target) {
          target.innerHTML = '';
        }
      };
    }
  }, [transitionPage]);

  return (
    <div>
      <div>{transitionPage}</div>
      <div id="impact-co2-container"></div>
    </div>
  );
};
