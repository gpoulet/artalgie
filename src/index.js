import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/materialize-css/dist/js/materialize.min'
import * as $ from 'jquery';

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.scss';
//import * as serviceWorker from './serviceWorker';


window.$ = $;
window.jQuery = $;

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
