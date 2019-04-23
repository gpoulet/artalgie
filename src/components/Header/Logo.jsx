import React from "react";
import { ALGIE, ART } from '../../constants'

function Logo() {
  //return <img src="/images/logo/logo-white.svg" width="180px" />
   return [<span key="art" className="art">{ART}</span>,<span key="algie" className="algie">{ALGIE}</span>]
}

export default Logo;