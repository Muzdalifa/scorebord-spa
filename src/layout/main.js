import React from 'react';
import ScoreTable from '../components/score-table';
import Header from '../components/header';
import './main.css';

const Main = () =>{
  
  return <div>
    <div className='header'>
      <Header />
    </div>

    <div className='body'>
      <ScoreTable />
    </div>

    <div className='footer'>

    </div>
  </div>
}

export default Main;
