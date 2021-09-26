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
import Social from "../Social";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="center footer-logo">
          <div className="brand-logo">
            <Logo/>
          </div>
          <span className="white-square-footer">{SLOGAN}</span>
        </div>
        <div className="footer-contacts">
          <div className="footer-title">Contact</div>
          <div className="footer-contact">
            {CONTACTS.map(contact => <Field contact={contact} key={contact.label}/>)}
          </div>
        </div>
        <div className="hide-on-mobile-and-tablet footer-links">
          <div className="footer-title">Liens</div>
          <ul className="footer-text footer-links">
            {ROUTER.map(route => <FooterLink route={route} key={route.link}/>)}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="footer-bottom-text">
          © 2019-{new Date().getFullYear()} {ARTALGIE}
        </span>
        <Social/>
        <Link className="footer-bottom-link right" to={ROUTING_MENTIONS_LEGALES}>{LINK_MENTIONS_LEGALES}</Link>
      </div>
    </footer>);
}

export default memo(Footer);
