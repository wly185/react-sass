import React, { useState, Fragment, useRef, useEffect } from 'react';

import './css/App.css';
import Navigation from './components/Navigation';
import SideNav from './components/SideNav';
import HideNavOnScroll from './components/HideNavOnScroll';
import MemoryGame2 from './components/MemoryGame2';
import Calculator from './components/Calculator';
import Home from './components/Home';

import Hangman from './components/Hangman';
function App() {
  const [currentTab, setTab] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  const tabs = [
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

  const clickHandler = (index) => {
    setTab(index);
  };

  const getHeight = (height) => {
    setNavHeight(height);
  };
  return (
    <Fragment>
      <div className='app'>
        <Navigation
          tabs={tabs}
          clickHandler={clickHandler}
          getHeight={getHeight}
        />
        <div className='app tabs' style={{ marginTop: `${navHeight}px` }}>
          {tabs[currentTab].component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
