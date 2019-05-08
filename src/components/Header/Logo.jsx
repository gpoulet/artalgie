import React, { memo } from "react";
import { ARTALGIE } from '../../constants'

function Logo() {
   return <span className="logo">{ARTALGIE}</span>
}

export default memo(Logo);