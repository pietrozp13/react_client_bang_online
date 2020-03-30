import React from "react";
import "./styles.css";

export default function Player({
  playerName,
  color,
  isTurn,
  selected,
  onClick
}) {
  return (
    <div
      className={"playerContainer"}
      onClick={() => onClick && onClick()}
      style={{
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: color,
        border: selected ? "5px solid #1C6EA4" : "5px solid black"
      }}
    >
      {playerName}
      {isTurn && <div>!!!!!!</div>}
    </div>
  );
}
