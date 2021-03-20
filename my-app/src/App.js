import React, { useState, Fragment } from 'react';

import './css/App.css';
import SideNav from './components/SideNav';
import HideNavOnScroll from './components/HideNavOnScroll';
import MemoryGame2 from './components/MemoryGame2';
import Calculator from './components/Calculator';
import Home from './components/Home';

import Hangman from './components/Hangman';
function App() {
  const [currentTab, setTab] = useState(0);

  const tab = [
    { name: 'home page', component: <Home /> },
    { name: 'animated left slider', component: <SideNav /> },
    { name: 'sticky top nav', component: <HideNavOnScroll /> },
    {
      name: 'flip card game',
      component: <MemoryGame2 />
    },
    { name: 'calculator', component: <Calculator /> },
    { name: 'hangman game', component: <Hangman /> }
  ];
  return (
    <Fragment>
      <div className='app'>
        <div className='app top-panel'>
          <h1 className='app title'>Components</h1>
          <div className='app tab-button-container'>
            {tab.map((item, index) => {
              return (
                <button
                  className='app button'
                  key={index}
                  onClick={() => setTab(index)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className='app empty'></div>
        <div className='app tabs'>{tab[currentTab].component}</div>
      </div>
    </Fragment>
  );
}

export default App;
