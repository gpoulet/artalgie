import React from "react";
import Parallax from '../Parallax'
import { ARTALGIE } from '../../constants'

function Accueil() {
  return (<div>
    <Parallax image="background.jpg" alt={ARTALGIE} title={ARTALGIE}/>
  </div>);
}

export default Accueil;