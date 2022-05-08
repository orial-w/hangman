export default function verifyWord(letter){
    var CryptoJS = require('crypto-js');
    var word = CryptoJS.AES.decrypt(localStorage.getItem('word'), 'claus').toString(CryptoJS.enc.Utf8);
    
    for (var i = 0; i < word.length; i++){
        var lettersStatus = JSON.parse(localStorage.getItem('letters')) || {};

        // Verify if the letter is on the word
        if (word[i].toUpperCase() === letter.toUpperCase()){
            lettersStatus[letter.toUpperCase()] = true;
        } else if (lettersStatus[letter.toUpperCase()] !== true) {
            lettersStatus[letter.toUpperCase()] = false;
        }

        localStorage.setItem('letters', JSON.stringify(lettersStatus));
    }
}