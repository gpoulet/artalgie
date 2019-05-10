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
        <div className="card">
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