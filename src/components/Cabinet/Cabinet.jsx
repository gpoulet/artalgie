import React, { memo } from "react";
import { ADDRESS_CABINET, ADDRESS_LINK, LINK_CABINET } from '../../constants'

function Cabinet() {
  return (
    <div className="row no-margin-bottom">
      <div className="col s12">
        <div className={window.innerWidth > 650 ? "card horizontal" : "card"}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{LINK_CABINET}</span>
              <p>
                Nathalie vous reçoit dans son <b>cabinet</b> situé au <i><a href={ADDRESS_LINK} target="_blank"  rel="noreferrer">
                {ADDRESS_CABINET}
              </a>
              </i>.
              </p>
              <br/>
              <p>Elle vous accueille pour des <b>atelier en groupe</b> ou en <b>individuel</b>.</p>
              <br/>
              <p>Il est possible de se faire <b>rembourser</b> des séances. Renseignez-vous auprès de votre mutuelle.</p>
            </div>
          </div>
          <div className="card-image card-image-cabinet">
            <img src="/images/cabinet/cabinet.jpg" alt="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Cabinet);