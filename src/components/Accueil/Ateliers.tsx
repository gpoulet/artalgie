import React, { memo, ReactElement } from "react";
import { Link } from 'react-router-dom'
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

import Atelier, { AtelierItem } from "./Atelier";

import { ROUTING_PRESTATIONS } from '../../constants'

const ATELIERS: AtelierItem[] = [
  {icon: faMusic, name: "Danse"},
  {icon: faTheaterMasks, name: "Théâtre"},
  {icon: faYinYang, name: "Relaxation"},
  {icon: faCookie, name: "Peinture"},
  {icon: faGlobeAmericas, name: "Terre"},
  {icon: faMale, name: "Corps"},
  {icon: faWalking, name: "Mouvements"}
];

const Ateliers = (): ReactElement =>
  <div>
    <div className="row">
      {ATELIERS.map(atelier => <Atelier key={atelier.name} atelier={atelier}/>)}
      <div key="info" className="col s6 m3 l3">
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

export default memo(Ateliers);
