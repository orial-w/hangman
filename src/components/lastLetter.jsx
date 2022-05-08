import React from "react";
import verifyWord from './verifyWord.js'
import './../css/lastLetter.css'

export default function LastLetter(){
    const [pressed, setPressed] = React.useState('');

    document.addEventListener('keyup', (event)=>{
        if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 189) {
            setPressed((event.key).toUpperCase());
            localStorage.setItem('lastKey', event.key);

            verifyWord(event.key)

        }
    });

    document.addEventListener('click', ()=>{
        setPressed(localStorage.getItem('lastKey').toUpperCase());
    });

    return (
        <div id="lastLetter">
            <p>{pressed}</p>
        </div>
    )
}