import React, { memo, ReactElement } from "react";
import { Link } from 'react-router-dom'

import { RouterItem } from '../../constants'
import Badge from "../Badge";

export interface FooterLinkProps {
  route: RouterItem
}

const FooterLink = ({route: {routing, link, url, newLink}}: FooterLinkProps): ReactElement =>
  routing ? (
    <li>
      <Link className="footer-text" to={routing}>
        {link}
      </Link>
    </li>
  ) : (
    <li>
      <a className="footer-text" href={url} target="_blank" rel="noopener noreferrer" >
        {link} { newLink && <Badge label="NOUVEAU" className="light-blue darken-2"/> }
      </a>
    </li>
  )

export default memo(FooterLink);
