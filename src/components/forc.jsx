import React from "react";
import checkMistakes from './checkMistakes.js';
import Popup from "./popup.jsx";
import CryptoJS from "crypto-js";
import '../css/forc.css'

export default function Forc(){
    const [lose, setLose] = React.useState(false);
    const [win, setWin] = React.useState(false);

    var word = CryptoJS.AES.decrypt(
        localStorage.getItem('word'), 'claus').toString(CryptoJS.enc.Utf8);

    function SpriteHangman(){
        const [nextSprite, setNextSprite] = React.useState(require('./../sprites/hang1.png'));

        var checkHangman = () => {
            checkMistakes();
            var mistakeNumber = Number(localStorage.getItem('mistakes'));
            setNextSprite(require(`./../sprites/hang${mistakeNumber}.png`));
            if (mistakeNumber === 7){
                setLose(true);
            }
        }

        var checkWord = () => {
            var lettersData = JSON.parse(localStorage.getItem('letters'));
            var word = CryptoJS.AES.decrypt(
                localStorage.getItem('word'), 'claus'
            ).toString(CryptoJS.enc.Utf8);
            
            var itWin = false;
            var guesses = 0;

            for (var i = 0; i < word.length; i++){
                if (lettersData[word[i].toUpperCase()] === true){
                    guesses++;
                }
            }

            if (guesses === word.length){
                itWin = true;
            }

            return itWin;
        }

        React.useEffect(() => {
            const interval = setInterval(() => {
                checkHangman();
                if (checkWord()){
                    setWin(true);
                }
            }, 100);
          
            return () => clearInterval(interval);
        }, []);
        
        return (
            <img src={nextSprite} alt="forca"/>
        );
    }

    return (
        <>
            <div className="forc">
                <Popup setTrigger={setLose} trigger={lose}>
                    <h3 className="youLose">Você perdeu!</h3>
                    <p>A palavra correta era "{word.toLowerCase()}".</p>
                    <p>Para jogar novamente basta recarregar a página.</p>
                </Popup>
                <Popup setTrigger={setWin} trigger={win}>
                    <h3 className="youWon">Você ganhou!</h3>
                    <p>Parabéns você acertou, a palavra era "{word.toLowerCase()}".</p>
                    <p>Para jogar novamente basta recarregar a página.</p>
                </Popup>
                {SpriteHangman()}
            </div>
        </>
    )
}