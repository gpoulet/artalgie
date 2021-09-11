import React, { memo, ReactElement } from "react";

import { ArtTherapieLinkItem } from '../../constants'

export interface LinkProps {
  link: ArtTherapieLinkItem
}

const Link = ({link: {url, label, image}}: LinkProps): ReactElement =>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img height="200px" src={image} alt={label}/>
    <br/>
    {label}
  </a>

export default memo(Link);
