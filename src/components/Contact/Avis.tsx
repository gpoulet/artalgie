import React, { ReactElement } from "react";

import { AVIS } from "../../constants";

import AvisItem from "./AvisItem";

import "./_avis.scss";

export interface SocialProps {
  className?: string
}

const Avis = ({className = ""}: SocialProps): ReactElement => (
  <div className={"avis--container " + className}>
    {AVIS.map(social => <AvisItem social={social} key={social.name} className="avis--item"/>)}
  </div>
)

export default Avis
