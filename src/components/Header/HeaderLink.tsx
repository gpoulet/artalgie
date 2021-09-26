import React, { ReactElement } from "react";
import { NavLink } from 'react-router-dom'

import { RouterItem } from '../../constants'

import "./_headerLink.scss";

export interface HeaderLinkProps {
  route: RouterItem
}

const HeaderLink = ({route: {routing, link, url, exact}}: HeaderLinkProps): ReactElement =>
  routing ? (

    <li>
      <NavLink
        to={routing}
        activeClassName="active"
        exact={exact}>
        {link}
      </NavLink>
    </li>
  ) : (
    <li className="header-button--container">
      <a
        href={url}
        className="waves-effect waves-light btn-small header-button"
        target="_blank"
        rel="noopener noreferrer">
        {link}
      </a>
    </li>
  )

export default HeaderLink;
