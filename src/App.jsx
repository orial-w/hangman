import React from 'react';
import Header from './components/header.jsx'
import Forc from './components/forc.jsx'
import Alpha from './components/alpha.jsx'
import chooseWord from './chooseWord.js';
import qwert from './qwert.json'
import CryptoJs from 'crypto-js';
import './css/page.css'

localStorage.setItem('word', CryptoJs.AES.encrypt(chooseWord(), 'claus'));

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
        <div id="AlphaBck">
          <Alpha></Alpha>
        </div>
      </div>
    </div>
  );
}
