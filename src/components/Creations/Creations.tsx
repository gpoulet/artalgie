import React, { memo, ReactElement } from "react";
import Gallery from "react-photo-gallery";

import { LINK_CREATIONS, ETOFFE_DE_MERLIN_LINK } from '../../constants'
import { CREATIONS } from './Creations.constants';

import "./_creations.scss"

const Creations = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content contact-card-content">
            <span className="card-title">{LINK_CREATIONS}</span>
            <p>
              Artalgie se diversifie !
            </p>
            <br/>
            <p>L'art-thérapeute, Nathalie, reste en mouvement et propose désormais ses créations à la vente à l'
              <b><a href={ETOFFE_DE_MERLIN_LINK} target="_blank" rel="noreferrer">Etoffe de Merlin</a></b> à Iffendic.
            </p>
            <br/>
            <p>Elle propose diverses confections d'accessoires textiles : bonnets, lingettes démaquillantes, charlottes
              couvre-plat, ...</p>
            <br/>
            <p>Sensible aux questions environnementales, elle développe au fur et à mesure des créations "<b>zéro
              déchet</b>".</p>
          </div>
          <div className="creations">
            <Gallery photos={CREATIONS} />
          </div>
        </div>
      </div>
    </div>
  </div>

export default memo(Creations);
