'use client'

import Main from "@/design-system/layout/Main";
import { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import Explanations from "./Explanations";
import UserContext from '@/publicodes-state/providers/userProvider/context';


export default function HomepageContent() {
  const [mounted, setMounted] = useState(false);
  const { territory } = useContext(UserContext)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !territory) {
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
