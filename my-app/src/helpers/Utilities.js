import React from "react";

const Array8 = Array(8)
  .fill(0)
  .map((item, i) => i + 1);
const Array16 = [...Array8, ...Array8];

const shuffler = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.map(i => i);
};

//zip multiple arrays
const zipper = (arr, ...arrs) => {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
};

//label array item

function labeler(keys, vals) {
  return keys.reduce(function(prev, val, i) {
    prev[val] = vals[i];
    return prev;
  }, {});
}

const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

//value is a state from the component
//this is to be used outside of the component
//for showing the previously logged value of a dynamic value

const matcher = (arr1, arr2) => {
  return arr1.filter(element => arr2.includes(element));
};
//returns overlap items
//can use for (arr,str)

const includes = (arr, val) => {
  return arr.includes(val);
};
//returns a boolean

const every = (arr, cond) => {
  return arr.every(cond);
};
//returns boolean
//checks if every value satisfies the condition

const matcher2 = (str, arr) => {
  if (arr.indexOf(str) !== -1) {
    return str;
  }
};

const uniquer = arr => {
  return [...new Set(arr)];
};
//removes all duplicates

const getOccurences = string => {
  return string.split("").reduce((accumulator, currentValue) => {
    !accumulator[currentValue]
      ? (accumulator[currentValue] = 1)
      : accumulator[currentValue]++;
    return accumulator;
  }, {});
};
//freq count, but additional line for split string

const fcountFreq = arr => {
  const arr2 = arr.reduce(function(acc, curr) {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  //{[k]:v,[k]:v,...}
  const arr3 = Object.entries(arr2);
  // [[k,v],[k,v],...]

  const arr4 = arr3.map(([k, v]) => {
    return { [k]: v };
  });
  //[{[k]:v},{[k]:v},...]
  return arr4;
};

const useMapOnObject = obj => {
  Object.entries(obj).map(([key, value]) => {
    console.log(key, value);
  });
};

export { zipper, shuffler, labeler };
