import React from "react";

export default function Card({ cardName, selected, onHandleClick }) {
  return (
    <div
      style={{
        width: "100px",
        height: "165px",
        margin: "20px",
        backgroundColor: "red",
        border: selected ? "5px solid #1C6EA4" : "5px solid red",
        display: "flex",
        borderRadius: "10px",
        alignItems: "center"
      }}
      onClick={onHandleClick}
    >
      Carta {cardName}
    </div>
  );
}
