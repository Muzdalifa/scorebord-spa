import React from 'react';
import './add-player.css';

const AddPlayer = ()=>{
  return <div>
    <input  type='text' placeholder='Enter Name'/>
    <button className='add-button'>Add</button>
  </div>
}

export default AddPlayer;