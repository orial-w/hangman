import qwert from './../qwert.json'

export default function checkMistakes() {
    var lettersData = JSON.parse(localStorage.getItem('letters'));
    var allMistakes = 1;
    
    for (var i = 0; i < qwert.length; i++){
        if (lettersData[qwert[i]] === false && lettersData[qwert[i]] !== undefined){
            allMistakes += 1;
        }
    };

    localStorage.setItem('mistakes', allMistakes);
}