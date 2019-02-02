import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  Accueil,
  Contact,
  Intervenante,
  LiensUtiles,
  Precisions,
  Prestations,
  Error,
  ScrollToTop
} from './components';
import {
  ROUTING_ACCUEIL,
  ROUTING_CONTACT,
  ROUTING_ERROR,
  ROUTING_INTERVENANTE,
  ROUTING_LIENS_UTILES,
  ROUTING_PRECISIONS,
  ROUTING_PRESTATIONS
} from './constants'
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
              <Route path={ROUTING_CONTACT} component={Contact}/>
              <Route path={ROUTING_INTERVENANTE} component={Intervenante}/>
              <Route path={ROUTING_LIENS_UTILES} component={LiensUtiles}/>
              <Route path={ROUTING_PRECISIONS} component={Precisions}/>
              <Route path={ROUTING_PRESTATIONS} component={Prestations}/>
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
