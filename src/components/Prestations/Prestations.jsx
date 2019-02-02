import React from "react";
import { LINK_PRESTATIONS } from '../../constants'

function Prestations() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_PRESTATIONS}</span>
            <p>ARTalgie intervient de manière innovante sur deux plans dans votre entreprise : préventif et/ou curatif.
              L'innovation tient dans l'approche art-thérapeutique : elle se veut à l'écoute de chaque participant, et
              dans un parcours actif basé sur les sens.
            </p>
            <br/>
            <p>
              En <u>prévention</u>, pour améliorer la Qualité de Vie au Travail, ARTalgie propose des sessions comme
              suit :
            </p>
              <ul>
                <li> - La cohésion d'équipe</li>
                <li> - Prendre la parole en public</li>
                <li> - Gérer le stress</li>
                <li> - La dynamique de groupe</li>
                <li> - La confiance en soi</li>

              </ul>
            <br/>
            <p>
              En <u>aide</u>, ARTalgie peut intégrer votre plan d'actions contenu dans le document unique, ou suite à un
              diagnostic de risques. Les sessions proposées pourront alors s'intituler :
            </p>
              <ul>
                <li>- L'écoute dans le groupe</li>
                <li>- La communication dans le groupe</li>
                <li>- L'estime de soi</li>
                <li>- Décompressez, créez</li>
                <li>- Lâcher-prise</li>

              </ul>
            <br/>
            <p>
              Plusieurs outils art-thérapeutiques peuvent être envisagés et mixés : théâtre, danse, peinture, terre,
              dessin, collage, gravure, relaxation. Ils seront adaptés aux choix et aux besoins.
            </p>
            <br/>
            <p>
              Les interventions se font dans vos locaux par demi-journée, pour des groupes de maximum 10 personnes. Le
              matériel spécifique est fourni.
              Le tarif de base est fixé à 800€ pour une demi-journée.
            </p>
            <p> Il ne comprend pas les frais de déplacement, ou une éventuelle location de salle. Un devis sur mesure
              sera établi selon vos besoins.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prestations;