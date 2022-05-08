import React from "react";
import CryptoJS from 'crypto-js';
import './../css/wordS.css'

export default function WordSpace(){
    function drawWord(word){
        var wordLetters = [];
        for (var i = 0; i < word.length; i++){
            wordLetters[i] = word.charAt(i);
        }


        function FindLetter(letter, index){
            const [changeLetter, setChangeLetter] = React.useState('?');

            document.addEventListener('keyup', event=>{
                if (event.key.toUpperCase() === letter.toUpperCase()){
                    setChangeLetter(event.key.toUpperCase());
                }
            });

            document.addEventListener('click', ()=>{
                var letterData = JSON.parse(localStorage.getItem('letters'));
                if (letterData[letter.toUpperCase()] === true){
                    setChangeLetter(letter.toUpperCase());
                }
            });

            return (
                <div className="alphaLetter" id={'wordLetter_'+index} key={index}>
                    <p>{changeLetter}</p>
                </div>
            );
        }

        
        var jsx = wordLetters.map((letter, index)=>{
            return FindLetter(letter, index);
        });

        return (<>{jsx}</>);
    }

    
    var theWord = CryptoJS.AES.decrypt(
        localStorage.getItem('word'), 'claus'
    ).toString(CryptoJS.enc.Utf8);

    
    return (
        <div className="wordSpace">
            {drawWord(theWord)}
        </div>
    );
}