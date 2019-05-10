import React, { memo } from "react";
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


function Field({ icon, label, link, value, target }) {
  return (
    <p className="valign-wrapper"><i className="material-icons contact">{icon}</i>
      {label}&nbsp;:&nbsp;
      <a href={link} target={target} className="truncate">{value}</a>
    </p>
  );
}

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 l4 xl4">
            <div className="brand-logo">
              <Logo/>
            </div>
          </div>
          <div className="col s12 l6 xl6">
            <div className="show-on-small hide-on-large-only"><br/></div>
            <div className="footer-title">Contact</div>
            <div className="footer-contact">
              {CONTACTS.map((contact, index) => <Field key={index} {...contact}/>)}
            </div>
          </div>
          <div className="col s12 l2 xl2">
            <div className="show-on-small hide-on-large-only"><br/></div>
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

export default memo(Footer);