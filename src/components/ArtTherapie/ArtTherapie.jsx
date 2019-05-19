import React, { memo } from "react";
import { LINK_ART_THERAPIE, ART_THERAPIE_LINKS } from '../../constants'

function Link({ link, label, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img height="200px" src={image} alt={label}/>
      <br/>
      {label}
    </a>
  )
}

function ArtTherapie() {
  return (<div className="row no-margin-bottom">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_ART_THERAPIE}</span>
            <p>L'art-thérapie est une forme de psychothérapie qui utilise la <b>création artistique</b> à des <b>fins
              thérapeutiques</b> ou de <b>développement personnel</b>.
              Le but n'est pas esthétique. Il n'y a pas non plus d'interprétation des œuvres.</p>
            <p>Il s'agit ici avant tout de s'attacher au <b>processus créatif</b>, processus qui met en mouvement
              le <b>corps</b>,
              la <b>pensée</b>, <b>l'imagination</b>, les <b>émotions</b>. Le geste créateur va alors insuffler un
              élan porteur de changement et
              de sens.</p>
            <p>L'art-thérapie est utilisée auprès de publics variés, de tous âges et toutes pathologies.</p>
            <p>Elle permet
              d'aider à de nombreux niveaux : <i>stress</i>, <i>anxiété</i>, <i>confiance en soi</i>, <i>estime de
                soi</i>…
            </p>
            <br/>
            <p>
              L'art-thérapeute, selon sa formation, exploite une ou plusieurs <b>techniques artistiques</b> (
              <i>peinture</i>, <i>dessin</i>, <i>collage</i>, <i>sculpture</i>, <i>danse</i>, <i>théâtre</i>
              , <i>céramique</i> <i>musique</i>, etc.) pour <u>aider</u> toute personne rencontrant
              des difficultés tant physiques, psychiques que socio-relationnelles.
            </p>
            <p>
              Son travail se base sur l&apos;<b>expression</b>, la <b>communication</b> et la <b>relation</b>.
            </p>
            <br/>

            <p>Vous voulez en savoir d’avantage :</p>

            <div className="arttherapie-links">
              {ART_THERAPIE_LINKS.map((item, index) => <Link key={index} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ArtTherapie);