export const ROUTING_ACCUEIL = "/";
export const ROUTING_A_PROPOS = "/a-propos";
export const ROUTING_ART_THERAPIE = "/art-therapie";
export const ROUTING_CABINET = "/cabinet";
export const ROUTING_CREATIONS = "/creations";
export const ROUTING_CONTACT = "/contact";
export const ROUTING_MENTIONS_LEGALES = "/mentions-legales";
export const ROUTING_PRESTATIONS = "/prestations";
export const ROUTING_RESEAU = "/reseau";
export const ROUTING_RPS = "/rps";
export const ROUTING_ERROR = "/erreur";

export const LINK_ACCUEIL = "Accueil";
export const LINK_A_PROPOS = "A propos";
export const LINK_ART_THERAPIE = "L'art-thérapie";
export const LINK_CABINET = "Le cabinet";
export const LINK_CONTACT = "Contact";
export const LINK_CREATIONS = "Les créations";
export const LINK_MENTIONS_LEGALES = "Mentions légales";
export const LINK_PRESTATIONS = "Prestations en entreprise";
export const LINK_RESEAU = "Réseau";
export const LINK_RPS = "Les RPS";

export const ICON_ACCUEIL = "home";
export const ICON_ART_THERAPIE = "theater_comedy";
export const ICON_CABINET = "wb_shade";
export const ICON_CREATIONS = "palette";
export const ICON_RPS = "sentiment_dissatisfied";
export const ICON_PRESTATIONS = "business";
export const ICON_A_PROPS = "info";
export const ICON_CONTACT = "mail";
export const ICON_RESEAU = "language";

export interface RouterItem {
  routing: string,
  link: string,
  icon: string
  exact?: boolean
}

export const ROUTER: RouterItem[] = [
  {routing: ROUTING_ACCUEIL, link: LINK_ACCUEIL, icon: ICON_ACCUEIL, exact: true},
  {routing: ROUTING_ART_THERAPIE, link: LINK_ART_THERAPIE, icon: ICON_ART_THERAPIE},
  {routing: ROUTING_CABINET, link: LINK_CABINET, icon: ICON_CABINET},
  {routing: ROUTING_RPS, link: LINK_RPS, icon: ICON_RPS},
  {routing: ROUTING_PRESTATIONS, link: LINK_PRESTATIONS, icon: ICON_PRESTATIONS},
  {routing: ROUTING_CREATIONS, link: LINK_CREATIONS, icon: ICON_CREATIONS},
  {routing: ROUTING_A_PROPOS, link: LINK_A_PROPOS, icon: ICON_A_PROPS},
  {routing: ROUTING_CONTACT, link: LINK_CONTACT, icon: ICON_CONTACT},
  {routing: ROUTING_RESEAU, link: LINK_RESEAU, icon: ICON_RESEAU}
]
