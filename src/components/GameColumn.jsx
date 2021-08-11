import React, {useContext} from 'react'
import {GlobalCreateContext} from '../GlobalContext'

let columnStyles = {
    backgroundColor: "white",
    color: "green", 
    border: "1px solid darkgray",
    textAlign: "center",
    padding: "10px 20px",
    cursor: "pointer",
}

const GameColumn = ({columnNoStart}) => {

    const ticTacToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps, setGameProps] = ticTacToeState.gameProps
    const gameDetails = gameProps.gameDetails
    const playerOne = gameDetails[0].selectedList
    const playerTwo = gameDetails[1].selectedList
    const disabledGame = gameProps.disabledGame

    const handleColumnClick = (e) => {
        let playerDetails = {...gameProps}
        let oldPlayer = playerDetails.gameDetails[+playerDetails.activePlayer]
        if(!playerOne.includes(columnNoStart) && !playerTwo.includes(columnNoStart))
        {
            oldPlayer.selectedList = [...oldPlayer.selectedList, +e.target.innerText];
            playerDetails.activePlayer = (playerDetails.activePlayer) ? 0 : 1
            setGameProps(playerDetails)
        }
        else
        {
            alert('already selected')
        }
        
    }    

    columnStyles = {...columnStyles, backgroundColor: "white", color: "green"}

    if(playerOne.length > 0 && playerOne.includes(columnNoStart))
    {
        columnStyles = {...columnStyles, backgroundColor: gameDetails[0].color, color: "white"}
    }

    if(playerTwo.length > 0 && playerTwo.includes(columnNoStart))
    {
        columnStyles = {...columnStyles, backgroundColor: gameDetails[1].color, color: "white"}
        
    }

    return (
        <>
        {
            (disabledGame)
            ?
            <td style={columnStyles} id={columnNoStart} >{columnNoStart}</td>
            :
            <td style={columnStyles} id={columnNoStart} onClick={e => handleColumnClick(e)}>{columnNoStart}</td>
        }
        </>
                
    )
}

export default GameColumn
