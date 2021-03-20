/* eslint-disable no-undef, no-unused-vars */ /* eslint-disable no-eval */ import React, {
  useState,
  Fragment,
  useEffect
} from 'react';
import '../css/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [screen, setScreen] = useState('input');

  //utilities
  const operators = ['+', '-', '*', '/', '.'];
  const checker = (string1) => {
    const adj = /\W\W/.test(string1);
    const start = /\W/.test(string1[0]);
    return !adj && !start;
  };
  //handler

  const handleScreen = (i) => {
    setScreen((screen) => i);
  };
  const showTopScreen = () => {
    return screen === 'input' ? input : result;
  };
  const showBottomScreen = () => {
    return screen === 'input' ? '' : input;
  };
  const handleInput = (value) => {
    const newString = input.concat(value);

    if (checker(newString) === true) {
      setInput((input) => newString);
    }
    // setScreen(screen => input);
    // setInput(input => input.concat(value));
    // console.log(checker(input.concat(value)));
  };
  const handleClear = (e) => {
    setInput('');
    // setScreen(screen => input);
  };
  const handleBackspace = (e) => {
    setInput(input.slice(0, -1));
    // setScreen(screen => input);
  };

  const handleResult = (e) => {
    setResult((result) => eval(input));
    // setScreen(screen => result);
  };

  return (
    <div className='calculator'>
      <div className='screen'>
        <p className='top-screen'> {showTopScreen()}</p>
        <p className='bottom-screen'> {showBottomScreen()}</p>
      </div>

      <div className='container'>
        <div
          onClick={(e) => {
            handleClear(e);
            handleScreen('input');
          }}
        >
          C
        </div>
        <div
          onClick={(e) => {
            handleBackspace(e);
            handleScreen('input');
          }}
        >{`<=`}</div>
        <div
          onClick={(e) => {
            handleInput('%');
            handleScreen('input');
          }}
          value='%'
        >
          %
        </div>
        <div
          onClick={(e) => {
            handleInput('/');
            handleScreen('input');
          }}
          value='/'
        >
          /
        </div>
        <div
          onClick={(e) => {
            handleInput('7');
            handleScreen('input');
          }}
          value='7'
        >
          7
        </div>
        <div
          onClick={(e) => {
            handleInput('8');
            handleScreen('input');
          }}
          value='8'
        >
          8
        </div>
        <div
          onClick={(e) => {
            handleInput('9');
            handleScreen('input');
          }}
          value='9'
        >
          9
        </div>
        <div
          onClick={(e) => {
            handleInput('*');
            handleScreen('input');
          }}
          value='*'
        >
          X
        </div>
        <div
          onClick={(e) => {
            handleInput('4');
            handleScreen('input');
          }}
          value='4'
        >
          4
        </div>
        <div
          onClick={(e) => {
            handleInput('5');
            handleScreen('input');
          }}
          value='5'
        >
          5
        </div>
        <div
          onClick={(e) => {
            handleInput('6');
            handleScreen('input');
          }}
          value='6'
        >
          6
        </div>
        <div
          onClick={(e) => {
            handleInput('-');
            handleScreen('input');
          }}
          value='-'
        >
          -
        </div>
        <div
          onClick={(e) => {
            handleInput('1');
            handleScreen('input');
          }}
          value='1'
        >
          1
        </div>
        <div
          onClick={(e) => {
            handleInput('2');
            handleScreen('input');
          }}
          value='2'
        >
          2
        </div>
        <div
          onClick={(e) => {
            handleInput('3');
            handleScreen('input');
          }}
          value='3'
        >
          3
        </div>
        <div
          onClick={(e) => {
            handleInput('+');
            handleScreen('input');
          }}
          value='+'
        >
          +
        </div>
        <div
          onClick={(e) => {
            handleInput('0');
            handleScreen('input');
          }}
          value='0'
        >
          0
        </div>
        <div
          onClick={(e) => {
            handleInput('.');
            handleScreen('input');
          }}
          value='.'
        >
          .
        </div>
        <div
          onClick={(e) => {
            handleResult(e);
            handleScreen('result');
          }}
          className='result'
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
