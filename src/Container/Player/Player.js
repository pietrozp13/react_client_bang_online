import React from 'react'
import './styles.css'

export default function Player({playerName, color }) {
    return (
        <div className={'playerContainer'} style={{ backgroundColor: color }}>
            {playerName}
        </div>
    )
}
