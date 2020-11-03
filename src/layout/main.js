import React from 'react';
import ScoreTable from '../components/score-table';
import Header from '../components/header';
import Footer from '../components/footer';
import './main.css';

const Main = () =>{
  
  return <div className='all'>
    <div className='header'>
      <Header />
    </div>

    <div className='body'>
      <ScoreTable />
    </div>

    <div className='footer'>
      <Footer />
    </div>
  </div>
}

export default Main;
