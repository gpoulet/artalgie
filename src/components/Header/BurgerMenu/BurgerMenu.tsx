import React, { memo, ReactElement, useEffect } from 'react'
// @ts-ignore
import M from "materialize-css/dist/js/materialize.min";

import Logo from '../Logo'
import BurgerMenuLink from "./BurgerMenuLink";

import { ROUTER } from '../../../constants'

import "./_burgerMenu.scss"

const DOM_CONTENT_LOADED = 'DOMContentLoaded'

function initSideNav() {
  const elems = document.querySelectorAll('.sidenav');
  // @ts-ignore
  this.menu = M.Sidenav.init(elems);
}

const BurgerMenu = (): ReactElement => {

  useEffect(() => {

    return () => {
      document.removeEventListener(DOM_CONTENT_LOADED, initSideNav)
    }
  }, [])

  document.addEventListener(DOM_CONTENT_LOADED, initSideNav);

  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li className="user-view">
          <nav>
            <div className="nav-wrapper brand-logo">
              <Logo/>
            </div>
          </nav>
        </li>
        {ROUTER.map(route => <BurgerMenuLink route={route} key={route.routing}/>)}
      </ul>

    </div>);
}

export default memo(BurgerMenu);
