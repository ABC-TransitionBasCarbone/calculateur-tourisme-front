import ButtonLink from "@/design-system/inputs/ButtonLink";
import Trans from '@/components/translation/Trans'
import { TerritoriesType } from "../../utils/territories";

type HomePageText = {
  backgroundImage?: string;
  additionnalPartners?: { href: string; src: string; alt: string; width: number; height: number }[];
  explanations: {
    title: string | React.ReactElement;
    description: string | React.ReactElement;
    button?: React.ReactElement;
  }[]
}

export const homePageTexts: Record<TerritoriesType, HomePageText> = {
  'arras-pays-d-artois': {
    backgroundImage: '/images/illustrations/logement.png',
    additionnalPartners: [
      {
        href: 'https://www.academieduclimat.paris/',
        src: '/images/ambassadeurs/academieduclimat.png',
        alt: 'Logo de l\'Académie du Climat',
        width: 600,
        height: 253,
      }
    ],
    explanations: [
      {
        title: 'Je peux changer le titre',
        description: 'Et toute la description aussi - ici c\'est spécifique pour Arras !',
      },
      {
        title: 'On peut mettre des liens tout ca pas de soucis.',
        description: <>
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
        </>,
        button: <ButtonLink
          color="secondary"
          href="/">
          <Trans>Et même config un bouton 🤩</Trans>
        </ButtonLink>
      },
    ]
  },
  'artois-lys': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  audomarois: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'aumale-blangy': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'avesnois-thiérache': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'baie-de-somme': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  boulonnais: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  calaisis: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  cambresis: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  chaunois: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'coeur-des-hauts-de-france': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'compiègne-pierrefonds': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'cote-d-opale': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'creil-halatte': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  dunkerquois: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'flandre-rurale': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'grand-Amiénois': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'grand-Beauvaisis': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'grand-Laonnois': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  hainaut: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'lens-hénin': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  liancourtois: {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'métropole-européenne-de-lille': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'noyonnais-deux-vallées': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'pays-de-valois': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'pévélois-douaisis': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'plateau-picard': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'portes-de-la-champagne': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'saint-quentinois': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'senlis-chantilly': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'soissonnais-valois': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'vexin-sablons': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  'villes-soeurs': {
    explanations: [
      {
        title: '',
        description: '',
      },
    ]
  },
  default: {
    backgroundImage: '/images/illustrations/home-background.jpg',
    explanations: [
      {
        title: 'Pourquoi cet outil ?',
        description: 'Est-ce possible de concilier plaisir et séjour réussi ? De prendre soin de soi, des autres et de la planète ? Nous le pensons ! C’est pourquoi, l’Association pour la transition Bas Carbone et Hauts-de-France Tourisme ont conçu Mon Séjour Durable, afin de s’appuyer sur la notion d’empreinte carbone pour sensibiliser et orienter les comportements et choix d’activités futures vers des alternatives plus durables et plus écologiques. Pensé comme un guide local, Mon Séjour Durable vous aidera à faire le bon choix pour que votre séjour en Hauts-de-France soit réussi et écologique.'
      },
      {
        title: 'A propos du développement de l’outil ?',
        description: <>
          <p>
            Cet outil disponible gratuitement a été développé par l’Association pour la transition Bas Carbone en partenariat avec Hauts-de-France Tourisme et le soutien financier de l'ADEME régionale des Hauts-de-France.
            Cette déclinaison s'appuie librement sur la version officielle de Nos Gestes Climat développée par l'ADEME (<a href="https://www.ademe.fr/">Agence de la transition écologique</a>) en partenariat avec l'ABC (<a href="https://abc-transitionbascarbone.fr/">Association pour la Transition Bas Carbone</a>).
          </p>
          <p>
            Si vous avez des suggestions d’amélioration ou des questions, faites-en nous part  !
          </p>
        </>,
        button: <ButtonLink
          color="secondary"
          href="/">
          <Trans>Contactez-nous</Trans>
        </ButtonLink>
      },
      {
        title: 'Mon Séjour Durable',
        description: <>
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
        </>
      },
    ]
  }
}