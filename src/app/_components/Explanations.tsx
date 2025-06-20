import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Title from '@/design-system/layout/Title'

export default async function Explanations() {
  return (
    <>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>Pourquoi cet outil ?</Trans>
        </Title>

        <p className="md:text-lg">
          <Trans>
            Est-ce possible de concilier plaisir et séjour réussi ? De prendre soin de soi, des autres et de la planète ? Nous le pensons ! C’est pourquoi, l’Association pour la transition Bas Carbone et Hauts-de-France Tourisme ont conçu Mon Séjour Durable, afin de s’appuyer sur la notion d’empreinte carbone pour sensibiliser et orienter les comportements et choix d’activités futures vers des alternatives plus durables et plus écologiques. Pensé comme un guide local, Mon Séjour Durable vous aidera à faire le bon choix pour que votre séjour en Hauts-de-France soit réussi et écologique.
          </Trans>
        </p>
      </div>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>A propos du développement de l’outil ?</Trans>
        </Title>

        <div className="md:text-lg">
          <Trans>
            <p>
              Cet outil disponible gratuitement a été développé par l’Association pour la transition Bas Carbone avec le soutien de Hauts-de-France Tourisme.
              Cette déclinaison s'appuie librement sur la version officielle de Nos Gestes Climat développée par l'ADEME (<a href="https://www.ademe.fr/">Agence de la transition écologique</a>) en partenariat avec l'ABC (<a href="https://abc-transitionbascarbone.fr/">Association pour la Transition Bas Carbone</a>).
            </p>
            <p>
              Si vous avez des suggestions d’amélioration ou des questions, faites-en nous part  !
            </p>
          </Trans>
        </div>
        <ButtonLink
          color="secondary"
          href="/">
          <Trans>Contactez-nous</Trans>
        </ButtonLink>
      </div>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>Mon Séjour Durable</Trans>
        </Title>

        <div className="md:text-lg">
          <Trans>
            <p>
              Développé par l’ABC et Hauts-de-France Tourisme
            </p>

            <p>
              <a href="https://abc-transitionbascarbone.fr/">L’ABC</a>, au cœur de la lutte contre le changement climatique depuis 2011, sensibilise, forme, fédère et donne des moyens d’action concrets aux organisations et aux citoyens pour réussir leur transition bas carbone.
            </p>

            <p>
              <a href="https://www.tourisme-en-hautsdefrance.com/">Hauts-de-France Tourisme</a>, <span style={{ fontWeight: 'bold' }}>est vecteur d’image et de notoriété de la région
                Hauts-de-France au travers du tourisme, en France et à l’international.</span> Il intervient au cœur d’un écosystème qui associe les différents territoires de la région,
              les filières et les acteurs du tourisme dans une relation de proximité et de terrain et en adéquation avec la politique Rev3 du conseil régional des Hauts-de-France.
            </p>
          </Trans>
        </div>
      </div>
    </>
  )
}
