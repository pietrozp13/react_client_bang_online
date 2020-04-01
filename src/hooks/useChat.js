import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const useChat = () => {
  const [mensag, setMsg] = useState([]);
  const [socketIDPlayer, setSocketIDPlayer] = useState(null);
  const [allGameData, setAllGameData] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [playerCharater, setPlayerCharater] = useState(null);
  const [userCards, setUserCards] = useState(null);
  const [cardSelected, setCardSelected] = useState(null);
  const [playerSelected, setPlayerSelected] = useState(null);
  const [infos, setInfos] = useState([]);
  const [atacInfo, setAtacInfo] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:5099");

    socketRef.current.on("message", msgParam => {
      setMsg(mensag => [...mensag, msgParam]);
    });

    socketRef.current.on("user charater", charaterParam => {
      setPlayerCharater(charaterParam);
    });

    socketRef.current.on("user cards", cards => {
      console.log("user cards", cards);
      setUserCards(cards);
    });

    socketRef.current.on("debugC", debug => {
      console.log("debug", debug);
    });

    socketRef.current.on("AllGameData", allData => {
      setAllGameData(allData);
    });

    socketRef.current.on("playerTurn", ({ playerID }) => {
      setPlayerTurn(playerID);
    });

    socketRef.current.on(
      "playerTurnUseCardInfos",
      ({ card, fromPlayer, toPlayer, type }) => {
        setInfos([...infos, { cardUsed: card, fromPlayer, toPlayer, type }]);
      }
    );

    socketRef.current.on("reciveAttack", ({ card, fromPlayer, toPlayer }) => {
      console.log("aquiii, recebeu ataque");
      setAtacInfo([...atacInfo, { info: "voce foi atacado" }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendReadyStart = name => {
    setSocketIDPlayer(socketRef.current.id);
    socketRef.current.emit("sendReadyStart", {
      id: socketRef.current.id,
      name: name
    });
  };

  const sendReadyStartMaster = () => {
    socketRef.current.emit("sendReadyStartMaster");
  };

  const sendDebug = () => {
    socketRef.current.emit("debug");
  };

  const handlePassTurn = () => {
    setPlayerTurn(false);
    socketRef.current.emit("handlePassTurn", {
      playerID: socketRef.current.id
    });
  };

  const useCard = ({ card, player }) => {
    socketRef.current.emit("Use Cart", {
      card: cardSelected,
      fromPlayer: socketIDPlayer,
      toPlayer: playerSelected.id
    });
    setCardSelected(null);
    setPlayerSelected(null);
  };

  const useEquipCard = () => {
    console.log("selected card", cardSelected);
  };

  const useDiscardCard = () => {
    socketRef.current.emit("Descart Cart", {
      card: cardSelected,
      fromPlayer: socketIDPlayer
    });
    setCardSelected(null);
    setPlayerSelected(null);
  };

  const handleSetPlayerSelected = player => {
    if (playerSelected && player.id === playerSelected.id) {
      setPlayerSelected(null);
    } else {
      setPlayerSelected(player);
    }
  };

  const handleCardSelected = card => {
    if (cardSelected && card.id === cardSelected.id) {
      setCardSelected(null);
    } else {
      setCardSelected(card);
    }
  };

  return {
    mensag,
    socketIDPlayer,
    allGameData,
    sendReadyStart,
    sendReadyStartMaster,
    sendDebug,
    playerTurn,
    handlePassTurn,
    playerCharater,
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
  };
};

export default useChat;
