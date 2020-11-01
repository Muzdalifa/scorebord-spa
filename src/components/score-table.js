import React from 'react';
import './score-table.css';


const ScoreTable = () =>{


  const records = [
    {name: 'Makame', win:1, loose:2},
    {name: 'Muzda', win:2, loose:3},
    {name: 'Mahmud', win:1, loose:0},
    {name: 'Selma', win:2, loose:2},
    {name: 'Hamza', win:1, loose:1}
  ];

  const row = (record, index) =>{
    return <tr key={index}>
      <td>{record.name}</td>
      <td>{record.win}</td>
      <td>{record.loose}</td>
      <td></td>
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

  return <div>
    <div>
      <input  type='text' placeholder='Enter Name'/>
      <button className='add-button'>Add</button>
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