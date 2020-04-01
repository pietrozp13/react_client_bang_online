import React, { useEffect, useState } from "react";
import useChat from "../hooks/useChat";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Controls from "../Container/Controls/Controls";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";

import { getInfoMsg } from "../utils";

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
    playerSelected,
    infos,
    atacInfo
  } = useChat();

  useEffect(() => {
    if (infos.length > 0) {
      infos.forEach(info => {
        getInfoMsg(info);
      });
    }
  }, [infos]);

  useEffect(() => {
    if (atacInfo.length > 0) {
      toast.error(atacInfo[0].info, {
        containerId: "A",
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
      });
    }
  }, [atacInfo]);

  const [value, setValue] = useState(
    "player" + Math.floor(Math.random() * 1000)
  );

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: "gray", height: "100vh" }}>
      <ToastContainer
        enableMultiContainer
        newestOnTop={true}
        containerId={"A"}
        position={toast.POSITION.BOTTOM_LEFT}
      />
      <div style={{ width: "65%" }}>
        <Controls
          handleAddPlayer={value => sendReadyStart(value)}
          handleReadyStartPlayer={sendReadyStartMaster}
          sendHandleDebug={sendDebug}
          setHandleValue={e => handleChange(e)}
          value={value}
          cleanToasts={() => toast.dismiss()}
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
    </div>
  );
}

export default App;
