import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { ROUTER, ROUTING_ACCUEIL } from '../../constants'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'

function LinkHeader({ routing, link, exact }) {
  return <li key={routing}><NavLink to={routing} activeClassName="active" exact={exact}>{link}</NavLink></li>
}

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <button data-target="slide-out"
            className="sidenav-trigger buttonLink hide-on-large-only">
            <i className="material-icons">menu</i>
          </button>
          <Link to={ROUTING_ACCUEIL} className="brand-logo"><Logo /></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {ROUTER.map(LinkHeader)}
          </ul>
        </div>
      </nav>
      <BurgerMenu/>
    </div>
  );
}


export default Header