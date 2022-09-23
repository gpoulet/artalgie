import React, { memo, ReactElement } from "react";

import Social from "../Social";

import Avis from "./Avis";
import Fields from "./Fields";

import "./_contact.scss"

const cardContent = (
  <>
    <Fields/>
    <br/>
    <br/>
    <span className="card-title">Réseaux sociaux</span>
    <Social className="contact-social"/>
    <br/>
    <br/>
    <span className="card-title">Donnez votre avis sur Artalgie</span>
    <Avis className="contact-social"/>
  </>
)

const Contact = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card horizontal hide-on-med-and-down">
        <div className="card-stacked">
          <div className="card-content contact-card-content">
            {cardContent}
          </div>
        </div>
        <div className="card-image card-image-contact">
          <img src="/images/contact.jpg" alt="contact"/>
        </div>
      </div>
      <div className="card hide-on-large-only hide-on-extra-large-only">
        <div className="card-content contact-card-content">
          {cardContent}
        </div>
      </div>
    </div>
  </div>

export default memo(Contact);
