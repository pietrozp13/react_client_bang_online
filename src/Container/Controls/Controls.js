import React, { useEffect, useState } from 'react'

export default function Controls({ handleAddPlayer, handleReadyStartPlayer, sendHandleDebug, setHandleValue, value }) {

    return (
        <div>
            <div>
                Bang online
            </div>

            <input type="text" value={value} onChange={setHandleValue} />

            <button onClick={() => handleAddPlayer(value)}>Start Game</button>
            <button onClick={handleReadyStartPlayer}>Start Game Master</button>
            <div>Debug</div>
            <button onClick={sendHandleDebug}>Debug</button>
        </div>
    )
}
