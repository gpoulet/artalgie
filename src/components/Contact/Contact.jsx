import React from "react";
import {
  EMAIL,
  EMAIL_LINK,
  LINK_CONTACT,
  PAGE_FACEBOOK,
  PAGE_FACEBOOK_LINK,
  TELEPHONE,
  TELEPHONE_LINK
} from '../../constants'

function Contact() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content contact-card-content">
            <span className="card-title">{LINK_CONTACT}</span>
            <p className="valign-wrapper"><i className="material-icons contact">phone</i>
              Téléphone&nbsp;:&nbsp;
              <a href={TELEPHONE_LINK} className="truncate">{TELEPHONE}</a>
            </p>
            <br/>
            <p className="valign-wrapper">
              <i className="material-icons contact">email</i>Adresse mail&nbsp;:&nbsp;
              <a href={EMAIL_LINK} className="truncate">{EMAIL}</a></p>
            <br/>
            <p className="valign-wrapper">
              <i className="material-icons contact">thumb_up</i>Facebook&nbsp;:&nbsp;
              <a href={PAGE_FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="truncate">{PAGE_FACEBOOK}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;