'use client'

import Main from "@/design-system/layout/Main";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Explanations from "./Explanations";

export default function HomepageContent() {
  const [territory, setTerritory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const territory = urlParams.get('territoire');
    setTerritory(territory);

    const storedData = localStorage.getItem('nosgestesclimat::v1');
    if (storedData && territory) {
      const parsedData = JSON.parse(storedData);
      const opinionWayIdExists = parsedData.simulations.some((simulation: { territory: string; }) => simulation.territory === territory);
      if (!opinionWayIdExists) {
        localStorage.clear();
      }
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Main className="lg:-mt-8">
        <Heading />
        <Explanations territory={territory} />
      </Main>
    </>
  )
}
