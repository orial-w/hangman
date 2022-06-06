import React from 'react'
import './../css/theme.css'

export default function Theme () {
    return (
        <div id="theme">
            <h2>{localStorage.getItem('theme').toUpperCase()}</h2>
        </div>
    )
}