/* eslint-disable no-undef, no-unused-vars */ import React, {
  useState,
  Fragment
} from 'react';

import PropTypes from 'prop-types';

import '../css/MemoryGame.css';
// import '../css/App.min.css';

const Card = (i, flipped, solved, current, isSolved) => {
  //data

  const facing = () => {
    return i.flipped.includes(i.i.index) ||
      i.solved.includes(i.i.index) === true
      ? 'front'
      : 'back';
  };
  //hooks

  //handlers

  //conditional style
  const solvedStyle = () => {
    return i.solved.includes(i.i.index) === true ? '#D3D3D3' : 'white';
  };

  return (
    <div
      className='card'
      style={{
        backgroundColor: solvedStyle()
      }}
      onClick={(e) => {
        i.handleFlip(e, i);
        i.handleMatch(e);
      }}
    >
      {facing() === 'front' ? i.i.value : ''}
    </div>
  );
};

Card.propTypes = {
  flipped: PropTypes.array.isRequired,
  handleFlip: PropTypes.func.isRequired
};

export default Card;
