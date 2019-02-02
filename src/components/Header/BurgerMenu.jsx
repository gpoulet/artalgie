import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min";
import { ROUTER } from '../../constants'
import Logo from './Logo'

const LinkHBurgerMenu = ({ routing, link, icon, exact }) => {
  return (
    <li key={routing}>
      <NavLink to={routing} exact={exact} className="sidenav-close">
        <i className="material-icons">{icon}</i>{link}
        </NavLink>
  </li>);
}

class BurgerMenu extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.sidenav');
      this.menu = M.Sidenav.init(elems);
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li className="user-view">
            <nav>
              <div className="nav-wrapper brand-logo">
              <Logo />
            </div>
            </nav>
          </li>
          {ROUTER.map(LinkHBurgerMenu)}
        </ul>

      </div>);
  }
}

export default BurgerMenu;