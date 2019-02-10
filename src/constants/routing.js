export const ROUTING_ACCUEIL = "/";
export const ROUTING_A_PROPOS = "/intervenante";
export const ROUTING_ART_THERAPIE = "/art-therapie";
export const ROUTING_CONTACT = "/contact";
export const ROUTING_MENTIONS_LEGALES = "/mentions-legales";
export const ROUTING_PRESTATIONS = "/prestations";
export const ROUTING_RESEAU = "/reseau";
export const ROUTING_RPS = "/rps";
export const ROUTING_ERROR = "/erreur";

export const LINK_ACCUEIL = "Accueil";
export const LINK_A_PROPOS = "A propos";
export const LINK_ART_THERAPIE = "L'art-thérapie";
export const LINK_CONTACT = "Contact";
export const LINK_MENTIONS_LEGALES = "Mentions légales";
export const LINK_PRESTATIONS = "Prestations";
export const LINK_RESEAU = "Réseau";
export const LINK_RPS = "Les RPS";

export const ROUTER = [
  { routing: ROUTING_ACCUEIL, link: LINK_ACCUEIL, icon: "home", exact: true },
  { routing: ROUTING_ART_THERAPIE, link: LINK_ART_THERAPIE, icon: "palette" },
  { routing: ROUTING_RPS, link: LINK_RPS, icon: "sentiment_dissatisfied" },
  { routing: ROUTING_PRESTATIONS, link: LINK_PRESTATIONS, icon: "business" },
  { routing: ROUTING_A_PROPOS, link: LINK_A_PROPOS, icon: "info" },
  { routing: ROUTING_CONTACT, link: LINK_CONTACT, icon: "mail" },
  { routing: ROUTING_RESEAU, link: LINK_RESEAU, icon: "link" }
]