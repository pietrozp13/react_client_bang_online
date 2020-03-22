import React, { useState, useEffect } from 'react'
import './Table.css'

import Player from '../Player/Player'

export default function Table({ playersParam, currentPlayerID }) {
    const [playersOrder, setPlayersOrder] = useState([])


    useEffect(() => {
        let players = playersParam

        const index = players.findIndex((player) => player.name === currentPlayerID);

        let auxArray = players.slice(index,players.length)
        let auxArrayTail = players.slice(0, index)
        console.log("arr 1", auxArray)
        console.log("arr 2 aux", auxArrayTail)

        const newPlayers = [...auxArray, ...auxArrayTail]

        console.log("new array", newPlayers)

        setPlayersOrder(newPlayers)
    }, [playersParam, currentPlayerID])

    return (
        <div className={'tableContainer'}>
            {playersOrder.length > 0 &&
                <div style={{ position: "absolute", width: "100vw" }}>
                    <div style={{ position: "absolute", top: "210px", left: "57%" }}>
                        <Player playerName={playersOrder[0].name} color={'yellow'}/>
                    </div>
                    <div style={{ position: "absolute", top: "60px", left: "88%" }}>
                        <Player playerName={playersOrder[1].name} color={'brown'}/>
                    </div>
                    <div style={{ position: "absolute", top: "-80px", left: "68%" }}>
                        <Player playerName={playersOrder[2].name} color={'red'}/>
                    </div>
                    <div style={{ position: "absolute", top: "-80px", left: "46%", }}>
                        <Player playerName={playersOrder[3].name} color={'#a2a'}/>
                    </div>
                    {playersOrder.length > 4 &&
                        <div style={{ position: "absolute", top: "-80px", left: "25%" }}>
                            <Player playerName={playersOrder[4].name} color={'blue'}/>
                        </div>
                    }
                    {playersOrder.length > 5 &&
                        <div style={{ position: "absolute", top: "60px", right: "88%" }}>
                            <Player playerName={playersOrder[5].name}color={'green'}/>
                        </div>
                    }
                    {playersOrder.length > 6 &&
                        <div style={{ position: "absolute", top: "210px", left: "34%" }}>
                            <Player playerName={playersOrder[6].name} color={'white'}/>
                        </div>
                    }
                </div>
            }
            <div className={'rectangle'}/>
        </div>
    )
}
