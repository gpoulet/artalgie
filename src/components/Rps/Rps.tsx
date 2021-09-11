import React, { memo, ReactElement } from "react";

import RpsLink from "./RpsLink";

import { RPS_LINKS } from '../../constants'

const Rps = (): ReactElement => (
  <div className="row no-margin-bottom">
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Les risques psychosociaux</span>
          <p>
            Les <b>risques psychosociaux</b> sont définis comme un <b>risque</b> pour la santé physique
            et mentale des travailleurs, dont les causes sont à rechercher dans les conditions de travail,
            les facteurs liés à l'organisation du travail et ceux liés aux relations de travail.
          </p>
          <p>Des <b>symptômes</b> peuvent alerter : troubles de la concentration, troubles du sommeil, irritabilité,
            nervosité,
            fatigue importante, palpitations, douleurs chroniques, etc.</p>
          <p>
            Les <b>conséquences</b> sur la santé sont <u>graves</u> : <i>maladies cardio-vasculaires</i>, <i>troubles
            musculo-squelettiques</i>, <i>troubles anxio-dépressifs</i>, <i>syndrome d'épuisement professionnel</i>
            , <i>suicide</i>.
          </p>
          <br/>
          <p>
            Indépendamment des effets sur la santé des individus, les risques psychosociaux ont un <u>impact</u> sur
            le fonctionnement de l'entreprise : <b>absentéisme</b>, <b>turnover</b>, <b>ambiance de travail</b>.</p>
          <p>
            Ils peuvent concerner toutes les entreprises quel que soient leur taille et leur secteur d'activité.
          </p>
          <p>Les enjeux sont de taille : <i>performance</i>, <i>égalité homme femme</i>, <i>conciliation des temps de
            vie</i>
            , <i>démocratie sociale</i>.
          </p>
          <br/>
          <p><u>Il est possible de les prévenir.</u></p>
          <br/>
          <p>
            Pour plus d'informations, je vous recommande ces lectures :</p>

          <div className="rps-links">
            {RPS_LINKS.map((item, index) => <RpsLink key={index} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  </div>)

export default memo(Rps);
