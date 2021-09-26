import React, { ReactElement } from "react";

import SocialItem from "./SocialItem";
import { SOCIAL_NETWORKS } from "../../constants";

import "./_social.scss";

export interface SocialProps {
  className?: string
}

const Social = ({ className = "" }: SocialProps): ReactElement => (
  <div className={"social--container "+className}>
    {SOCIAL_NETWORKS.map(social => <SocialItem social={social} key={social.name} className="social--item" />)}
  </div>
)

export default Social
