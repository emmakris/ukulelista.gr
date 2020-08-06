import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBO8WzZ_mcwNpVtDTfZ80-UHl-cQciFfxs",
    authDomain: "ukulelistagr.firebaseapp.com",
    databaseURL: "https://ukulelistagr.firebaseio.com",
    projectId: "ukulelistagr",
    storageBucket: "ukulelistagr.appspot.com",
    messagingSenderId: "267832585172",
    appId: "1:267832585172:web:a8597feeb28a8f70738441",
    measurementId: "G-WWQRXNY6XR"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
