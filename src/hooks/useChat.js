import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';


const useChat = () => {
    const [mensag, setMsg] = useState([])
    const [socketIDPlayer, setSocketIDPlayer] = useState(null)
    const [allGameData, setAllGameData] = useState([])
    const [playerTurn, setPlayerTurn] = useState(false)
    const [playerCharater, setPlayerCharater] = useState(null)
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = io('http://localhost:5099');

        socketRef.current.on('message', (msgParam) => {
            setMsg(mensag => [...mensag, msgParam])
        });

        socketRef.current.on('user charater', (charaterParam) => {
            console.log("user charater", charaterParam)
            setPlayerCharater(charaterParam)
        });
        
        socketRef.current.on('user cards', (cards) => {
            // console.log("user cards", cards)
        });  

        socketRef.current.on('debugC', (debug) => {
            console.log("debug", debug)
        });  
        
        socketRef.current.on('AllGameData', (allData) => {
            setAllGameData(allData)
        });

        socketRef.current.on('playerTurn', ({playerID}) => {
            setPlayerTurn(playerID)
        });

        return () => {
            socketRef.current.disconnect();
        }
      },[])

    const sendReadyStart = (name) => {
        setSocketIDPlayer(socketRef.current.id)
        socketRef.current.emit("sendReadyStart", {
            id: socketRef.current.id,
            name: name
        })
    }

    const sendReadyStartMaster = () => {
        socketRef.current.emit("sendReadyStartMaster")
    }

    const sendDebug = () => {
        socketRef.current.emit("debug")
    }

    const handlePassTurn = () => {
        setPlayerTurn(false)
        socketRef.current.emit("handlePassTurn", {
            playerID: socketRef.current.id
        })
    }

    return {
        mensag,
        socketIDPlayer,
        allGameData,
        sendReadyStart,
        sendReadyStartMaster,
        sendDebug,
        playerTurn,
        handlePassTurn,
        playerCharater
    }

}


export default useChat;