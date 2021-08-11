import React, {useContext} from 'react'
import TicTacToeGame from './TicTacToeGame'
import { GlobalCreateContext } from '../GlobalContext';

function StartGameComponent() {
    const ticTocToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps, setGameProps] = ticTocToeState.gameProps
    const handleStartGame = ticTocToeState.handleStartGame
    const gotoHomeComponent = ticTocToeState.gotoHomeComponent
    const handleNewGame = ticTocToeState.handleNewGame

    const handleUpdatePlayerDetails = (e, player) => {
        let playerDetails = {...gameProps};
        playerDetails.gameDetails[player].playerName = e.target.value;
        setGameProps(playerDetails);
    }
    
    return (
        <div className="container">
          <div className="col-sm-12 text-center">
              <h1 style={{marginTop: "50px"}}>Tic-Tac-Toe</h1>
                <input type="text" className="form-control" name="PlayerOne" placeholder="Player Name 1" value={gameProps.gameDetails[0].playerName} autoComplete="off" style={{display: (gameProps.displayGameMode) ? "inline-block" : "none", width: "250px", marginRight: "10px"}} onChange={(e) => handleUpdatePlayerDetails(e,0)} />
              
                <input type="text" className="form-control" name="PlayerTwo" placeholder="Player Name 2" value={gameProps.gameDetails[1].playerName} autoComplete="off" style={{display: (gameProps.displayGameMode) ? "inline-block" : "none", width: "250px", marginRight: "10px"}} onChange={(e) => handleUpdatePlayerDetails(e,1)} />  
              
                <select className="form-control" style={{width: "150px", marginRight: "10px", display: (gameProps.displayGameMode) ? "inline-block" : "none"}} onChange={e => setGameProps({...gameProps, gameMode: e.target.value})}>
                    <option value="3">3*3</option>
                    <option value="4">4*4</option>
                </select>
              
                {
                (!gameProps.gotoHome) 
                ? 
                <button type="button" className="btn btn-sm btn-primary" style={{fontWeight: "700", marginTop: "-6px", height: "38px", backgroundColor: "#2a792a", borderColor: "#2a792a"}} onClick={handleStartGame}>Start Game</button> 
                : 
                <>
                    <button type="button" className="btn btn-sm btn-primary" style={{fontWeight: "700", marginTop: "-6px", paddingBottom: "6px", backgroundColor:"darkkhaki", borderColor:"darkkhaki"}} onClick={gotoHomeComponent}>Go to Home</button>
                    <button type="button" className="btn btn-sm btn-primary" style={{fontWeight: "700", marginTop: "-6px", marginLeft: "10px", paddingBottom: "6px", backgroundColor: "darkcyan", borderColor: "darkcyan"}} onClick={handleNewGame}>Start New Game</button>
                </>    
                }
              
          </div>
          {
          (gameProps.gotoHome) && <TicTacToeGame /> 
            }
          
        </div>
    )
}

export default StartGameComponent
