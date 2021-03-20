import React, { Fragment, useState } from 'react';

import '../css/SideNav.css';
// import '../css/App.min.css';

const SideNav = () => {
  const [currentProperty, setProperty] = useState('sideNav initial');

  const navListRender = (navListItems, ListName) => {
    return (
      <Fragment>
        <li className='header'>
          <h3>{ListName}</h3>
        </li>
        {navListItems.map((item, key) => {
          return (
            <li key={key} style={{ padding: 0 }}>
              <button>{item}</button>
            </li>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div className='side-nav'>
      <button
        className='sideNav click'
        onClick={() =>
          setProperty(
            currentProperty === 'sideNav initial'
              ? 'sideNav trigger'
              : 'sideNav initial'
          )
        }
      >
        {currentProperty}
      </button>
      <ul className={`${currentProperty} list`}>
        {navListRender(
          ['apple', 'orange', 'banane', 'mango', 'papaya', 'pineapple'],
          'fruits'
        )}
        {navListRender(['tangoh', 'kailan', 'chyesim'], 'veggie')}
        {navListRender(['coriander', 'spring onion', 'chilli padi'], 'garnish')}
        {navListRender(['ginger', 'garlic', 'salted fish'], 'spices')}
        {navListRender(['soy sauce', 'fish sauce', 'oyster sauce'], 'sauces')}
        {navListRender(
          ['shiitake mushroom', 'ikan bilis', 'soy beans', 'kombu'],
          'soup stock'
        )}
        {navListRender(['prawn', 'fish', 'chicken', 'pork'], 'protein')}
      </ul>
    </div>
  );
};

export default SideNav;
