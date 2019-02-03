import React from "react";
import { ALGIE, ART } from '../../constants'

function Logo() {
  return [<span key="art" className="art">{ART}</span>,<span key="algie" className="algie">{ALGIE}</span>]
}

export default Logo;