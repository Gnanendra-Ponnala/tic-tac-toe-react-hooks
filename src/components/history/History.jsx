import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import HistoryTable from "./HistoryTable"
import { GlobalCreateContext } from '../../GlobalContext';

const homeStyles = {
    backgroundColor: "#0d6efd",
    textDecoration: "none",
    color: "white",
    fontSize: "12px",
    borderRadius: "2px",
    padding: "2px",
    marginLeft: "2px"
}

const History = () => {
    const ticTocToeState = useContext(GlobalCreateContext).ticTacToe
    const [gameProps] = ticTocToeState.gameProps
    console.log(gameProps)
    return (
        <div style={{width: "700px", margin: "auto"}}>
            <h3 style={{textAlign: "center"}}>History <Link style={homeStyles} to='/'>Home</Link><Link style={homeStyles} to='/gameZone'>Game</Link></h3>
            {(gameProps.history.length > 0) ? <HistoryTable /> : <p style={{textAlign: "center"}}>No data found</p> }
        </div>
    )
}

export default History
