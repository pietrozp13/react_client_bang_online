import React, { useEffect, useState } from 'react';
import './App.css';
import useChat from './hooks/useChat'

function App() {
  const { mensag, sendMessage } = useChat()
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSend = () => {
    console.log("text", value)
    sendMessage(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bang online
        </p>
        {mensag.map((msg)=> {
          return <p key={msg}>{msg}</p>
        })}
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={handleSend}>send</button>
      </header>
    </div>
  );
}

export default App;
