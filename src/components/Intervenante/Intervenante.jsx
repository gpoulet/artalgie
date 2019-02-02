import React from "react";
import { LINK_INTERVENANTE, SITE_NATHALIE } from '../../constants'

function Intervenante() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_INTERVENANTE}</span>
            <p>ARTalgie est dirigée par Nathalie POULET-GUILBERT, art-thérapeute certifiée, formée par ARTEEP, adhérant
              à la charte de déontologie de la Fédération Française des Art-Thérapeutes.
              Anciennement cadre en entreprise et comédienne, Nathalie a choisi de se reconvertir : cherchant à allier
              ses compétences artistiques avec son appétence au soutien, à la relation d'aide révélée par son expérience
              managériale, l'art-thérapie est alors apparue la voie toute tracée.
            </p>
            <br/>
            <p>
              Après deux années de stage en psychiatrie adultes, Nathalie a effectué une année de spécialisation sur les
              pathologies du travailleur : elle est intervenue en médecine préventive, mais aussi en consultation
              douleurs chroniques.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intervenante;