// https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
//https://codedaily.io/tutorials/72/Creating-a-Reusable-Window-Event-Listener-Hook-with-useEffect-and-useCallback?openLinerExtension=true

// https://www.udemy.com/course/web-projects-with-vanilla-javascript/
//hangman

/* eslint-disable no-undef, no-unused-vars */

import React, { Fragment, useState, useEffect, useCallback } from 'react';
// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable
import { svgData, randomWord, alphabets } from '../data/data';

import '../css/Hangman.css';
// import '../css/App.min.css';

const Hangman = () => {
  //hooks

  const [keyedLetter, setKeyedLetter] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [chosenWord, setChosenWord] = useState('');
  const [message, setMessage] = useState('');
  const [alphabet, setAlphabet] = useState('');

  //choose word

  const chooseWord = () => {
    setChosenWord(
      (chosenWord) => randomWord[Math.floor(Math.random() * randomWord.length)]
    );
    setCorrectLetters((correctLetters) => []);
    setWrongLetters((wrongLetters) => []);
  };

  useEffect(() => {
    chooseWord();
  }, []);

  const checkLetters = useCallback(
    (key) => {
      if (correctLetters.includes(key) || wrongLetters.includes(key)) {
        setMessage((message) => 'you have repeated this letter');
      }

      if (chosenWord.split('').includes(key) && !correctLetters.includes(key)) {
        setCorrectLetters((correctLetters) => [...correctLetters, key]);
        setMessage((message) => 'correct');
      }

      if (
        !chosenWord.split('').includes(key) &&
        !wrongLetters.includes(keyedLetter)
      ) {
        setWrongLetters((wrongLetters) => [...wrongLetters, key]);
        setMessage((message) => 'wrong, try again');
      }
    },
    [chosenWord, correctLetters, wrongLetters, keyedLetter]
  );

  const handleKeyPress = useCallback(
    (event) => {
      const { key, code } = event;
      if (code >= 'KeyA' && code <= 'KeyZ') {
        setKeyedLetter((keyedLetter) => key);
        checkLetters(key);
      }
    },
    [checkLetters]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  function alphabetButtonHandler(i) {
    setAlphabet((alphabet) => i);
    checkLetters(i);
  }

  const renderSvgMapped = `${svgData
    .slice(0, wrongLetters.length)
    .map(
      (i) =>
        `<${i.element} ${i.values.map(
          (value) => `${value[0]}="${value[1]}" `
        )}/>`
    )}`;

  const renderSvgTrimmed = renderSvgMapped.replace(/,/g, '');

  return (
    <Fragment>
      <div className='hangman'>
        <h3>hangman game</h3>
        <p>type a letter and guess the correct word</p>
        <strong>
          <p>chosed {chosenWord}</p>
        </strong>

        <div className='container'>
          <svg
            viewBox='0 0 180 230'
            dangerouslySetInnerHTML={{ __html: renderSvgTrimmed }}
          ></svg>

          <button
            onClick={() => {
              chooseWord();
            }}
          >
            generate a word
          </button>

          <div className='letters'>
            {[
              ...chosenWord.split('').map((i) => {
                return correctLetters.includes(i) ? i : '';
              })
            ].map((i, index) => (
              <div className='letter' key={index}>
                {i}
              </div>
            ))}
          </div>

          <div className='alphabets'>
            {alphabets.map((i, k) => (
              <button
                onClick={() => alphabetButtonHandler(i)}
                key={k}
                className={`alphabet  ${
                  correctLetters.includes(i)
                    ? 'correct'
                    : wrongLetters.includes(i)
                    ? 'wrong'
                    : ''
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hangman;
