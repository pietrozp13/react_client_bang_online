import React, { useState, useEffect } from "react";
import "./Table.css";

import Player from "../Player/Player";

export default function Table({
  playerCharater,
  playersParam,
  currentPlayerID,
  socketIDPlayer,
  handleSetPlayerSelected,
  playerSelected
}) {
  const [playersOrder, setPlayersOrder] = useState([]);

  useEffect(() => {
    let players = playersParam;

    const index = players.findIndex(player => player.name === currentPlayerID);

    let auxArray = players.slice(index, players.length);
    let auxArrayTail = players.slice(0, index);

    const newPlayers = [...auxArray, ...auxArrayTail];

    setPlayersOrder(newPlayers);
  }, [playersParam, currentPlayerID]);

  return (
    <div className={"tableContainer"}>
      {playersOrder.length > 0 && (
        <div style={{ position: "absolute", width: "100vw" }}>
          <div style={{ position: "absolute", top: "210px", left: "57%" }}>
            <h5>{playerCharater}</h5>
            <Player
              onClick={null}
              playerName={playersOrder[0].name}
              selected={false}
              color={"#e6b935"}
              isTurn={socketIDPlayer === playersOrder[0].id}
            />
          </div>
          <div style={{ position: "absolute", top: "60px", left: "77%" }}>
            <Player
              onClick={() => handleSetPlayerSelected(playersOrder[1])}
              playerName={playersOrder[1].name}
              selected={
                playerSelected && playerSelected.id === playersOrder[1].id
              }
              color={"white"}
              isTurn={socketIDPlayer === playersOrder[1].id}
            />
          </div>
          <div style={{ position: "absolute", top: "-80px", left: "68%" }}>
            <Player
              onClick={() => handleSetPlayerSelected(playersOrder[2])}
              playerName={playersOrder[2].name}
              selected={
                playerSelected && playerSelected.id === playersOrder[2].id
              }
              color={"white"}
              isTurn={socketIDPlayer === playersOrder[2].id}
            />
          </div>
          <div style={{ position: "absolute", top: "-80px", left: "46%" }}>
            <Player
              onClick={() => handleSetPlayerSelected(playersOrder[3])}
              selected={
                playerSelected && playerSelected.id === playersOrder[3].id
              }
              playerName={playersOrder[3].name}
              color={"white"}
              isTurn={socketIDPlayer === playersOrder[3].id}
            />
          </div>
          {playersOrder.length > 4 && (
            <div style={{ position: "absolute", top: "-80px", left: "25%" }}>
              <Player
                onClick={() => handleSetPlayerSelected(playersOrder[4])}
                selected={
                  playerSelected && playerSelected.id === playersOrder[4].id
                }
                playerName={playersOrder[4].name}
                color={"white"}
                isTurn={socketIDPlayer === playersOrder[4].id}
              />
            </div>
          )}
          {playersOrder.length > 5 && (
            <div style={{ position: "absolute", top: "60px", right: "88%" }}>
              <Player
                onClick={() => handleSetPlayerSelected(playersOrder[5])}
                selected={
                  playerSelected && playerSelected.id === playersOrder[5].id
                }
                playerName={playersOrder[5].name}
                color={"white"}
                isTurn={socketIDPlayer === playersOrder[5].id}
              />
            </div>
          )}
          {playersOrder.length > 6 && (
            <div style={{ position: "absolute", top: "210px", left: "34%" }}>
              <Player
                onClick={() => handleSetPlayerSelected(playersOrder[6])}
                selected={
                  playerSelected && playerSelected.id === playersOrder[6].id
                }
                playerName={playersOrder[6].name}
                color={"white"}
                isTurn={socketIDPlayer === playersOrder[6].id}
              />
            </div>
          )}
        </div>
      )}
      <div className={"rectangle"} />
    </div>
  );
}
