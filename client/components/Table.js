import React from 'react'; 

const Table = ({feelings}) => ( 
    <table>
        <tbody>
            <tr>
                <th>Date</th>
                <th>Target</th>
                <th>Notes</th>
            </tr>
            {feelings.map(feeling => { 
            return (
                <tr key={feeling.id}>
                    <td>{feeling.date}</td>
                    <td>{feeling.target}</td>
                    <td>{feeling.notes}</td>
                </tr>
            )})}
        </tbody>
    </table>
)

export default Table; 