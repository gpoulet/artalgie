export const ARTALGIE = "Artalgie";

export const TELEPHONE = "06 59 23 18 95";
export const TELEPHONE_LINK = "tel:+33659231895";
export const EMAIL = "contact@artalgie.fr";
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const PAGE_FACEBOOK_LINK = "https://www.facebook.com/Artalgie";
export const PAGE_FACEBOOK = PAGE_FACEBOOK_LINK;
export const LINKEDIN_LINK = "https://www.linkedin.com/company/artalgie/";
export const LINKEDIN = LINKEDIN_LINK;

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

export const CONTACTS = [{
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
  icon: 'thumb_up',
  label: 'Facebook',
  link: PAGE_FACEBOOK_LINK,
  value: PAGE_FACEBOOK,
  target: "_blank"
},
  {
    icon: 'language',
    label: 'LinkedIn',
    link: LINKEDIN_LINK,
    value: LINKEDIN,
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

export const ART_THERAPIE_LINKS = [
  {
    label: ART_THERAPIE_WIKIPEDIA,
    link: ART_THERAPIE_WIKIPEDIA_LINK,
    image: "/images/arttherapie/wikipedia.png"
  },
  {
    label: FFAT,
    link: FFAT_LINK,
    image: FFAT_LOGO
  }];

export const A_PROPOS_LINKS = [
  {
    label: ARTEEP,
    link: ARTEEP_LINK,
    image: '/images/apropos/arteep.jpg'
  },
  {
    label: FFAT_CODE_DEONTOLOGIE,
    link: FFAT_CODE_DEONTOLOGIE_LINK,
    image: FFAT_LOGO
  },
  {
    label: SMART,
    link: SMART_LINK,
    image: '/images/apropos/smart.png'
  }
];
