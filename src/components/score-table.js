import React, { useState } from 'react';
import './score-table.css';

const row = (record, index, records, setRecords) =>{

  return <tr key={index}>
    <td id='name'>{record.name}</td>
    <td id='win'>{record.win}</td>
    <td id='loose'>{record.loose}</td>
    <td>{index + 1}</td>
    <td><button onClick={ ()=> setRecords( addWin(records,index) )}>+</button></td>
    <td><button>-</button></td>
    <td><button onClick={ ()=> setRecords( deletePlayer( records, index ) )}>x</button></td>   
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
 * Function to add player to scoreboard
 * @param {{name: string, win:number, loose:number}[]} records 
 */
const addPlayer = (records)=>{

  const newPlayer = {
    name: document.getElementById('playerName').value,
    win: 0,
    loose: 0
  }

  records.push(newPlayer);
  return [...records]; //spread array: create new array object with new records(update array)
  
}

//Function to delete player to scoreboard
const deletePlayer = (records, index)=>{

  records.splice(index,1);
  return [...records];

}

const addWin=(records, index)=>{

  records[index].win = Number(records[index].win) + 1;
  console.log(records[index]);
  return [...records];

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
          <th>Up</th>
          <th>Down</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {records.sort(compareRecords).reverse().map( (record, index, records)=>row( record, index, records, setRecords))}
      </tbody>
  </table>
 </div>

}
export default ScoreTable;