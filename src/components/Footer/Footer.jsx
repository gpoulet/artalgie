import React from "react";
import {
  ARTALGIE,
  PAGE_FACEBOOK,
  EMAIL,
  ROUTER,
  TELEPHONE,
  ROUTING_MENTIONS_LEGALES,
  LINK_MENTIONS_LEGALES
} from '../../constants'
import { Link } from 'react-router-dom'
import Logo from '../Header/Logo'

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
            <p className="footer-text">
              Téléphone : {TELEPHONE}<br/><br/>
              Adresse e-mail : {EMAIL}<br/><br/>
              Facebook : <a href={PAGE_FACEBOOK} target="_blank" rel="noopener noreferrer" className="footer-text">{PAGE_FACEBOOK}</a>
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="footer-text">Liens</h5>
            <ul>
              {ROUTER.map(LinkFooter)}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container footer-text">
          © 2019 {ARTALGIE}
          <Link className="footer-link right" to={ROUTING_MENTIONS_LEGALES}>{LINK_MENTIONS_LEGALES}</Link>
        </div>
      </div>
    </footer>);
}

export default Footer;