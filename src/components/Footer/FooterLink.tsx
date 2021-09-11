import React, { memo, ReactElement } from "react";
import { Link } from 'react-router-dom'

import { RouterItem } from '../../constants'

export interface FooterLinkProps {
  route: RouterItem
}

const FooterLink = ({route: {routing, link}}: FooterLinkProps): ReactElement => (
  <li key={routing}>
    <Link className="footer-text" to={routing}>
      {link}
    </Link>
  </li>)

export default memo(FooterLink);
