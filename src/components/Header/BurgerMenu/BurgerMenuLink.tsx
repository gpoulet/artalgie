import React, { memo, ReactElement } from 'react'
import { NavLink } from 'react-router-dom';

import Badge from "../../Badge";
import { RouterItem } from "../../../constants";

export interface BurgerMenuLinkProps {
  route: RouterItem
}

const BurgerMenuLink = ({route: {routing, link, url, icon, exact, newLink}}: BurgerMenuLinkProps): ReactElement =>
  routing ? (
      <li>
        <NavLink to={routing} exact={exact} className="sidenav-close">
          <i className="material-icons">{icon}</i>{link}
        </NavLink>
      </li>
    ) :
    (
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer" className="sidenav-close">
          <i className="material-icons">{icon}</i>{link} { newLink && <Badge label="NOUVEAU" className="light-blue darken-2"/> }
        </a>
      </li>
    )

export default memo(BurgerMenuLink);
