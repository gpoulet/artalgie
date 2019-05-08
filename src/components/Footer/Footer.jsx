import React from "react";
import {
  ARTALGIE,
  ROUTER,
  ROUTING_MENTIONS_LEGALES,
  LINK_MENTIONS_LEGALES,
  CONTACTS
} from '../../constants'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function LinkFooter({ routing, link }) {
  return <li key={routing}><Link className="footer-text" to={routing}>{link}</Link></li>
}


function Field({ icon, label, link, value }) {
  return (
    <p className="valign-wrapper"><i className="material-icons contact">{icon}</i>
      {label}&nbsp;:&nbsp;
      <a href={link} className="truncate">{value}</a>
    </p>
  );
}

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <div className="brand-logo">
              <Logo/>
            </div>
            <div className="footer-contact">
              {CONTACTS.map((contact, index) => <Field key={index} {...contact}/>)}
            </div>
          </div>
          <div className="col l4 offset-l2 s12">
            <div className="footer-title">Liens</div>
            <ul className="footer-text">
              {ROUTER.map(LinkFooter)}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container footer-bottom-text">
          © 2019 {ARTALGIE}
          <Link className="footer-bottom-link right" to={ROUTING_MENTIONS_LEGALES}>{LINK_MENTIONS_LEGALES}</Link>
        </div>
      </div>
    </footer>);
}

export default Footer;