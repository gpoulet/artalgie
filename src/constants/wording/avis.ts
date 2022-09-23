export const GOOGLE_MAPS_AVIS_LINK = "https://g.page/r/CYXruqF48lRaEAg/review";

export interface Avis {
  name: string,
  url: string,
  icon: string
  logo: string
  star: string
}

export const AVIS: Avis[] = [
  {
    name: "Google",
    url: GOOGLE_MAPS_AVIS_LINK,
    icon: "/images/avis/google.svg",
    logo: "/images/avis/google-big.svg",
    star: "/images/avis/star.svg"
  }
]
