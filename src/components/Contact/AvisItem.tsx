import React, { ReactElement } from "react";

import { Avis } from "../../constants";

export interface SocialItemProps {
  social: Avis,
  className: string
  footer?: boolean
}

const AvisItem = ({social: {icon, logo, name, star, url}, className = "", footer = false}: SocialItemProps): ReactElement =>
  <a href={url} target="_blank" rel="noopener noreferrer" className={"avis--item "+ className}>
    <img src={footer ? icon : logo} alt={name} className="avis--item--img"/>
    <img src={star} alt={name} className="avis--star--img"/>
    <img src={star} alt={name} className="avis--star--img"/>
    <img src={star} alt={name} className="avis--star--img"/>
    <img src={star} alt={name} className="avis--star--img"/>
    <img src={star} alt={name} className="avis--star--img"/>
  </a>

export default AvisItem;
