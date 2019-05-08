import React from "react";
import {
  RPS_LINKS
} from '../../constants'

function RpsLink({ link, label, image }) {
  return (
    <a href={link}><img src={image} alt={label}/></a>
  )
}

function Rps() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Les risques psychosociaux</span>
            <p>
              Les risques psychosociaux sont définis comme un risque pour la santé physique et mentale des travailleurs,
              dont les causes sont à rechercher dans les conditions de travail, les facteurs liés à l'organisation du
              travail et ceux liés aux relations de travail.
            </p>
            <p>Des symptômes peuvent alerter : troubles de la concentration, troubles du sommeil, irritabilité,
              nervosité,
              fatigue importante, palpitations, douleurs chroniques, etc.
              Les conséquences sur la santé sont graves : maladies cardio-vasculaires, troubles musculo-squelettiques,
              troubles anxio-dépressifs, syndrome d'épuisement professionnel, suicide.
            </p>
            <br/>
            <p>
              Indépendamment des effets sur la santé des individus, les risques psychosociaux ont un impact sur le
              fonctionnement de l'entreprise : absentéisme, turnover, ambiance de travail.
              Ils peuvent concerner toutes les entreprises quel que soient leur taille et leur secteur d'activité. Les
              enjeux sont de taille : performance, égalité homme femme, conciliation des temps de vie, démocratie
              sociale.
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
    </div>);
}

export default Rps;