import React from 'react';
import Header from './components/header.jsx'
import Forc from './components/forc.jsx'
import Alpha from './components/alpha.jsx'
import Theme from './components/theme.jsx';
import chooseWord from './chooseWord.js';
import qwert from './qwert.json'
import './css/page.css'

chooseWord();

function letterStatus(qwert){
  var jsonStatus = {};
  for (let i = 0; i < qwert.length; i++){
    jsonStatus[qwert[i]] = undefined;    
  }
  localStorage.setItem('letters', JSON.stringify(jsonStatus)); 
  return;
}

letterStatus(qwert);
localStorage.setItem('lastKey', ' '); 
localStorage.setItem('mistakes', 1); 

export default function App() {
  return (
    <div id="app">
    <Header></Header>
      <div id="main">
        <Forc></Forc>
        <div id="nonForc">
          <Theme></Theme>
          <div id="AlphaBck">
            <Alpha></Alpha>
          </div>
        </div>
      </div>
    </div>
  );
}
