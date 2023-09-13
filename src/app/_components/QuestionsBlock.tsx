'use client'

import Trans from '@/components/translation/Trans'
import InlineLink from '@/design-system/inputs/InlineLink'

export default function QuestionsBlock() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-10 pt-4 md:px-8">
      <h2 className="mt-8">
        <Trans>Des questions ?</Trans>
      </h2>
      <p>
        <Trans>
          Retrouvez les réponses aux questions courantes sur notre page{' '}
          <InlineLink href="/questions-frequentes">FAQ</InlineLink>.
        </Trans>
      </p>
    </div>
  )
}
