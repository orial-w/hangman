import React from 'react'
import './../css/popup.css'

export default function popup (req) {
    return (req.trigger) ? (
        <div id="popup">
            <div className="popup-window">
                {req.children}
            </div>
        </div>
    ) : '';
}