export const ARTALGIE = "Artalgie";

export const TELEPHONE = "06 59 23 18 95";
export const TELEPHONE_LINK = "tel:+33659231895";
export const EMAIL = "contact@artalgie.fr";
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const PAGE_FACEBOOK = "https://www.facebook.com/Artalgie";
export const PAGE_FACEBOOK_LINK = "https://www.facebook.com/Artalgie";

export const SITE_NATHALIE = "http://www.nathaliepoulet.com"

export const MINISTERE_TRAVAIL = "Ministère du travail et de l'emploi";
export const MINISTERE_TRAVAIL_LINK = "https://travail-emploi.gouv.fr/sante-au-travail/prevention-des-risques-pour-la-sante-au-travail/article/les-rps-c-est-quoi";
export const ANACT = "Anact (Agence nationale pour l'amélioration des conditions de travail)";
export const ANACT_LINK = "https://www.anact.fr/themes/risques-psychosociaux";
export const AMELI = "Ameli (Assurance maladie)";
export const AMELI_LINK = "https://www.ameli.fr/llle-et-vilaine/entreprise/prevention/risques/risques-psychosociaux";
export const INRS = "INRS : Santé et sécurité au travail";
export const INRS_LINK = "http://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html";

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
  value: TELEPHONE
}, {
  icon: 'email',
  label: 'Adresse e-mail',
  link: EMAIL_LINK,
  value: EMAIL
}, {
  icon: 'thumb_up',
  label: 'Facebook',
  link: PAGE_FACEBOOK_LINK,
  value: PAGE_FACEBOOK
}
]