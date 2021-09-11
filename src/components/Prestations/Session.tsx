import React, { memo, ReactElement } from "react";

export interface SessionProps {
  session: string
}

const Session = ({session}: SessionProps): ReactElement =>
  <div className="col s12 m4 l2 xl2">
    <div className="card card-content valign-wrapper">
      <span className="center-align">{session}</span>
    </div>
  </div>

export default memo(Session);
