import React, { memo, ReactElement } from "react";

import { ARTALGIE } from '../../constants'

const Logo = (): ReactElement => <span className="logo">{ARTALGIE}</span>

export default memo(Logo);
