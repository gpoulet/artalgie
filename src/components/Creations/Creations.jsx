import React, { memo } from "react";
import {
  LINK_CREATIONS, CREATIONS
} from '../../constants'

function Creations() {
  return (
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
              <p>L'art-thérapeute, Nathalie, reste en mouvement et propose désormais ses créations à la vente à l'<b>Etoffe de Merlin</b> à Iffendic.</p>
              <br/>
              <p>Elle propose diverses confections d'accessoires textiles : bonnets, lingettes démaquillantes, charlottes couvre-plat, ...</p>
              <br/>
              <p>Sensible aux questions environnementales, elle développe au fur et à mesure des créations "<b>zéro déchet</b>".</p>
            </div>
          <div className="row">
            {CREATIONS.map((item, index) =>
              <img className="materialboxed creation center-align col s12 m6 l4 xl4"
                   key={index}
                   src={item.image}
                   alt={item.label}/>)}
          </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default memo(Creations);