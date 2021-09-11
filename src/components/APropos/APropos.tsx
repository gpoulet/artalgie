import React, { memo, ReactElement } from "react";

import Link from "./Link"

import {
  LINK_A_PROPOS,
  SITE_NATHALIE,
  ARTALGIE,
  A_PROPOS_LINKS,
  FFAT_CODE_DEONTOLOGIE_LINK,
  ARTEEP_LINK, PHOTOGRAPHE_LINK, PHOTOGRAPHE
} from '../../constants'

import "./_apropos.scss"

const APropos = (): ReactElement => {
  return (
    <div className="row no-margin-bottom">
      <div className="col s12">
        <div className="card">
          <div className="card-content a-propos">
            <span className="card-title">{LINK_A_PROPOS}</span>
            <div className="row">
              <div className="col m4 push-m8 l3 push-l9 xl2 push-xl10 intervenante">
                <img className="responsive-img circle" src="/images/intervenante.jpg" alt="L'intervenante"/>
                <p className="center-align"><b>Nathalie POULET-GUILBERT</b><br/>
                  (photo : <a href={PHOTOGRAPHE_LINK} target="_blank" rel="noopener noreferrer">{PHOTOGRAPHE}</a>)

                </p>
              </div>
              <div className="col m8 pull-m4 l9 pull-l3 xl10 pull-xl2">


                <p>{ARTALGIE} est dirigée par <b>Nathalie POULET-GUILBERT</b>, <b>art-thérapeute certifiée</b>, formée
                  par <a href={ARTEEP_LINK} target="_blank" rel="noopener noreferrer">ARTEEP</a>,
                  adhérant
                  à la <a href={FFAT_CODE_DEONTOLOGIE_LINK} target="_blank" rel="noopener noreferrer">charte de
                    déontologie de la FFAT</a> (Fédération Française des Art-Thérapeutes).
                </p>
                <br/>
                <p>
                  Anciennement <b>cadre en entreprise</b> et <b>comédienne</b>, Nathalie a choisi de se reconvertir.
                  Cherchant à
                  allier
                  ses <b>compétences artistiques</b> avec son appétence au soutien, à la relation d'aide révélée par
                  son <b>expérience managériale</b>, l'art-thérapie est alors apparue comme la voie toute tracée.
                </p>
                <br/>
                <p>
                  Après deux années de stage en psychiatrie adultes, Nathalie a effectué une année de spécialisation
                  sur
                  les
                  pathologies du travailleur : elle est intervenue en <i>médecine préventive</i>, mais aussi en <i>consultation
                  douleurs chroniques</i>.
                </p>
                <br/>
                <p>
                  Nathalie est également formée à de nombreuses pratiques artistiques : <i>théâtre</i>, <i>danse</i>
                  , <i>peinture</i>, <i>dessin</i>, <i>céramique</i>, <i>gravure</i>, <i>photographie</i>, <i>marionnettes</i>.
                  <br/>
                  Vous pouvez retrouver son <b>parcours artistique</b> sur son site internet
                  : <a
                  href={SITE_NATHALIE} target="_blank" rel="noopener noreferrer">www.nathaliepoulet.com</a>
                </p>
                <br/>
                <p>
                  Elle vous reçoit à son cabinet pour des <b>ateliers en individuel</b> ou <b>en groupe</b>.
                </p>
                <br/>
                <p>
                  Elle propose également son <b>savoir-faire</b>, ses <b>connaissances</b> et
                  son <b>expertise</b> auprès des
                  entreprises pour leur permettre d'appréhender les risques psychosociaux de manière originale, tout
                  en
                  garantissant <i>écoute</i>, <i>respect</i>, <i>non-jugement</i>, <i>confidentialité</i> et <i>déontologie
                </i> (elle est bien entendu supervisée dans sa pratique).
                </p>
                <br/>
                <p>
                  Pour compléter et en savoir d’avantage :</p>

                <div className="a-propos-links">
                  {A_PROPOS_LINKS.map((link) => <Link key={link.label} link={link}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(APropos);
