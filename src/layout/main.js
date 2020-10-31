import React from 'react';
import ScoreTable from '../components/score-table';
import Header from '../components/header';
import './main.css';
import AddPlayer from '../components/add-player';

const Main = () =>{
  
  return <div>
    <div className='header'>
      <Header />
    </div>

    <div className='body'>
      <AddPlayer />
      <ScoreTable />
    </div>

    <div className='footer'>

    </div>
  </div>
}

export default Main;
