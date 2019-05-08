import React, { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faTheaterMasks,
  faYinYang,
  faCookie,
  faGlobeAmericas,
  faMale,
  faWalking,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ROUTING_PRESTATIONS } from '../../constants'

const clazz = "col s6 m3 l3"

const ATELIERS = [
  { icon: faMusic, name: "Danse" },
  { icon: faTheaterMasks, name: "Théâtre" },
  { icon: faYinYang, name: "Relaxation" },
  { icon: faCookie, name: "Peinture" },
  { icon: faGlobeAmericas, name: "Terre" },
  { icon: faMale, name: "Corps" },
  { icon: faWalking, name: "Mouvements" }
];

function Atelier({ icon, name }) {
  return (
    <div key={name} className={clazz}>
      <div className="card">
        <div className="card-content">
          <div className="center"><FontAwesomeIcon icon={icon} size="3x" className="promo"/><p
          >{name}</p></div>
        </div>
      </div>
    </div>)
}

function Ateliers() {
  return (
    <div>
      <div className="row">
        {ATELIERS.map(Atelier)}
        <div key="info" className={clazz}>
          <div className="card">
            <div className="card-content">
              <Link to={ROUTING_PRESTATIONS}>
                <div className="center">
                  <FontAwesomeIcon icon={faPlus} size="3x" className="promo-info"/>
                  <p className="promo-text-info">Plus d'informations</p></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Ateliers);
