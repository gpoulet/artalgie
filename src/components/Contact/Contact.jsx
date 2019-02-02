import React from "react";
import { EMAIL, LINK_CONTACT, PAGE_FACEBOOK, TELEPHONE } from '../../constants'

function Contact() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_CONTACT}</span>
            <p>Téléphone : {TELEPHONE}
            </p>p>
            <br/>
            <p>Adresse mail : {EMAIL}</p>
            <p>Facebook : <a href={PAGE_FACEBOOK} target="_blank" rel="noopener noreferrer">{PAGE_FACEBOOK}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;