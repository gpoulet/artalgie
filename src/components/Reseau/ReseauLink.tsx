import React, { memo, ReactElement } from "react";
import { ReseauLinkItem } from "../../constants";

export interface ReseauLinkProps {
  link: ReseauLinkItem
}

const ReseauLink = ({link: {url, label, image}}: ReseauLinkProps): ReactElement =>
  <a className="center-align reseau-link"
     href={url}
     target="_blank"
     rel="noopener noreferrer">
    <img src={image} alt={label}/>
  </a>

export default memo(ReseauLink);
