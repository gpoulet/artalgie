import React, { memo, ReactElement } from 'react'
import { NavLink } from 'react-router-dom';
import { RouterItem } from "../../constants";

export interface BurgerMenuLinkProps {
  route: RouterItem
}

const BurgerMenuLink = ({route: {routing, link, icon, exact}}: BurgerMenuLinkProps): ReactElement =>
  <li key={routing}>
    <NavLink to={routing} exact={exact} className="sidenav-close">
      <i className="material-icons">{icon}</i>{link}
    </NavLink>
  </li>

export default memo(BurgerMenuLink);
