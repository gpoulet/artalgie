import React from "react";
import { LINK_ART_THERAPIE } from '../../constants'

function ArtTherapie() {
  return (<div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_ART_THERAPIE}</span>
            <p>L'art-thérapie est une forme de psychothérapie qui utilise la création artistique à des fins
              thérapeutiques
              ou de développement personnel.
              Le but n'est pas esthétique. Il n'y a pas non plus d'interprétation des œuvres.</p>
            <p>Il s'agit ici avant tout de s'attacher au processus créatif, processus qui met en mouvement le corps, la
              pensée, l'imagination, les émotions. Le geste créateur va alors insuffler un élan porteur de changement et
              de sens.
              L'art-thérapie est utilisée auprès de publics variés, de tous âges et toutes pathologies. Elle permet
              d'aider à de nombreux niveaux : stress, anxiété, confiance en soi, estime de soi…
            </p>
            <br/>
            <p>
              L'art-thérapeute, selon sa formation, exploite une ou plusieurs techniques artistiques (peinture, dessin,
              collage, sculpture, danse, théâtre, céramique, musique, etc.) pour aider toute personne rencontrant des
              difficultés tant physiques, psychiques que socio-relationnelles.
            </p>
            <p>
              Son travail se base sur l'expression, la communication et la relation.
            </p>
            <br/>

            <p>Vous voulez en savoir d’avantage :</p>
            <ul>
              <li>
                Wikipedia : <a href="https://fr.wikipedia.org/wiki/Art-thérapie" target="_blank"
                            rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Art-thérapie</a>
              </li>
              <li>FFAT : <a href="http://ffat-federation.org" target="_blank"
                         rel="noopener noreferrer">http://ffat-federation.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtTherapie;