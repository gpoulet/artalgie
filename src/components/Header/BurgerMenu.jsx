import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min";
import { ROUTER } from '../../constants'

const LinkHBurgerMenu = ({ routing, link, icon, exact }) => {
  return <li key={routing}><NavLink to={routing} exact={exact} className="sidenav-close"><i
    className="material-icons">{icon}</i>{link}</NavLink></li>
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
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/background.jpg"/>
              </div>
              <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
              <a href="#name"><span className="white-text name">John Doe</span></a>
              <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div>
          </li>
          {ROUTER.map(LinkHBurgerMenu)}
          <li>
            <div className="divider"></div>
          </li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>

      </div>);
  }
}

export default BurgerMenu;