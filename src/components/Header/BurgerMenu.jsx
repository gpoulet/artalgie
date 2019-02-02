import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import M from "materialize-css";
import { ROUTER } from '../../constants'

function LinkHBurgerMenu({ routing, link, icon }) {
  return           <li><NavLink to={routing}><i className="material-icons">{icon}</i>{link}</NavLink></li>
}

class BurgerMenu extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      this.menu = M.Sidenav.init(elems, {});
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