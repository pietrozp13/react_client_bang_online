import React, { useEffect, useState } from 'react';
import useChat from '../hooks/useChat'

import Controls from '../Container/Controls/Controls'
import Table from './Table/Table'

function App() {
  const { mensag, allGameData, sendReadyStart, sendReadyStartMaster, sendDebug } = useChat()
  const [value, setValue] = useState("player")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="App" style={{ backgroundColor: "gray", "height": "100vh" }}>
      {/* {console.log(allGameData)} */}
        <Controls
          handleAddPlayer={(value) => sendReadyStart(value)}
          handleReadyStartPlayer={sendReadyStartMaster}
          sendHandleDebug={sendDebug}
          setHandleValue={(e) => handleChange(e)}
          value={value}
        />
        <Table playersParam={allGameData} currentPlayerID={value}/>
    </div>
  );
}

export default App;