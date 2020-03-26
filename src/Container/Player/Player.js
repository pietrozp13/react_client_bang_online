import React from 'react'
import './styles.css'

export default function Player({playerName, color, isTurn }) {
    return (
        <div className={'playerContainer'} style={{ backgroundColor: color }}>
            {playerName}
            {isTurn && <div>!!!!!!</div>}
        </div>
    )
}
