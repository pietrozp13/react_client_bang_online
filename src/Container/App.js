import React, { useEffect, useState } from 'react';
import useChat from '../hooks/useChat'

import Controls from '../Container/Controls/Controls'
import Table from './Table/Table'

function App() {
  const { mensag, playerCharater, allGameData, sendReadyStart, sendReadyStartMaster, sendDebug, playerTurn, handlePassTurn, socketIDPlayer } = useChat()
  const [value, setValue] = useState("player")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="App" style={{ backgroundColor: "gray", "height": "100vh" }}>
        <Controls
          handleAddPlayer={(value) => sendReadyStart(value)}
          handleReadyStartPlayer={sendReadyStartMaster}
          sendHandleDebug={sendDebug}
          setHandleValue={(e) => handleChange(e)}
          value={value}
        />
        <Table playerCharater={playerCharater} playersParam={allGameData} currentPlayerID={value} socketIDPlayer={socketIDPlayer}/>
        {console.log("player id 1",playerTurn)}
        {console.log("player id 2",socketIDPlayer)}
        {playerTurn === socketIDPlayer &&
          <div>
            <p>comands</p>
            <button onClick={handlePassTurn}>Passar turn</button>
          </div>
        }
    </div>
  );
}

export default App;