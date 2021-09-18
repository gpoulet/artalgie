import { ICON_ART_THERAPIE } from '../routing'

export const ARTALGIE = "Artalgie";
export const SLOGAN = "Quand l'art soulage des maux";

export const TELEPHONE = "06 59 23 18 95";
export const TELEPHONE_LINK = "tel:+33659231895";
export const EMAIL = "contact@artalgie.fr";
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const ADDRESS = "14 rue des lauriers - 35750 IFFENDIC";
export const ADDRESS_LINK = "https://maps.google.com/?q=" + ADDRESS;
export const PAGE_FACEBOOK_LINK = "https://www.facebook.com/Artalgie";
export const PAGE_FACEBOOK = PAGE_FACEBOOK_LINK;
export const LINKEDIN_LINK = "https://www.linkedin.com/company/artalgie";
export const LINKEDIN = LINKEDIN_LINK;
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UCrI0K4xURujVaGJzjKg2wxg";
export const YOUTUBE = YOUTUBE_LINK;
export const INSTA_LINK = "https://www.instagram.com/artalgie";
export const INSTA = INSTA_LINK;

export const ADDRESS_CABINET = "14 rue des lauriers à Iffendic";

export const SITE_NATHALIE = "http://www.nathaliepoulet.com"

export const ART_THERAPIE_WIKIPEDIA = "Définition de l'art-thérapie sur Wikipedia";
export const ART_THERAPIE_WIKIPEDIA_LINK = "https://fr.wikipedia.org/wiki/Art-thérapie";

export const FFAT = "FFAT (Fédération française des art-thérapeutes)";
export const FFAT_LINK = "http://ffat-federation.org";
export const FFAT_LOGO = "/images/arttherapie/ffat.png"

export const MINISTERE_TRAVAIL = "Ministère du travail et de l'emploi";
export const MINISTERE_TRAVAIL_LINK = "https://travail-emploi.gouv.fr/sante-au-travail/prevention-des-risques-pour-la-sante-au-travail/article/les-rps-c-est-quoi";
export const ANACT = "Anact (Agence nationale pour l'amélioration des conditions de travail)";
export const ANACT_LINK = "https://www.anact.fr/themes/risques-psychosociaux";
export const AMELI = "Ameli (Assurance maladie)";
export const AMELI_LINK = "https://www.ameli.fr/llle-et-vilaine/entreprise/prevention/risques/risques-psychosociaux";
export const INRS = "INRS : Santé et sécurité au travail";
export const INRS_LINK = "http://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html";

export const ARTEEP = "ARTEEP";
export const ARTEEP_LINK = "http://www.arteep.fr/";
export const FFAT_CODE_DEONTOLOGIE = "Code de déontologie de la FFAT";
export const FFAT_CODE_DEONTOLOGIE_LINK = "http://ffat-federation.org/ethique";
export const SMART = "Coopérative d'entreprises SMART";
export const SMART_LINK = "https://www.smartfr.fr";

export const PHOTOGRAPHE = "Claire Le Fourn";
export const PHOTOGRAPHE_LINK = "https://www.facebook.com/clairelefourn/";

export const AQT = "AQT";
export const AQT_LINK = "http://www.quaisetoiles.fr";
export const ALEXANDRA_SERING = "Alexandra SERINGE";
export const BIJOUTERIE_ETHIQUE = "La Bijouterie Ethique";
export const BIJOUTERIE_ETHIQUE_LINK = "https://labijouterieethique.fr/";
export const ALEXANDRA_SERINGE_LINK = "http://www.alexandraseringe.com";
export const BIB_ET_BOB = "Bib & Bob"
export const BIB_ET_BOB_LINK = "https://bibetbob.fr/"
export const CAROLE_MARIET = "Carole MARIET";
export const CAROLE_MARIET_LINK = "https://www.carole-mariet.fr/";
export const CAUMEIL = "Atelier Caumeil - Joaillerie éthique\n"
export const CAUMEIL_LINK = "https://boutique.caumeil.com/"
export const ECHAPEE_LUDIQUE = "L'Echappée Ludique"
export const ECHAPEE_LUDIQUE_LINK = "https://lechappee-ludique.fr/"
export const HISTOIRE_DE_MOTS = "Histoire de mots"
export const HISTOIRE_DE_MOTS_LINK = "https://bouquinerie-histoiresdemots.fr/"
export const PECHE_MELMA = "Pêche Melma"
export const PECHE_MELMA_LINK = "https://pechemelma.com/"
export const VALERIE_LEROUX = "Valérie LE ROUX";
export const VALERIE_LEROUX_LINK = "http://valerie-leroux.fr";
export const EAFB = "Entreprendre Au Féminin Bretagne";
export const EAFB_LINK = "https://eafb.fr/";
export const FEMMES_DE_BRETAGNE = "Femmes de Bretagne";
export const FEMMES_DE_BRETAGNE_LINK = "http://www.femmesdebretagne.fr/";
export const OHB = "OhHappyBreizh";
export const OHB_LINK = "https://ohhappybreizh.fr/";
export const ETOFFE_DE_MERLIN = "L'étoffe de Merlin";
export const ETOFFE_DE_MERLIN_LINK = "https://www.facebook.com/letoffedemerlin";
export const SACALOR = "Sacalor"
export const SACALOR_LINK = "https://www.sacolorcreations.com/"

export const RPS_LINKS = [{
  label: MINISTERE_TRAVAIL,
  link: MINISTERE_TRAVAIL_LINK,
  image: "/images/rps/ministere-travail.png"
},
  {
    label: ANACT,
    link: ANACT_LINK,
    image: "./images/rps/anact.png"
  },
  {
    label: AMELI,
    link: AMELI_LINK,
    image: "./images/rps/ameli.jpg"
  },
  {
    label: INRS,
    link: INRS_LINK,
    image: "./images/rps/inrs.jpg"
  }];

export interface ContactItem {
  icon: string,
  label: string,
  link: string,
  value: string,
  target: string
}

export const CONTACTS: ContactItem[] = [{
  icon: 'phone',
  label: "Téléphone",
  link: TELEPHONE_LINK,
  value: TELEPHONE,
  target: "_self"
}, {
  icon: 'email',
  label: 'Adresse e-mail',
  link: EMAIL_LINK,
  value: EMAIL,
  target: "_self"
}, {
  icon: ICON_ART_THERAPIE,
  label: 'Cabinet',
  link: ADDRESS_LINK,
  value: ADDRESS,
  target: "_blank"
},
  {
    icon: 'language',
    label: 'LinkedIn',
    link: LINKEDIN_LINK,
    value: LINKEDIN,
    target: "_blank"
  },
  {
    icon: 'camera_alt',
    label: 'Instagram',
    link: INSTA_LINK,
    value: INSTA,
    target: "_blank"
  },
  {
    icon: 'videocam',
    label: 'YouTube',
    link: YOUTUBE_LINK,
    value: YOUTUBE,
    target: "_blank"
  },
  {
    icon: 'thumb_up',
    label: 'Facebook',
    link: PAGE_FACEBOOK_LINK,
    value: PAGE_FACEBOOK,
    target: "_blank"
  }
]

export const SESSIONS_PREVENTION = [
  "Mieux se connaître pour mieux travailler avec les autres",
  "Prendre la parole en public",
  "Prévenir le stress en milieu professionnel",
  "La confiance en soi",
  "La cohésion d'équipe",
  "Accueillir de nouveaux arrivants dans une équipe"];


export const SESSIONS_CURATIF = [
  "L'écoute dans le groupe",
  "La communication dans le groupe",
  "Dépasser les conflits",
  "L'estime de soi",
  "Décompressez, créez",
  "Lâcher-prise"];

export const OUTILS_THERAPEUTIQUES = [
  "théâtre",
  "danse",
  "peinture",
  "terre",
  "dessin",
  "collage",
  "gravure",
  "relaxation"
];

export interface ArtTherapieLinkItem {
  label: string,
  url: string,
  image: string
}

export const ART_THERAPIE_LINKS: ArtTherapieLinkItem[] = [
  {
    label: ART_THERAPIE_WIKIPEDIA,
    url: ART_THERAPIE_WIKIPEDIA_LINK,
    image: "/images/arttherapie/wikipedia.png"
  },
  {
    label: FFAT,
    url: FFAT_LINK,
    image: FFAT_LOGO
  }];

export interface AProposLink {
  label: string,
  url: string,
  image: string
}

export const A_PROPOS_LINKS: AProposLink[] = [
  {
    label: ARTEEP,
    url: ARTEEP_LINK,
    image: '/images/apropos/arteep.jpg'
  },
  {
    label: FFAT_CODE_DEONTOLOGIE,
    url: FFAT_CODE_DEONTOLOGIE_LINK,
    image: FFAT_LOGO
  }
  // ,
  // {
  //   label: SMART,
  //   link: SMART_LINK,
  //   image: '/images/apropos/smart.png'
  // }
];

export interface ReseauLinkItem {
  url: string,
  label: string,
  image: string
}

export const RESEAU_LINKS: ReseauLinkItem[] = [
  {
    label: CAROLE_MARIET,
    url: CAROLE_MARIET_LINK,
    image: '/images/reseau/carole-mariet.png'
  },
  {
    label: CAUMEIL,
    url: CAUMEIL_LINK,
    image: '/images/reseau/caumeil.jpg'
  },
  {
    label: EAFB,
    url: EAFB_LINK,
    image: '/images/reseau/eafb.png'
  },
  {
    label: FEMMES_DE_BRETAGNE,
    url: FEMMES_DE_BRETAGNE_LINK,
    image: '/images/reseau/femmes-de-bretagne.jpeg'
  },
  {
    label: OHB,
    url: OHB_LINK,
    image: '/images/reseau/ohb.png'
  },
  {
    label: ETOFFE_DE_MERLIN,
    url: ETOFFE_DE_MERLIN_LINK,
    image: '/images/reseau/etoffe-de-merlin.jpeg'
  },
  {
    label: AQT,
    url: AQT_LINK,
    image: '/images/reseau/aqt.jpg'
  },
  {
    label: ALEXANDRA_SERING,
    url: ALEXANDRA_SERINGE_LINK,
    image: '/images/reseau/alexandra-seringue.jpg'
  },
  {
    label: VALERIE_LEROUX,
    url: VALERIE_LEROUX_LINK,
    image: '/images/reseau/valerie-leroux.png'
  },
  {
    label: ECHAPEE_LUDIQUE,
    url: ECHAPEE_LUDIQUE_LINK,
    image: '/images/reseau/echappee-ludique.png'
  },
  {
    label: PECHE_MELMA,
    url: PECHE_MELMA_LINK,
    image: '/images/reseau/peche-melma.jpg'
  },
  {
    label: BIJOUTERIE_ETHIQUE,
    url: BIJOUTERIE_ETHIQUE_LINK,
    image: '/images/reseau/bijouterie-ethique.png'
  },
  {
    label: SACALOR,
    url: SACALOR_LINK,
    image: '/images/reseau/sacalor.png'
  },
  {
    label: HISTOIRE_DE_MOTS,
    url: HISTOIRE_DE_MOTS_LINK,
    image: '/images/reseau/histoire-de-mots.jpg'
  },
  {
    label: BIB_ET_BOB,
    url: BIB_ET_BOB_LINK,
    image: '/images/reseau/bib-et-bob.jpg'
  }
]

export const CREATIONS = [
  {
    image: '/images/creations/bonnets.jpg',
    label: 'Bonnets'
  },
  {
    image: '/images/creations/lingettes.jpg',
    label: 'Lingettes'
  },
  {
    image: '/images/creations/charlottes.jpg',
    label: 'Charlottes'
  },
]
