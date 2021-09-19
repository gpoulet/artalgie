import React, { memo, ReactElement } from "react";
import Gallery from "react-photo-gallery";

import Sessions from "./Sessions";

import { ARTALGIE, LINK_PRESTATIONS } from "../../constants";
import { SESSIONS_CURATIF, SESSIONS_PREVENTION, PRESTATIONS_PHOTOS } from "./Prestations.constants";

import "./_prestations.scss"

const Prestations = (): ReactElement =>
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{LINK_PRESTATIONS}</span>
          <p>{ARTALGIE} intervient de manière innovante sur deux plans dans votre entreprise
            : <b>préventif</b> et/ou <b>curatif</b>.</p>
          <p>
            L'innovation tient dans l'approche art-thérapeutique : elle se veut à l'écoute de chaque participant, et
            dans un parcours actif basé sur les <u>sens</u>.
          </p>
          <br/>
          <Gallery photos={PRESTATIONS_PHOTOS} />
          <br/>
          <p className="subtitle-prestations">Prévention</p>
          <p>
            En <u>prévention</u>, pour améliorer la Qualité de Vie au Travail, {ARTALGIE} propose des sessions comme
            suit :
          </p>
          <Sessions sessions={SESSIONS_PREVENTION}/>


          <p className="subtitle-prestations">Curatif</p>
          <p>
            En <u>aide</u>, {ARTALGIE} peut intégrer votre plan d'actions contenu dans le document unique, ou suite à
            un
            diagnostic de risques. Les sessions proposées pourront alors s'intituler :
          </p>
          <Sessions sessions={SESSIONS_CURATIF}/>
          <p className="subtitle-prestations">Outils</p>
          <p>
            Plusieurs outils art-thérapeutiques peuvent être envisagés et mixés : <i>théâtre</i>, <i>danse</i>, <i>
            peinture</i>, <i>terre</i>, <i>dessin</i>, <i>collage</i>, <i>gravure</i>, <i>relaxation</i>.
            Ils seront adaptés aux choix et aux besoins.
          </p>
          <br/>
          <br/>
          <p className="subtitle-prestations">Tarifs</p>
          <p>
            Les interventions se font <b>dans vos locaux</b> par <b>demi-journée</b>, pour des groupes de <b>maximum
            10 personnes</b>. Le
            matériel spécifique est fourni.
          </p>
          <br/>
          <p>Le tarif de base est fixé à <b>800€</b> pour une demi-journée.
            Il ne comprend pas les frais de déplacement, ou une éventuelle location de salle.
          </p>
          <br/>
          <p>Un devis <u>sur mesure</u> sera établi pour répondre à vos spécificités.</p>
        </div>
      </div>
    </div>
  </div>

export default memo(Prestations);
