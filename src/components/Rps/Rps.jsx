import React from "react";

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
            <p>
              <a
                href="https://travail-emploi.gouv.fr/sante-au-travail/prevention-des-risques-pour-la-sante-au-travail/article/les-rps-c-est-quoi"
                target="_blank"
                rel="noopener noreferrer">Ministère du travail et de l'emploi</a><br/>
              <a href="https://www.anact.fr/themes/risques-psychosociaux" target="_blank"
                 rel="noopener noreferrer">Anact (Agence nationale pour l'amélioration des conditions de travail)</a><br/>
              <a href="https://www.ameli.fr/llle-et-vilaine/entreprise/prevention/risques/risques-psychosociaux"
                 target="_blank"
                 rel="noopener noreferrer">Ameli (Assurance maladie)</a><br/>
              <a href="http://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html" target="_blank"
                 rel="noopener noreferrer">INRS : Santé et sécurité au travail</a>
            </p>
          </div>
        </div>
      </div>
    </div>);
}

export default Rps;