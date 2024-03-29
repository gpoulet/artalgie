import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const ARTALGIE = "Artalgie";
export const SLOGAN = "Quand l'art soulage des maux";

export const TELEPHONE = "06 59 23 18 95";
export const TELEPHONE_LINK = "tel:+33659231895";
export const EMAIL = "contact@artalgie.fr";
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const ADDRESS = "14 rue des lauriers - 35750 IFFENDIC";
export const ADDRESS_LINK = "https://maps.google.com/?q=" + ADDRESS;

export const ADDRESS_CABINET = "14 rue des lauriers à Iffendic";

export const SITE_NATHALIE = "http://www.nathaliepoulet.com"

export const ART_THERAPIE_WIKIPEDIA = "Définition de l'art-thérapie sur Wikipedia";
export const ART_THERAPIE_WIKIPEDIA_LINK = "https://fr.wikipedia.org/wiki/Art-thérapie";

export const SFAT = "SFAT (Syndicat Français des Arts-thérapeutes\n)";
export const SFAT_LINK = "http://ffat-federation.org";
export const SFAT_LOGO = "/images/arttherapie/sfat.png"

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
export const SFAT_CODE_DEONTOLOGIE = "Code de déontologie du SFAT";
export const SFAT_CODE_DEONTOLOGIE_LINK = "http://ffat-federation.org/ethique";
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
export const ARTALGIE_CREATIONS = "https://artalgie-creations.com";

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
  icon: IconDefinition,
  label: string,
  link: string,
  value: string,
  target: string
}

export const CONTACTS: ContactItem[] = [{
  icon: faPhoneAlt,
  label: "Téléphone",
  link: TELEPHONE_LINK,
  value: TELEPHONE,
  target: "_self"
}, {
  icon: faEnvelope,
  label: 'Adresse e-mail',
  link: EMAIL_LINK,
  value: EMAIL,
  target: "_self"
}, {
  icon: faMapMarkerAlt,
  label: 'Cabinet',
  link: ADDRESS_LINK,
  value: ADDRESS,
  target: "_blank"
},
]

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
    label: SFAT,
    url: SFAT_LINK,
    image: SFAT_LOGO
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
    label: SFAT_CODE_DEONTOLOGIE,
    url: SFAT_CODE_DEONTOLOGIE_LINK,
    image: SFAT_LOGO
  }
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
