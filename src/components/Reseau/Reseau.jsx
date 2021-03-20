import React, { memo } from "react";
import { LINK_RESEAU, RESEAU_LINKS } from '../../constants'

function Link({ link, label, image }) {
  return (
    <a className="center-align col s12 m6 l4 xl4 reseau-link" href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={label}/></a>
  )
}

function Reseau() {
  return (
    <div className="row no-margin-bottom">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_RESEAU}</span>

            <p>Je vous invite à prendre le temps de ces visites, à les rencontrer.</p>
            <br/>
            <p>
              Vous pourrez découvrir leurs actions, leurs activités, leurs motivations…</p>

            <div className="reseau-links row">
              {RESEAU_LINKS.map((item, index) => <Link key={index} {...item} />)}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Reseau);