import React, { memo } from "react";
import { array } from "prop-types";

function Session({ session }) {
  return (
    <div className="col s12 m4 l2 xl2">
      <div className="card card-content valign-wrapper">
        <span className="center-align">{session}</span>
      </div>
    </div>);
}

function Sessions({ sessions }) {
  return (
    <div className="row sessions">
      {sessions.map((session, index) => <Session key={index} session={session}/>)}
    </div>
  );
}

Sessions.propTypes = {
  sessions: array
}

export default memo(Sessions);