import React from "react";
import { ARTALGIE, PAGE_FACEBOOK, EMAIL, ROUTER, TELEPHONE } from '../../constants'
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
            <Logo />
            </div>
            <p className="footer-text">
              Téléphone : {TELEPHONE}<br/><br/>
              Adresse e-mail : {EMAIL}<br/><br/>
              Facebook : {PAGE_FACEBOOK}
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
          <a className="footer-text right" href="#!">More Links</a>
        </div>
      </div>
    </footer>);
}

export default Footer;