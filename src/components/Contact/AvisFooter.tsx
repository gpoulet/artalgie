import React, { ReactElement } from "react";

import { AVIS, GOOGLE_MAPS_AVIS_LINK } from "../../constants";

import AvisItem from "./AvisItem";

import "./_avis.scss";

export interface SocialProps {
  className?: string
}

const AvisFooter = ({className = ""}: SocialProps): ReactElement => (
  <div className={"avis--container " + className}>
    {AVIS.map(social => <AvisItem social={social} key={social.name} className="avis--item footer" footer/>)}
    <span className="avis--donnez-votre-avis">
      <a href={GOOGLE_MAPS_AVIS_LINK} target="_blank" rel="noopener noreferrer" className="footer-text">Donnez votre avis sur Artalgie</a>
    </span>
  </div>
)

export default AvisFooter
