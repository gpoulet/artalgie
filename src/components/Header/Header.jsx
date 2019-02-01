import React from "react";
import { NavLink } from 'react-router-dom'
import {
  ROUTING_ACCUEIL,
  ROUTING_CONTACT,
  ROUTING_INTERVENANTE,
  ROUTING_LIENS_UTILES,
  ROUTING_PRECISIONS, ROUTING_PRESTATIONS
} from '../../constants'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href={ROUTING_ACCUEIL} className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to={ROUTING_ACCUEIL}>Accueil</NavLink></li>
          <li><NavLink to={ROUTING_CONTACT}>Contact</NavLink></li>
          <li><NavLink to={ROUTING_INTERVENANTE}>Intervenante</NavLink></li>
          <li><NavLink to={ROUTING_LIENS_UTILES}>Liens utiles</NavLink></li>
          <li><NavLink to={ROUTING_PRECISIONS}>Précisions</NavLink></li>
          <li><NavLink to={ROUTING_PRESTATIONS}>Prestations</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header