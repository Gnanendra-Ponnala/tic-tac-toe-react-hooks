import React from 'react'
import HistoryTableRows from './HistoryTableRows'

const HistoryTable = () => {
    return (
        <table className="table table-response">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Player One</th>
                    <th>Player Two</th>
                    <th>Game Mode</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
                <HistoryTableRows />
            </tbody>
            <tfoot></tfoot>
            </table>
    )
}

export default HistoryTable
