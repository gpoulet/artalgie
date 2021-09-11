import React, { memo, ReactElement } from "react";

import Fields from "./Fields";

const Contact = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card horizontal hide-on-med-and-down">
        <div className="card-stacked">
          <div className="card-content contact-card-content">
            <Fields/>
          </div>
        </div>
        <div className="card-image card-image-contact">
          <img src="/images/contact.jpg" alt="contact"/>
        </div>
      </div>
      <div className="card hide-on-large-only hide-on-extra-large-only">
        <div className="card-content contact-card-content">
          <Fields/>
        </div>
      </div>
    </div>
  </div>

export default memo(Contact);
