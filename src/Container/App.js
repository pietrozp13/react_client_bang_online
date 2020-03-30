import React, { useEffect, useState } from "react";
import useChat from "../hooks/useChat";

import Controls from "../Container/Controls/Controls";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";

function App() {
  const {
    mensag,
    playerCharater,
    allGameData,
    sendReadyStart,
    sendReadyStartMaster,
    sendDebug,
    playerTurn,
    handlePassTurn,
    socketIDPlayer,
    userCards,
    useCard,
    useEquipCard,
    useDiscardCard,
    handleCardSelected,
    cardSelected,
    handleSetPlayerSelected,
    playerSelected
  } = useChat();
  const [value, setValue] = useState("player");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: "gray", height: "100vh" }}>
      <Controls
        handleAddPlayer={value => sendReadyStart(value)}
        handleReadyStartPlayer={sendReadyStartMaster}
        sendHandleDebug={sendDebug}
        setHandleValue={e => handleChange(e)}
        value={value}
      />
      <Table
        playerCharater={playerCharater}
        playersParam={allGameData}
        currentPlayerID={value}
        socketIDPlayer={socketIDPlayer}
        playerSelected={playerSelected}
        handleSetPlayerSelected={handleSetPlayerSelected}
      />
      {playerTurn === socketIDPlayer && (
        <div>
          <p>comands</p>
          <button onClick={handlePassTurn}>Passar turn</button>
        </div>
      )}

      <Cards
        selectedPlayer={playerSelected}
        useCard={useCard}
        useEquipCard={useEquipCard}
        useDiscardCard={useDiscardCard}
        userCards={userCards}
        handleCardSelect={card => handleCardSelected(card)}
        cardSelected={cardSelected}
      />
    </div>
  );
}

export default App;
