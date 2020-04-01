import React from "react";
import Card from "../Card/Card";

export default function Cards({
  userCards,
  handleCardSelect,
  cardSelected,
  useCard,
  useEquipCard,
  useDiscardCard,
  selectedPlayer
}) {
  return (
    <div>
      {userCards && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            bottom: "0",
            width: "65%",
            justifyContent: "space-around",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              margin: "20px"
            }}
          >
            <button
              style={{
                width: "150px",
                height: "40px",
                fontSize: "26px",
                borderRadius: "15px"
              }}
              disabled={!selectedPlayer || !cardSelected}
              onClick={useCard}
            >
              Usar
            </button>
            <button
              style={{
                width: "150px",
                height: "40px",
                fontSize: "26px",
                borderRadius: "15px"
              }}
              onClick={useEquipCard}
            >
              Equipar
            </button>
            <button
              style={{
                width: "150px",
                height: "40px",
                fontSize: "26px",
                borderRadius: "15px"
              }}
              disabled={!cardSelected}
              onClick={useDiscardCard}
            >
              Descartar
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            {userCards.map(card => {
              return (
                <Card
                  cardName={card.descripiton}
                  type={card.type}
                  mira={card.mira}
                  onHandleClick={() => handleCardSelect(card)}
                  selected={cardSelected && cardSelected.id === card.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
