import React from "react";
import { NavLink } from 'react-router-dom'
import { ARTALGIE, ROUTER, ROUTING_ACCUEIL } from '../../constants'

function LinkHeader({routing, link}) {
  return <li><NavLink to={routing} activeClassName="active" exact>{link}</NavLink></li>
}

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href={ROUTING_ACCUEIL} className="brand-logo">{ARTALGIE}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {ROUTER.map(LinkHeader)}
        </ul>
      </div>
    </nav>
  );
}



export default Header