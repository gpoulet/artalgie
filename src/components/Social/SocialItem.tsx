import React, { ReactElement } from "react";
import { Social } from "../../constants";

export interface SocialItemProps {
  social: Social,
  className: string
}

const SocialItem = ({social: {icon, name, url}, className = ""}: SocialItemProps): ReactElement =>
  <a href={url} target="_blank" rel="noopener noreferrer" className={"social--item "+ className}>
    <img src={icon} alt={name} className="social--item--img"/>
  </a>

export default SocialItem;
