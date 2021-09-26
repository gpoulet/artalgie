export const FACEBOOK_LINK = "https://www.facebook.com/Artalgie";
export const LINKEDIN_LINK = "https://www.linkedin.com/company/artalgie";
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UCrI0K4xURujVaGJzjKg2wxg";
export const INSTA_LINK = "https://www.instagram.com/artalgie";

export interface Social {
  name: string,
  url: string,
  icon: string
}

export const SOCIAL_NETWORKS: Social[] = [
  {
    name: "Facebook",
    url: FACEBOOK_LINK,
    icon: "/images/social/facebook.svg"
  },
  {
    name: "LinkedIn",
    url: LINKEDIN_LINK,
    icon: "/images/social/linkedin.svg"
  },
  {
    name: "Instagram",
    url: INSTA_LINK,
    icon: "/images/social/instagram.svg"
  },
  {
    name: "YouTube",
    url: YOUTUBE_LINK,
    icon: "/images/social/youtube.svg"
  }
]
