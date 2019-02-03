import React from "react";
import Parallax from '../Parallax'
import Logo from '../Header/Logo'
import Ateliers from "./Ateliers";


function Accueil() {
  return (<div className="accueil">


    <Parallax
      min={'-20%'}
      max={'20%'}
      image="images/peinture.jpg"
    >
      <p>
        <h1 className="white-text">ARTalgie</h1>

        <h5 className="white-text">Art-thérapie en entreprise</h5>
      </p>
    </Parallax>

    <div className="row">
      <div className="col s12">
        <p className="brand-logo"><Logo/></p>
        <p><span className="accueil-text">ARTalgie propose des sessions d'art-thérapie en entreprise pour prévenir et lutter contre les risques
        psychosociaux, et notamment l'épuisement professionnel.</span>
        </p>

      </div>
    </div>

    <div>
      <Ateliers/>

      <br/>

    </div>
  </div>);
}

export default Accueil;