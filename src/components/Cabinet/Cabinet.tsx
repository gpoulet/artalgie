import React, { memo, ReactElement } from "react";

import { ADDRESS_CABINET, ADDRESS_LINK, LINK_CABINET, ROUTING_RDV } from '../../constants'

import "./_cabinet.scss";
import Gallery from "../Gallery";
import { CABINET_PHOTOS } from "./Cabinet.constants";

const Cabinet = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{LINK_CABINET}</span>
          <p>
            Nathalie vous reçoit dans son <b>cabinet</b> situé au <i>
            <a href={ADDRESS_LINK}
               target="_blank"
               rel="noreferrer">
              {ADDRESS_CABINET}
            </a>
          </i>.
          </p>
          <br/>
          <p>Elle vous accueille pour des <b>atelier en groupe</b> ou en <b>individuel</b>.</p>
          <br/>
          <p>
            <a className="waves-effect waves-light btn-small header-button"
               href={ROUTING_RDV}
               target="_blank"
               rel="noreferrer">
              prendre rendez-vous en ligne
            </a></p>
          <br/>
          <p>Il est possible de se faire <b>rembourser</b> des séances. Renseignez-vous auprès de votre mutuelle.</p>
          <br/>
          <Gallery photos={CABINET_PHOTOS}/>
        </div>
      </div>
    </div>
  </div>

export default memo(Cabinet);
