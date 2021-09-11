import React, { memo } from "react";

export interface RpsProps {
  link: string,
  label: string,
  image: string
}

const RpsLink = ({link, label, image}: RpsProps) =>
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={label}/>
  </a>

export default memo(RpsLink);
