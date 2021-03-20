/* eslint-disable no-undef, no-unused-vars */ import React, {
  useState,
  Fragment
} from 'react';
import Card from './Card';
import '../css/MemoryGame.css';

//utitlities
const zipper = (arr, ...arrs) => {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
};

function labeler(keys, vals) {
  return keys.reduce(function (prev, val, i) {
    prev[val] = vals[i];
    return prev;
  }, {});
}

const shuffler = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.map((i) => i);
};

const Array8 = Array(8)
  .fill(0)
  .map((i, k) => k + 1);

//init values
const index0 = Array(16)
  .fill(0)
  .map((i, key) => key);
const value0 = shuffler([...Array8, ...Array8]);
const false0 = Array(16).fill(false);

const labels = ['index', 'value', 'flipped', 'solved'];

const labeled = zipper(index0, value0, false0, false0).map((i) =>
  labeler(labels, i)
);
const falses0 = Array(16).fill(false);
const MemoryGame2 = () => {
  //hooks
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  //tests

  const filtered = labeled.filter((i) => flipped.includes(i.index));
  const current = filtered.slice(-2).map((i) => i.value);

  const matches = current[0] === current[1] ? current : 'try again';
  //handler

  // const handleButton = (e, i) => {
  //   console.log("button was clicked");
  // };
  const handleFlip = function (e, i) {
    // console.log("clicked", e.target, i.i.index);
    setFlipped((flipped) => [...flipped.slice(-1), i.i.index]);
  };
  const handleMatch = function (e) {
    if (current[0] === current[1]) {
      setSolved((solved) => [...solved, ...flipped]);
    }

    // console.log("handleMatch");
  };

  return (
    <Fragment>
      <div className='memory-game-2'>
        <h3>game</h3>
        <p>click a square to flip</p>
        <div className='game'>
          <div className='board'>
            {labeled.map((i, key) => {
              return (
                <div className='card'>
                  <Card
                    i={i}
                    flipped={flipped}
                    current={current}
                    solved={solved}
                    handleMatch={handleMatch}
                    key={i.index}
                    handleFlip={handleFlip}
                  />
                </div>
              );
            })}
          </div>{' '}
          <br />
        </div>
        <br />
      </div>
    </Fragment>
  );
};

export default MemoryGame2;
