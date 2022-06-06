import CryptoJs from 'crypto-js';

export default function chooseWord(){
    var themeList = [
        'animal',
        'fruta',
        'profissão',
        'país',
    ];

    var theme = themeList[Math.floor(Math.random() * themeList.length)];
    
    var choose = require(`./palavras/${theme}.json`);
    const word = choose[Math.floor(Math.random() * choose.length)];

    localStorage.setItem('word', CryptoJs.AES.encrypt(word, 'claus'));
    localStorage.setItem('theme', theme);
}