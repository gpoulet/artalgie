import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { ARTALGIE, ROUTER, ROUTING_ACCUEIL } from '../../constants'

function LinkHeader({routing, link}) {
  return <li key={routing}><NavLink to={routing} activeClassName="active" exact>{link}</NavLink></li>
}

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={ROUTING_ACCUEIL} className="brand-logo">{ARTALGIE}</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {ROUTER.map(LinkHeader)}
        </ul>
      </div>
    </nav>
  );
}



export default Header