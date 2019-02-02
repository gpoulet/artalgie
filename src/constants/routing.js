export const ROUTING_ACCUEIL = "/";
export const ROUTING_CONTACT = "/contact";
export const ROUTING_INTERVENANTE = "/intervenante";
export const ROUTING_LIENS_UTILES = "/liens-utiles";
export const ROUTING_PRECISIONS = "/precisions";
export const ROUTING_PRESTATIONS = "/prestations";
export const ROUTING_ERROR = "/erreur";

export const LINK_ACCUEIL = "Accueil";
export const LINK_CONTACT = "Contact";
export const LINK_INTERVENANTE = "L'intervenante";
export const LINK_LIENS_UTILES = "Liens utiles";
export const LINK_PRECISIONS = "Précisions";
export const LINK_PRESTATIONS = "Prestations";

export const ROUTER = [
  { routing: ROUTING_ACCUEIL, link: LINK_ACCUEIL, icon: "home" },
  { routing: ROUTING_PRECISIONS, link: LINK_PRECISIONS, icon:"palette" },
  { routing: ROUTING_PRESTATIONS, link: LINK_PRESTATIONS, icon: "business" },
  { routing: ROUTING_INTERVENANTE, link: LINK_INTERVENANTE, icon: "face" },
  { routing: ROUTING_LIENS_UTILES, link: LINK_LIENS_UTILES, icon: "link" },
  { routing: ROUTING_CONTACT, link: LINK_CONTACT, icon: "mail" }
]