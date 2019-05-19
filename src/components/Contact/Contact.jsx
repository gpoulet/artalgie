import React, { memo } from "react";
import {
  CONTACTS, LINK_CONTACT
} from '../../constants'


function Field({ icon, label, link, value, target }) {
  return (
    <p className="valign-wrapper"><i className="material-icons contact">{icon}</i>
      {label}&nbsp;:&nbsp;
      <a href={link} target={target} className="truncate">{value}</a>
    </p>
  );
}

function Contact() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card horizontal hide-on-med-and-down">
          <div className="card-stacked">
            <div className="card-content contact-card-content">
              <span className="card-title">{LINK_CONTACT}</span>
              {CONTACTS.map((contact, index) => <Field key={index} {...contact}/>)}
            </div>
          </div>
          <div className="card-image card-image-contact">
            <img src="/images/contact.jpg" alt="contact"/>
          </div>
        </div>
        <div className="card hide-on-large-only hide-on-extra-large-only">
            <div className="card-content contact-card-content">
              <span className="card-title">{LINK_CONTACT}</span>
              {CONTACTS.map((contact, index) => <Field key={index} {...contact}/>)}
            </div>
        </div>
      </div>
    </div>
);
}

export default memo(Contact);