import React from "react"
import './../css/header.css'
import LastLetter from "./lastLetter"
export default function Header(){
    return (
        <header>
            <p>Jogo da Forca</p>
            <LastLetter></LastLetter>
        </header>
    )
}