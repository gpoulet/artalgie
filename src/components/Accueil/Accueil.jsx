import React, { memo } from "react";
import Parallax from '../Parallax'
// import Logo from '../Header/Logo'
//import Ateliers from "./Ateliers";
import {
  ARTALGIE,
  ICON_A_PROPS,
  ICON_ART_THERAPIE,
  ICON_CONTACT, ICON_PRESTATIONS, ICON_RESEAU, ICON_RPS, LINK_A_PROPOS,
  LINK_ART_THERAPIE, LINK_CONTACT, LINK_PRESTATIONS, LINK_RESEAU, LINK_RPS, ROUTING_A_PROPOS,
  ROUTING_ART_THERAPIE,
  ROUTING_CONTACT, ROUTING_PRESTATIONS, ROUTING_RESEAU, ROUTING_RPS
} from '../../constants'
import { Link } from 'react-router-dom'


function Accueil() {
  return (<div className="accueil">

    <Parallax
      min={'-20%'}
      max={'20%'}
      image="images/accueil.jpg"
    >
      <div>
        <img src="/images/logo/logo-white.svg" width="300px" alt="Artalgie" />
        <div className="white-square">Art-thérapie en entreprise</div>
      </div>
    </Parallax>

    <div className="row white">
      <div className="col s12 center-align">
        {/*<i className="medium material-icons blue-text">{ICON_ART_THERAPIE}</i>*/}
        <h4 className="accueil-title">
          L'art-thérapie est au cœur du dispositif que propose {ARTALGIE}.</h4>


        <p className="accueil-text">Vous ne savez pas ce qu'est l'art-thérapie ?</p>
        <p className="accueil-text">Vous êtes curieux, vous voulez en savoir plus...</p>
        <Link to={ROUTING_ART_THERAPIE}
              className="waves-effect waves-light btn button-amber">
          <i className="material-icons left">{ICON_ART_THERAPIE}</i>
          {LINK_ART_THERAPIE}
        </Link>

      </div>
    </div>

    <div className="row">
      <div className="col s12 center-align">
       <h4 className="accueil-title">
          Une étude personnalisée de vos besoins ?</h4>


        <p className="accueil-text">Contactez l'art-thérapeute.</p>
        <p className="accueil-text"> Elle vous accompagne dans les étapes de l'expression de votre besoin à la mise en
          œuvre d'interventions auprès de vos salariés.
        </p>
        <Link to={ROUTING_CONTACT}
              className="waves-effect waves-light btn button-green">
          <i className="material-icons left">{ICON_CONTACT}</i>
          {LINK_CONTACT}
        </Link>

      </div>
    </div>

    <div className="row white">
      <div className="col s12 center-align">
       <h4 className="accueil-title">
          {ARTALGIE} propose des sessions d'art-thérapie en entreprise pour prévenir et lutter contre les risques
          psychosociaux, et notamment l'épuisement professionnel.</h4>


        <p className="accueil-text">Les RPS c'est quoi ? On vous éclaire….</p>
        <Link to={ROUTING_RPS}
              className="waves-effect waves-light btn button-red">
          <i className="material-icons left">{ICON_RPS}</i>
          {LINK_RPS}
        </Link>

      </div>
    </div>


    <div className="row">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE}, c'est un concept innovant, pour des interventions sur mesure.</h4>

        <p className="accueil-text">Vous voulez en savoir plus sur les prestations, et les modalités d'intervention...</p>
        <Link to={ROUTING_PRESTATIONS}
              className="waves-effect waves-light btn button-amber">
          <i className="material-icons left">{ICON_PRESTATIONS}</i>
          {LINK_PRESTATIONS}
        </Link>

      </div>
    </div>

    <div className="row white">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE}</h4>
        <p className="accueil-text">C'est quoi ? c'est qui ?</p>

        <Link to={ROUTING_A_PROPOS}
              className="waves-effect waves-light btn button-green">
          <i className="material-icons left">{ICON_A_PROPS}</i>
          {LINK_A_PROPOS}
        </Link>

      </div>
    </div>



    <div className="row">
      <div className="col s12 center-align">
       <h4 className="accueil-title">{ARTALGIE} vous recommande.</h4>

        <p className="accueil-text">Des partenaires, des professionnels, des rencontres, des amis…</p>
        <Link to={ROUTING_RESEAU}
              className="waves-effect waves-light btn button-red">
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
