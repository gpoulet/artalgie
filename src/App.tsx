import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  Accueil,
  ArtTherapie,
  Cabinet,
  Creations,
  Contact,
  APropos,
  Reseau,
  MentionsLegales,
  Prestations,
  Rps,
  Error,
  ScrollToTop
} from './components';
import {
  ROUTING_ACCUEIL,
  ROUTING_CABINET,
  ROUTING_CONTACT,
  ROUTING_CREATIONS,
  ROUTING_ERROR,
  ROUTING_A_PROPOS,
  ROUTING_RESEAU,
  ROUTING_MENTIONS_LEGALES,
  ROUTING_ART_THERAPIE,
  ROUTING_PRESTATIONS,
  ROUTING_RPS
} from './constants'
// @ts-ignore
import ParallaxProvider from 'react-scroll-parallax/lib/components/ParallaxProvider'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <ScrollToTop>
          <ParallaxProvider>
            <Switch>
              <Route path={ROUTING_ACCUEIL} exact component={Accueil}/>
              <Route path={ROUTING_A_PROPOS} component={APropos}/>
              <Route path={ROUTING_ART_THERAPIE} component={ArtTherapie}/>
              <Route path={ROUTING_CABINET} component={Cabinet}/>
              <Route path={ROUTING_CONTACT} component={Contact}/>
              <Route path={ROUTING_CREATIONS} component={Creations}/>
              <Route path={ROUTING_RESEAU} component={Reseau}/>
              <Route path={ROUTING_MENTIONS_LEGALES} component={MentionsLegales}/>
              <Route path={ROUTING_PRESTATIONS} component={Prestations}/>
              <Route path={ROUTING_RPS} component={Rps}/>
              <Route path={ROUTING_ERROR} component={Error}/>
            </Switch>
          </ParallaxProvider>
        </ScrollToTop>
        <Footer/>
      </div>
    </Router>
  )
    ;
}

export default App;
