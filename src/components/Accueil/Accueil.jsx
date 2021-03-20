import React, { memo } from "react";
import Parallax from '../Parallax'
// import Logo from '../Header/Logo'
//import Ateliers from "./Ateliers";
import {
  ARTALGIE,
  ICON_A_PROPS,
  ICON_ART_THERAPIE, ICON_CABINET,
  ICON_CONTACT, ICON_PRESTATIONS, ICON_RESEAU, LINK_A_PROPOS,
  LINK_ART_THERAPIE, LINK_CABINET, LINK_CONTACT, LINK_PRESTATIONS, LINK_RESEAU, ROUTING_A_PROPOS,
  ROUTING_ART_THERAPIE, ROUTING_CABINET,
  ROUTING_CONTACT, ROUTING_PRESTATIONS, ROUTING_RESEAU, SLOGAN
} from '../../constants'
import { Link } from 'react-router-dom'


function Accueil() {
  return (<div className="accueil">

    <Parallax
      min={'-20%'}
      max={'20%'}
      image="images/accueil5.jpg"
    >
      <div>
        <img src="/images/logo/logo-white.svg" width="350px" alt="Artalgie" />
        <div className="white-square">{SLOGAN}</div>
      </div>
    </Parallax>

    <div className="row row-accueil white">
      <div className="col s12 center-align">
        {/*<i className="medium material-icons blue-text">{ICON_ART_THERAPIE}</i>*/}
        <h4 className="accueil-title">
          L'art-thérapie est au cœur du dispositif que propose {ARTALGIE}.</h4>


        <p className="accueil-text">Vous ne savez pas ce qu'est l'art-thérapie ?</p>
        <p className="accueil-text">Vous êtes curieux, vous voulez en savoir plus...</p>
        <br/>
        <Link to={ROUTING_ART_THERAPIE}
              className="waves-effect waves-light btn button-blue-light">
          <i className="material-icons left">{ICON_ART_THERAPIE}</i>
          {LINK_ART_THERAPIE}
        </Link>

      </div>
    </div>

    <div className="row row-accueil beige-light">
      <div className="col s12 center-align">
       <h4 className="accueil-title">
          Une écoute personnalisée ?</h4>


        <p className="accueil-text">Contactez l'art-thérapeute.</p>
        <p className="accueil-text">
          Particuliers : Elle vous reçoit pour des consultations en individuel ou en groupe.
        </p>
        <p className="accueil-text">Entreprises : Elle vous accompagne dans les étapes de l'expression de votre besoin à la mise en
          œuvre d'interventions auprès de vos salariés.
        </p>
        <br/>
        <Link to={ROUTING_CONTACT}
              className="waves-effect waves-light btn button-purple">
          <i className="material-icons left">{ICON_CONTACT}</i>
          {LINK_CONTACT}
        </Link>

      </div>
    </div>

    <div className="row row-accueil white">
      <div className="col s12 center-align">
       <h4 className="accueil-title">
          {ARTALGIE} propose des sessions d'art-thérapie en cabinet.</h4>


        <p className="accueil-text">Venez découvrir le lieu...</p>
        <br/>
        <Link to={ROUTING_CABINET}
              className="waves-effect waves-light btn button-pink">
          <i className="material-icons left">{ICON_CABINET}</i>
          {LINK_CABINET}
        </Link>

      </div>
    </div>


    <div className="row row-accueil beige-light">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE}, c'est un concept innovant, pour des interventions sur mesure.</h4>

        <p className="accueil-text">Vous voulez en savoir plus sur les prestations, et les modalités d'intervention...</p>
        <br/>
        <Link to={ROUTING_PRESTATIONS}
              className="waves-effect waves-light btn button-yellow">
          <i className="material-icons left">{ICON_PRESTATIONS}</i>
          {LINK_PRESTATIONS}
        </Link>

      </div>
    </div>

    <div className="row row-accueil white">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE}</h4>
        <p className="accueil-text">C'est quoi ? c'est qui ?</p>
        <br/>
        <Link to={ROUTING_A_PROPOS}
              className="waves-effect waves-light btn button-grey-purple">
          <i className="material-icons left">{ICON_A_PROPS}</i>
          {LINK_A_PROPOS}
        </Link>

      </div>
    </div>



    <div className="row row-accueil beige-light">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE} vous recommande.</h4>

        <p className="accueil-text">Des partenaires, des professionnels, des rencontres, des amis…</p>
        <br/>
        <Link to={ROUTING_RESEAU}
              className="waves-effect waves-light btn button-brown">
          <i className="material-icons left">{ICON_RESEAU}</i>
          {LINK_RESEAU}
        </Link>

      </div>
    </div>



    {/*<div className="row">*/}
      {/*<div className="col s12">*/}
        {/*/!*<p className="brand-logo"><Logo/></p>*!/*/}
        {/*<p><span className="accueil-text">Artalgie propose des sessions d'art-thérapie en entreprise pour prévenir et lutter contre les risques*/}
        {/*psychosociaux, et notamment l'épuisement professionnel.</span>*/}
        {/*</p>*/}
      {/*</div>*/}
    {/*</div>*/}

    {/*<Ateliers/>*/}

    <Parallax
      min={'-20%'}
      max={'20%'}
      image="images/mosaique.jpg"
    ></Parallax>
  </div>);
}

export default memo(Accueil);
