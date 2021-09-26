import React, { ReactElement } from "react";

import "./_badge.scss";

export interface BadgeProps {
  label: string
  className?: string
}

const Badge = ({label, className = ""}: BadgeProps): ReactElement =>
  <span className={"new badge " + className} data-badge-caption={label}/>

export default Badge;
