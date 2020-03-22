import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';


const useChat = () => {
    const [mensag, setMsg] = useState([])
    const [myCards, setMuCards] = useState([])
    const [allGameData, setAllGameData] = useState([])
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = io('http://localhost:5099');

        socketRef.current.on('message', (msgParam) => {
            setMsg(mensag => [...mensag, msgParam])
        });

        socketRef.current.on('user charater', (charaterParam) => {
            console.log("user charater", charaterParam)
        });
        
        socketRef.current.on('user cards', (cards) => {
            console.log("user cards", cards)
        });  

        socketRef.current.on('debugC', (debug) => {
            console.log("debug", debug)
        });  
        
        socketRef.current.on('AllGameData', (allData) => {
            setAllGameData(allData)
        });  


        return () => {
            socketRef.current.disconnect();
        }
      },[])

    const sendReadyStart = (name) => {
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

    return {
        mensag,
        allGameData,
        sendReadyStart,
        sendReadyStartMaster,
        sendDebug
    }

}


export default useChat;