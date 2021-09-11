import React, { ReactElement } from "react";
import { NavLink } from 'react-router-dom'

import { RouterItem } from '../../constants'

export interface HeaderLinkProps {
  route: RouterItem
}

const HeaderLink = ({route: {routing, link, exact}}: HeaderLinkProps): ReactElement =>
  <li key={routing}>
    <NavLink
      to={routing}
      activeClassName="active"
      exact={exact}>
      {link}
    </NavLink>
  </li>

export default HeaderLink;
