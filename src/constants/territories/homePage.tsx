import ButtonLink from "@/design-system/inputs/ButtonLink";
import Trans from '@/components/translation/Trans'
import { TerritoriesType } from "../../utils/territories";

type HomePageText = {
  backgroundImage?: { src: string, width: number, height: number };
  additionnalPartners?: { href: string; src: string; alt: string; width: number; height: number; smallWidth?: boolean }[];
  overrideExplanations?: boolean;
  explanations?: {
    title: string | React.ReactElement;
    description: string | React.ReactElement;
    button?: React.ReactElement;
  }[]
}

export const homePageTexts: Record<TerritoriesType, HomePageText> & Record<'general', Required<Omit<HomePageText, 'additionnalPartners'>>> = {
  'arras-pays-d-artois': {
    // Exemple d'utilisation
    // backgroundImage: '/images/illustrations/logement.png',
    // additionnalPartners: [
    //   {
    //     href: 'https://www.academieduclimat.paris/',
    //     src: '/images/ambassadeurs/academieduclimat.png',
    //     alt: 'Logo de l\'Académie du Climat',
    //     width: 600,
    //     height: 253,
    //   }
    // ],
    // explanations: [
    //   {
    //     title: 'Je peux changer le titre',
    //     description: 'Et toute la description aussi - ici c\'est spécifique pour Arras !',
    //   },
    //   {
    //     title: 'On peut mettre des liens tout ca pas de soucis.',
    //     description: <>
    //       <p>
    //         Développé par l’ABC et Hauts-de-France Tourisme
    //       </p>
    //       <p>
    //         <a href="https://abc-transitionbascarbone.fr/">L’ABC</a>, au cœur de la lutte contre le changement climatique depuis 2011, sensibilise, forme, fédère et donne des moyens d’action concrets aux organisations et aux citoyens pour réussir leur transition bas carbone.
    //       </p>
    //       <p>
    //         <a href="https://www.tourisme-en-hautsdefrance.com/">Hauts-de-France Tourisme</a>, <span style={{ fontWeight: 'bold' }}>est vecteur d’image et de notoriété de la région
    //           Hauts-de-France au travers du tourisme, en France et à l’international.</span> Il intervient au cœur d’un écosystème qui associe les différents territoires de la région,
    //         les filières et les acteurs du tourisme dans une relation de proximité et de terrain et en adéquation avec la politique Rev3 du conseil régional des Hauts-de-France.
    //       </p>
    //     </>,
    //     button: <ButtonLink
    //       color="secondary"
    //       href="/">
    //       <Trans>Et même config un bouton 🤩</Trans>
    //     </ButtonLink>
    //   },
    // ]
  },
  'artois-lys': {},
  audomarois: {},
  'aumale-blangy': {},
  'avesnois-thierache': {
    backgroundImage: {
      src: '/images/territoires/avesnois-thierache/fond-ecran.jpg',
      width: 5472,
      height: 3648,
    },
    additionnalPartners: [
      {
        href: 'https://www.tourisme-avesnois.com/',
        src: '/images/territoires/avesnois-thierache/logo-avesnois.png',
        alt: 'Logo de l\'Avesnois',
        width: 600,
        height: 253,
      },
      {
        href: 'https://www.tourisme-thierache.fr/',
        src: '/images/territoires/avesnois-thierache/logo-thierache.png',
        alt: 'Logo de la Thiérache',
        width: 600,
        height: 253,
        smallWidth: true,
      }
    ],
    overrideExplanations: false,
    explanations: [
      {
        title: 'Pour un séjour durable en Avesnois-Thiérache',
        description: <>
          <p>
            Au cœur d'un territoire préservé, entre bocages, forêts, vallées verdoyantes, villages de caractère et patrimoine remarquable, l'Avesnois et la Thiérache vous invitent à profiter d’un séjour éco-responsable. De la forêt de Mormal aux célèbres églises fortifiées de Thiérache, en passant par les paysages vallonnés et les savoir-faire locaux, cette destination offre un cadre idéal pour se ressourcer au plus près de la nature.
          </p>
          <p>
            Terres de bocage et de patrimoine vivant, l'Avesnois et la Thiérache se découvrent au rythme de la marche, du vélo avec l’EuroVelo3 et le Réseau Points Nœuds.
          </p>
          <p>
            Chaque geste compte pour préserver la richesse de ces territoires, leurs paysages, leur biodiversité et leurs produits dont le maroilles AOP est l’emblème.
          </p>
          <p>
            Le Parc naturel régional de l’Avesnois, véritable poumon vert, invite à la découverte d’une biodiversité exceptionnelle et de paysages parmi les plus préservés de la région.
          </p>
          <p>
            L’Avesnois et la Thiérache constituent une destination idéale pour se ressourcer, explorer et vivre une expérience authentique et durable !
          </p>
        </>
      },
    ]
  },
  'baie-de-somme': {},
  boulonnais: {},
  calaisis: {},
  cambresis: {},
  chaunois: {},
  'coeur-des-hauts-de-france': {},
  'compiègne-pierrefonds': {},
  'cote-d-opale': {},
  'creil-halatte': {},
  dunkerquois: {},
  'flandre-rurale': {},
  'grand-Amiénois': {},
  'grand-Beauvaisis': {},
  'grand-Laonnois': {},
  hainaut: {},
  'lens-hénin': {},
  liancourtois: {},
  'métropole-européenne-de-lille': {},
  'noyonnais-deux-vallées': {},
  'pays-de-valois': {},
  'pévélois-douaisis': {},
  'plateau-picard': {},
  'portes-de-la-champagne': {},
  'saint-quentinois': {},
  'senlis-chantilly': {},
  'soissonnais-valois': {},
  'vexin-sablons': {},
  'villes-soeurs': {},
  general: {
    backgroundImage: {
      src: '/images/illustrations/home-background.jpg',
      width: 3992,
      height: 2992,
    },
    overrideExplanations: false,
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