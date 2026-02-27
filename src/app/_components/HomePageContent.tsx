'use client'

import Main from "@/design-system/layout/Main";
import Heading from "./Heading";
import Explanations from "./Explanations";
import { useUser } from "@/publicodes-state";


export default function HomepageContent() {
  const { territory } = useUser()

  return (
    <>
      <Main className="lg:-mt-8">
        <Heading territory={territory} />
        <Explanations territory={territory} />
      </Main>
    </>
  )
}
