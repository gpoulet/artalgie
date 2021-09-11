import React, { memo, ReactElement } from "react";

import ReseauLink from "./ReseauLink";

import { LINK_RESEAU, RESEAU_LINKS } from '../../constants'

import "./_reseau.scss"

const Reseau = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{LINK_RESEAU}</span>

          <p>Je vous invite à prendre le temps de ces visites, à les rencontrer.</p>
          <br/>
          <p>
            Vous pourrez découvrir leurs actions, leurs activités, leurs motivations…</p>

          <div className="reseau-links">
            {RESEAU_LINKS.map((link) => <ReseauLink key={link.label} link={link}/>)}
          </div>

        </div>
      </div>
    </div>
  </div>

export default memo(Reseau);
