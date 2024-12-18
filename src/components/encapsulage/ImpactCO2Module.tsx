import React, { useEffect } from 'react';

interface ImpactCO2ModuleProps {
  src: string;
  dataType: string;
  dataSearch: string;
  name: string;
  title: string;
}

export const ImpactCO2Module = ({
                                src,
                                dataType,
                                dataSearch,
                                name,
                                title }: ImpactCO2ModuleProps) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.setAttribute('data-type', dataType);
    script.setAttribute('data-search', dataSearch);
    script.setAttribute('name', name);

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
  }, [src, dataType, dataSearch, name]);

  return (
    <div>
      <div>{title}</div>
      <div id="impact-co2-container"></div>
    </div>
  );
}
