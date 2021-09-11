import React, { memo, ReactElement } from "react";

import { AProposLink } from '../../constants'

export interface LinkProps {
  link: AProposLink
}

const Link = ({link: {url, label, image}}: LinkProps): ReactElement =>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={label}/>
    <br/>
    {label}
  </a>

export default memo(Link);
