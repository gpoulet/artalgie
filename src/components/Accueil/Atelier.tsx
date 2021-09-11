import React, { memo, ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface AtelierItem {
  icon: IconDefinition,
  name: string
}

export interface AtelierProps {
  atelier: AtelierItem
}

const Atelier = ({atelier: {icon, name}}: AtelierProps): ReactElement =>
  <div key={name} className="col s6 m3 l3">
    <div className="card">
      <div className="card-content">
        <div className="center"><FontAwesomeIcon icon={icon} size="3x" className="promo"/><p
        >{name}</p></div>
      </div>
    </div>
  </div>

export default memo(Atelier);
