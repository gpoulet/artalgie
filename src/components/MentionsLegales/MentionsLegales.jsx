import React from "react";
import { LINK_MENTIONS_LEGALES } from '../../constants'

function MentionsLegales() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_MENTIONS_LEGALES}</span>
            <p>A venir...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;