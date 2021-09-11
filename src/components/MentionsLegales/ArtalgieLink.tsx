import React, { memo, ReactElement } from "react";

import { ARTALGIE } from '../../constants'

const LinkArtalgie = (): ReactElement =>
  <a href="http://artalgie.fr"
     target="_blank"
     rel="noopener noreferrer">
    {ARTALGIE}.fr
  </a>

export default memo(LinkArtalgie);
