import React, { useState } from 'react';
import './score-table.css';

const row = (record, index) =>{
  return <tr key={index}>
    <td>{record.name}</td>
    <td>{record.win}</td>
    <td>{record.loose}</td>
    <td>{index + 1}</td>
  </tr>
}

const compareRecords = ( recordA, recordB) =>{

  const scoreA = recordA.win - recordA.loose
  const scoreB = recordB.win - recordB.loose

  if(scoreA > scoreB)
    return 1;
  else if(scoreA < scoreB)
    return -1;
  else return 0;
}

/**
 * 
 * @param {{name: string, win:number, loose:number}[]} records 
 */
const addPlayer = (records)=>{

  const newPlayer = {
    name: document.getElementById('playerName').value,
    win: 0,
    loose: 0
  }

  records.push(newPlayer);
  return [...records]; //spread array: create new array object with new records
  
}

const ScoreTable = () =>{

  const [records, setRecords] = useState([]);

  return <div>
    <div>
      <input  type='text' id='playerName' placeholder='Enter Name'/>
      <button className='add-button' onClick={ ()=> setRecords( addPlayer(records) ) }>Add</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Win</th>
          <th>Loose</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {records.sort(compareRecords).reverse().map(row)}
      </tbody>
  </table>
 </div>

}
export default ScoreTable;