import React from "react";
import {
  ARTALGIE,
  PAGE_FACEBOOK,
  EMAIL,
  ROUTER,
  TELEPHONE,
  ROUTING_MENTIONS_LEGALES,
  LINK_MENTIONS_LEGALES,
  PAGE_FACEBOOK_LINK, TELEPHONE_LINK, EMAIL_LINK
} from '../../constants'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function LinkFooter({ routing, link }) {
  return <li key={routing}><Link className="footer-text" to={routing}>{link}</Link></li>
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
            <p className="footer-contact">
              <span>Téléphone : </span><a href={TELEPHONE_LINK}>{TELEPHONE}</a><br/>
              <span>Adresse e-mail : </span><a href={EMAIL_LINK}>{EMAIL}</a><br/>
              <span>Facebook : </span><a href={PAGE_FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">{PAGE_FACEBOOK}</a>
            </p>
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