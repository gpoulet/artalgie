import React from "react";
import { EMAIL, EMAIL_LINK, LINK_CONTACT, PAGE_FACEBOOK, TELEPHONE, TELEPHONE_LINK } from '../../constants'

function Contact() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_CONTACT}</span>
            <p className="valign-wrapper"><i className="material-icons contact">phone</i>
              Téléphone :&nbsp;
              <a href={TELEPHONE_LINK}>{TELEPHONE}</a>
            </p>
            <br/>
            <p className="valign-wrapper">
              <i className="material-icons contact">email</i>Adresse mail :&nbsp;
              <a href={EMAIL_LINK}>{EMAIL}</a></p>
            <br/>
            <p className="valign-wrapper">
              <i className="material-icons contact">thumb_up</i>Facebook :&nbsp;
              <a href={PAGE_FACEBOOK} target="_blank" rel="noopener noreferrer">{PAGE_FACEBOOK}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;