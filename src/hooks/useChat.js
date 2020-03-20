import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';


const useChat = () => {
    const [mensag, setMsg] = useState([])
    const [myCards, setMuCards] = useState([])
    const socketRef = useRef()

    useEffect(() =>{
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

        return () => {
            socketRef.current.disconnect();
        }
      },[])


    const sendMessage = (messagesParam) => {
        socketRef.current.emit("message", messagesParam)
    }

    const sendReadyStart = () => {
        socketRef.current.emit("sendReadyStart", {
            id: socketRef.current.id
        })
    }

    const sendReadyStartMaster = () => {
        socketRef.current.emit("sendReadyStartMaster")
    }

    return { mensag, sendMessage, sendReadyStart, sendReadyStartMaster }

}


export default useChat;