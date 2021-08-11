import {useContext} from 'react'
import {GlobalCreateContext} from '../GlobalContext'
import GameColumn from '../components/GameColumn'

const GameRow = ({columnNoStart}) => {
    const ticTocToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps] = ticTocToeState.gameProps
    const ticTacToeRows = []
    
    for (let i = 0; i < gameProps.gameMode; i++){
        columnNoStart = +columnNoStart + 1
        ticTacToeRows.push(<GameColumn columnNoStart={columnNoStart} key={i} />)
    }
    return (
        <tr>
            {ticTacToeRows}
        </tr>
    )
}

export default GameRow
