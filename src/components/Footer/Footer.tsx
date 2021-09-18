import React, { memo } from "react";
import { Link } from 'react-router-dom'

import Field from "../Contact/Field";
import FooterLink from "./FooterLink";
import Logo from './Logo'

import "./_footer.scss"

import {
  ARTALGIE,
  ROUTER,
  ROUTING_MENTIONS_LEGALES,
  LINK_MENTIONS_LEGALES,
  CONTACTS, SLOGAN
} from '../../constants'

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 l5 xl3 center">
            <div className="brand-logo">
              <Logo/>
            </div>
            <span className="white-square-footer">{SLOGAN}</span>
          </div>
          <div className="col s12 l5 xl6">
            <div className="show-on-small hide-on-large-only"><br/></div>
            <div className="show-on-small hide-on-large-only"><br/></div>
            <div className="footer-title">Contact</div>
            <div className="footer-contact">
              {CONTACTS.map(contact => <Field contact={contact} key={contact.label} />)}
            </div>
          </div>
          <div className="hide-on-med-and-down col s12 l2 xl2">
            <div className="footer-title">Liens</div>
            <ul className="footer-text footer-links">
              {ROUTER.map(route => <FooterLink route={route} key={route.routing} />)}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container footer-bottom-text">
          © 2019-{new Date().getFullYear()} {ARTALGIE}
          <Link className="footer-bottom-link right" to={ROUTING_MENTIONS_LEGALES}>{LINK_MENTIONS_LEGALES}</Link>
        </div>
      </div>
    </footer>);
}

export default memo(Footer);
