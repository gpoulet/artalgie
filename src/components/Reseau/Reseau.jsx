import React, { memo } from "react";
import { LINK_RESEAU, RESEAU_LINKS } from '../../constants'

function Link({ link, label, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={label}/></a>
  )
}

function Reseau() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_RESEAU}</span>

            <p>Je vous invite à prendre le temps de ces visites, à les rencontrer.</p>
            <br/>
            <p>
              Vous pourrez découvrir leurs actions, leurs activités, leurs motivations…</p>

            <div className="reseau-links">
              {RESEAU_LINKS.map((item, index) => <Link key={index} {...item} />)}
            </div>


            {/*<br/>*/}
            {/*<p>*/}
            {/*  La photographe :<br/>*/}
            {/*  <a href="https://www.instagram.com/clairelefourn/?hl=fr" target="_blank" rel="noopener noreferrer">*/}
            {/*    Instagram</a>*/}
            {/*  <br/>*/}
            {/*  <a href="https://www.facebook.com/clairelefourn/" target="_blank" rel="noopener noreferrer">*/}
            {/*    Facebook</a>*/}
            {/*  <br/>*/}
            {/*  <a href="https://www.linkedin.com/in/claire-le-fourn/?originalSubdomain=fr" target="_blank"*/}
            {/*     rel="noopener noreferrer">*/}
            {/*    LinkedIn</a>*/}
            {/*</p>*/}

          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Reseau);