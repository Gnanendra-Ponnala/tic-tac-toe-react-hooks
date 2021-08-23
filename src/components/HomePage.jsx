import React from 'react'
import {Link} from 'react-router-dom'

const divStyle = {
    textAlign: 'center',
    marginBottom: "25px",
    color: "darkgreen",
    marginTop: "300px"
}

const gameZoneStyle = {
    textDecoration: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: "4px",
    backgroundColor: "orange"
}

const history = {
    textDecoration: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: "4px",
    backgroundColor: "darkred" ,
    marginLeft: "10px"
}


const HomePage = () => {
    return (
        <div style={divStyle}>
            <h1>Welcome to Tic Tac Toe Game Zone</h1>
            <Link style={gameZoneStyle} to="/gameZone">Game</Link>
            <Link style={history} to="/history">History</Link>
        </div>
    )
}

export default HomePage
