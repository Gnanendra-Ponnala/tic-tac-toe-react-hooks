import {useContext} from 'react'
import { GlobalCreateContext } from '../GlobalContext';
import GameRow from './GameRow'

let headingStyle = {
    textAlign: 'center',
    fontSize: "26px",
    fontWeight: "700"
}

const TicTacToeGame = () => {
    const ticTacToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps] = ticTacToeState.gameProps
    let ticTocToeRowsColumns = [];
    const playerName = gameProps.gameDetails[gameProps.activePlayer].playerName
    const color = gameProps.gameDetails[gameProps.activePlayer].color
    
    for (let i = 0; i < gameProps.gameMode; i++) {
        ticTocToeRowsColumns.push(<GameRow key={i} columnNoStart={i * gameProps.gameMode} />)
    }

    return (
        <div style={{width: "500px", margin: "auto", marginTop: "25px", textAlign: "center"}}>
            {(gameProps.winner === '') ? <><p style={headingStyle}>Game Start</p><h4 style={{color: "grey"}}>Player: <span style={{backgroundColor: color, color: "white", padding: "0px 10px"}}>{playerName}</span></h4></> : <><p style={headingStyle}>Game Over</p><h4 >Winner: <span style={{backgroundColor: color, color: "white", padding: "0px 10px"}}>{gameProps.winner}</span></h4></>}
            <table className="ticTacToe" style={{margin: "auto"}}>
               <tbody>
                   {ticTocToeRowsColumns}
                </tbody>           
            </table>
        </div>
    )
}

export default TicTacToeGame