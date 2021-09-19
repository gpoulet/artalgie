import React, { memo, ReactElement } from "react";

import Session from "./Session";

import "./_sessions.scss"

export interface SessionsProps {
  sessions: string[]
}

const Sessions = ({sessions}: SessionsProps): ReactElement =>
  <div className="row sessions">
    {sessions.map((session, index) => <Session key={index} session={session}/>)}
  </div>

export default memo(Sessions);
