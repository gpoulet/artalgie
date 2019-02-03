import React from "react";
import Parallax from '../Parallax'
import Logo from '../Header/Logo'
import { LINK_PRECISIONS } from '../../constants'

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
      <div className="col s12 no-padding">
        <div className="card no-margin">
          <div className="card-content">
            <span className="card-title brand-logo"><Logo/></span>

            <p>
              <span className="accueil-text">ARTalgie propose des sessions d'art-thérapie en entreprise pour prévenir et lutter contre les risques
        psychosociaux, et notamment l'épuisement professionnel.</span>
            </p>
            <ul className="accueil-text">
              <li>- Danse</li>
              <li>- Théâtre</li>
              <li>- Relaxation</li>
              <li>- Peinture</li>
              <li>- Terre</li>
              <li>- Corps</li>
              <li>- Mouvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div>

      <br/>

    </div>
</div>);
}

export default Accueil;