import React from "react";
import qwert from './../qwert.json'
import verifyWord from "./verifyWord.js";
import './../css/alpha.css'

export default function Alpha(){
    function returnEveryLetter() {
        function LoadAlpha(letter) {
            const [changeColor, setChangeColor] = React.useState('#2c2c2c');

            // Change letter color by keyboard inputs
            document.addEventListener('keyup', (event)=>{
                if (event.key.toUpperCase() === letter.toUpperCase()){
                    letterColor(letter);
                }
            });

            // Change letter color by clicking in the letter
            let letterColor = (letter) => {

                verifyWord(letter);
                var lettersData = JSON.parse(localStorage.getItem('letters'));

                if (lettersData[letter] === true){
                    setChangeColor('#04ac04');
                } else {
                    setChangeColor('#ac0404');
                }
                localStorage.setItem('lastKey', letter);
            }

            return (
                <div onClick={()=>letterColor(letter)} className="alphaLetter" key={letter}
                style={{backgroundColor: changeColor}}>
                    <p>{letter}</p>
                </div>
            );
        }
    
        var alphaQwert = [];

        for (var i = 0; i < qwert.length; i++){
            alphaQwert[i] = qwert[i];
        }

        var jsx = alphaQwert.map(letter=>{
            return LoadAlpha(letter);
        });

        return (
            <>{jsx}</>
        )
    }

    return (
        <div id="alpha">
            {returnEveryLetter()}
        </div>
    );
}