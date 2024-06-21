'use client'

import Trans from '@/components/translation/Trans'
import { amisCreationEtapeVotreGroupeSuivant } from '@/constants/tracking/pages/amisCreation'
import Button from '@/design-system/inputs/Button'
import EmailInput from '@/design-system/inputs/EmailInput'
import PrenomInput from '@/design-system/inputs/PrenomInput'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useUser } from '@/publicodes-state'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { useRouter } from 'next/navigation'
import { useForm as useReactHookForm } from 'react-hook-form'

type Inputs = {
  administratorName: string
  administratorEmail: string
}

export default function GroupCreationForm() {
  const { t } = useClientTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<Inputs>({
    mode: 'onSubmit',
  })

  const { updateName, updateEmail } = useUser()

  const router = useRouter()

  function onSubmit({ administratorName, administratorEmail }: Inputs) {
    trackEvent(amisCreationEtapeVotreGroupeSuivant)

    // Update user info
    updateName(administratorName ?? '')
    updateEmail(administratorEmail ?? '')

    router.push(
      `/amis/creer/votre-groupe?administratorName=${administratorName}&administratorEmail=${administratorEmail ?? ''}`
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <PrenomInput
        data-cypress-id="group-input-owner-name"
        error={errors.administratorName?.message}
        {...register('administratorName', {
          required: t('Ce champ est requis.'),
        })}
      />

      <div className="my-4">
        <EmailInput
          error={errors.administratorEmail?.message}
          label={
            <span>
              {t('Votre adresse email')}{' '}
              <span className="italic text-secondary-700">
                {' '}
                {t('facultatif')}
              </span>
            </span>
          }
          {...register('administratorEmail', {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Veuillez entrer une adresse email valide',
            },
          })}
        />
      </div>

      <Button type="submit" data-cypress-id="button-create-group">
        {' '}
        <Trans>Continuer</Trans>
      </Button>
    </form>
  )
}