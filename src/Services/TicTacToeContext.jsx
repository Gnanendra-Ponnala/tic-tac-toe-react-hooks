import {useState, useEffect} from 'react'
import CheckWinner from '../utils/CheckWinner'

const TicTacToeContext = () => {
    const initialValues = {
        gotoHome: false,
        gameMode: 3,
        displayGameMode: true,
        activePlayer: 0,
        gameDetails: [{playerName: "", color: "#562971cf", selectedList: []}, {playerName: "", color: "#d44351", selectedList: []}],
        winner: "", 
        disabledGame: false
    }

    const [gameProps,setGameProps] = useState(initialValues)

    const  handleStartGame = (props) => {
        if(gameProps.gameDetails[0].playerName === '' || gameProps.gameDetails[1].playerName === '')
        {
            alert("Player name required")
        }else
        {
            setGameProps({...gameProps, displayGameMode: !gameProps.displayGameMode, gotoHome: !gameProps.gotoHome, activePlayer: 0});
        }
        
    }

    const gotoHomeComponent = () => {
        setGameProps(initialValues)
    }

    useEffect(() => {
        const gameDetails = gameProps.gameDetails
        const playerOneSelected = gameDetails[0].selectedList
        const playerTwoSelected = gameDetails[1].selectedList
        const gameMode = +gameProps.gameMode

        const updateWinnerData = (id) => {
            let playerInitialObject = {...gameProps}
            let gameDetails = playerInitialObject.gameDetails
            gameDetails[0].selectedList = []
            gameDetails[1].selectedList = []
            playerInitialObject = {...playerInitialObject, activePlayer: 0, winner: (id < 2) ? gameDetails[id].playerName : "Match Draw", disabledGame: true}
            setGameProps(playerInitialObject)
        }

        if(playerOneSelected.length >= gameMode)
        {
            (CheckWinner(playerOneSelected, gameMode)) && updateWinnerData(0)
        }

        if(playerTwoSelected.length >= gameMode)
        {
            (CheckWinner(playerTwoSelected, gameMode)) && updateWinnerData(1)
            
        }

        if([...playerOneSelected, ...playerTwoSelected].length >= (gameMode * gameMode))
        {
            updateWinnerData(2)
        }

        console.log(gameProps)

    }, [gameProps])

    const handleNewGame = () => {
        let playerInitialObject = {...gameProps}
        let gameDetails = playerInitialObject.gameDetails
        gameDetails[0].selectedList = []
        gameDetails[1].selectedList = []
        playerInitialObject = {...playerInitialObject, winner: "", activePlayer: 0, disabledGame: false}
        setGameProps(playerInitialObject)
    }

    return {
        initialValues,
        handleStartGame,
        gotoHomeComponent,
        handleNewGame,
        gameProps: [gameProps, setGameProps]
    }
}

export default TicTacToeContext
