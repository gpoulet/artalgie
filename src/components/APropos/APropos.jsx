import React from "react";
import { LINK_A_PROPOS, SITE_NATHALIE, ARTALGIE } from '../../constants'

function APropos() {
  return (
    <div className="card">
      <div className="card-content a-propos">
        <span className="card-title">{LINK_A_PROPOS}</span>
        <div className="row">
          <div className="col m4 push-m8 l3 push-l9 xl2 push-xl10 intervenante">
            <img className="responsive-img circle" src="/images/intervenante.jpg"/>
            <p className="center-align">Nathalie POULET-GUILBERT</p>
          </div>
          <div className="col m8 pull-m4 l9 pull-l3 xl10 pull-xl2">


            <p>{ARTALGIE} est dirigée par Nathalie POULET-GUILBERT, art-thérapeute certifiée, formée par ARTEEP,
              adhérant
              à la charte de déontologie de la Fédération Française des Art-Thérapeutes.
            </p>
            <p>
              Anciennement cadre en entreprise et comédienne, Nathalie a choisi de se reconvertir : cherchant à allier
              ses compétences artistiques avec son appétence au soutien, à la relation d'aide révélée par son expérience
              managériale, l'art-thérapie est alors apparue la voie toute tracée.
            </p>
            <p>
              Après deux années de stage en psychiatrie adultes, Nathalie a effectué une année de spécialisation sur les
              pathologies du travailleur : elle est intervenue en médecine préventive, mais aussi en consultation
              douleurs chroniques.
            </p>
            <br/>
            <p>
              Nathalie est également formée à de nombreuses pratiques artistiques : théâtre, danse, peinture, dessin,
              céramique, gravure, photographie. Vous pouvez retrouver son parcours artistique sur son site internet : <a
              href={SITE_NATHALIE} target="_blank" rel="noopener noreferrer">www.nathaliepoulet.com</a>
            </p>
            <br/>
            <p>
              Aujourd'hui, elle souhaite proposer son savoir-faire, ses connaissances et son expertise auprès des
              entreprises pour leur permettre d'appréhender les risques psychosociaux de manière originale, tout en
              garantissant écoute, respect, non-jugement, confidentialité et déontologie (elle est bien entendu
              supervisée dans sa pratique).
            </p>
            <br/>
            <p>
              {ARTALGIE} fait partie de la coopérative d‘entreprises Smart depuis janvier 2019.
            </p>
            <br/>
            <p>
              Pour compléter et en savoir d’avantage :</p>
            <ul>
              <li>
                <a href="http://www.arteep.fr/" target="_blank" rel="noopener noreferrer">
                  ARTEEP</a>
              </li>
              <li>
                <a href="http://ffat-federation.org/ethique" target="_blank" rel="noopener noreferrer">
                  FFAT – Code de déontologie</a>
              </li>
              <li>
                <a href="https://www.smartfr.fr" target="_blank" rel="noopener noreferrer">
                  Smart</a>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default APropos;