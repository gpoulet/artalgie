import React from "react";
import { ARTALGIE, PAGE_FACEBOOK, EMAIL, ROUTER, TELEPHONE } from '../../constants'

function LinkFooter({ routing, link }) {
  return <li key={routing}><a className="grey-text text-lighten-3" href={routing}>{link}</a></li>
}

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">{ARTALGIE}</h5>
            <p className="grey-text text-lighten-4">
              Téléphone : {TELEPHONE}<br/><br/>
              Adresse e-mail : {EMAIL}<br/><br/>
              Facebook : {PAGE_FACEBOOK}
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Liens</h5>
            <ul>
              {ROUTER.map(LinkFooter)}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2019 {ARTALGIE}
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>);
}

export default Footer;