import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';


const useChat = () => {
    const [mensag, setMsg] = useState([])
    const socketRef = useRef()

    useEffect(()=>{
        socketRef.current = io('http://localhost:5099');

        socketRef.current.on('message', (msgParam) => {
            setMsg(mensag => [...mensag, msgParam])
        });

        socketRef.current.on('message prev', (msgParamSer) => {
            console.log("prev msg server", msgParamSer)
        });       

        return () => {
            socketRef.current.disconnect();
        }
      },[])


    const sendMessage = (messagesParam) => {
        socketRef.current.emit("message", messagesParam)
    }

    return { mensag, sendMessage }

}


export default useChat;