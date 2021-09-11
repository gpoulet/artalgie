import React, { ReactElement } from "react";
import { Link } from 'react-router-dom'

import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import HeaderLink from "./HeaderLink";

import { ROUTER, ROUTING_ACCUEIL } from '../../constants'

const Header = (): ReactElement =>
  <div>
    <nav>
      <div className="nav-wrapper">
        <button data-target="slide-out"
                className="sidenav-trigger buttonLink hide-on-large-only">
          <i className="material-icons">menu</i>
        </button>
        <Link to={ROUTING_ACCUEIL} className="brand-logo"><Logo/></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {ROUTER.map(route => <HeaderLink route={route} key={route.routing}/>)}
        </ul>
      </div>
    </nav>
    <BurgerMenu/>
  </div>

export default Header;
