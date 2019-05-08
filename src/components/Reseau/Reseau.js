import React, { memo } from "react";
import { LINK_RESEAU } from '../../constants'

function Reseau() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_RESEAU}</span>

            <p>Je vous invite à prendre le temps de ces visites, à les rencontrer.</p>
            <br/>
            <p>
              Vous pourrez découvrir leurs actions, leurs activités, leurs motivations…</p>
            <br/>

            <p>
              <a href="http://www.quaisetoiles.fr" target="_blank" rel="noopener noreferrer">
                AQT</a>
            </p>
            <br/>

            <p>
              <a href="http://www.alexandraseringe.com" target="_blank" rel="noopener noreferrer">
                Alexandra SERINGE</a>
            </p>
            <br/>

            <p>
              <a href="http://valerie-leroux.fr" target="_blank" rel="noopener noreferrer">
                Valérie LE ROUX</a>
            </p>
            <br/>
            <p>
              La photographe :<br/>
              <a href="https://www.instagram.com/clairelefourn/?hl=fr" target="_blank" rel="noopener noreferrer">
                Instagram</a>
              <br/>
              <a href="https://www.facebook.com/clairelefourn/" target="_blank" rel="noopener noreferrer">
                Facebook</a>
              <br/>
              <a href="https://www.linkedin.com/in/claire-le-fourn/?originalSubdomain=fr" target="_blank"
                 rel="noopener noreferrer">
                LinkedIn</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Reseau);