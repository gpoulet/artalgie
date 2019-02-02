import React from "react";
import Parallax from '../Parallax'
import { ARTALGIE } from '../../constants'

function Accueil() {
  return (<div>
    <Parallax
      min={'-20%'}
      max={'20%'}
      image="images/art-therapie.jpg"
    >
      <h1 className="white-text">{ARTALGIE}</h1>
    </Parallax>  </div>);
}

export default Accueil;