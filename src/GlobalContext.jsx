import { createContext } from "react";
import TicTacToeContext from "./Services/TicTacToeContext";


import React from 'react'

export const GlobalCreateContext = createContext();

const GlobalContext = ({children}) => {

    const state = {
        ticTacToe: TicTacToeContext()
    }

    return (
        <GlobalCreateContext.Provider value={state} >
            {children}
        </GlobalCreateContext.Provider> 
    )
}

export default GlobalContext
