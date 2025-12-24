'use client'

import Main from "@/design-system/layout/Main";
import { useContext } from "react";
import Heading from "./Heading";
import Explanations from "./Explanations";
import UserContext from '@/publicodes-state/providers/userProvider/context';


export default function HomepageContent() {
  const { territory } = useContext(UserContext)

  return (
    <>
      <Main className="lg:-mt-8">
        <Heading territory={territory} />
        <Explanations territory={territory} />
      </Main>
    </>
  )
}
