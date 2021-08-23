import React, {useContext} from 'react'
import { GlobalCreateContext } from '../../GlobalContext';

const HistoryTableRows = () => {
    const ticTocToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps] = ticTocToeState.gameProps
    console.log(gameProps.history)
    return (
        <>
        {
            gameProps.history.map((history, index) => (
                   <tr key={index}>
                       <td>{index + 1}</td>
                       <td>{history.playerNameOne}</td>
                       <td>{history.playerNameTwo}</td>
                       <td>{history.gameMode}</td>
                       <td>{history.winner}</td>
                   </tr> 
            ))
        }
        </>
    )
}

export default HistoryTableRows
