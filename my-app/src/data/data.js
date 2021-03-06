//Hangman.js


export const svgData = [
  {
    key: 1,
    part: "pole",
    element: "line",
    values: [
      ["x1", "60"],
      ["y1", "20"],
      ["x2", "140"],
      ["y2", "20"]
    ]
  },
  {
    key: 2,
    part: "pole",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "140"],
      ["y1", "20"],
      ["y2", "50"]
    ]
  },
  {
    key: 3,
    part: "pole",
    element: "line",
    values: [
      ["x1", "60"],
      ["x2", "60"],
      ["y1", "20"],
      ["y2", "230"]
    ]
  },
  {
    key: 4,
    part: "pole",
    element: "line",
    values: [
      ["x1", "20"],
      ["x2", "100"],
      ["y1", "230"],
      ["y2", "230"]
    ]
  },
  {
    key: 5,
    part: "head",
    element: "circle",
    values: [
      ["cx", "140"],
      ["cy", "70"],
      ["r", "20"]
    ]
  },
  {
    key: 6,
    part: "body",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "140"],
      ["y1", "90"],
      ["y2", "150"]
    ]
  },
  {
    key: 7,
    part: "body",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "100"],
      ["y1", "120"],
      ["y2", "100"]
    ]
  },
  {
    key: 8,
    part: "body",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "180"],
      ["y1", "120"],
      ["y2", "100"]
    ]
  },
  {
    key: 9,
    part: "body",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "100"],
      ["y1", "150"],
      ["y2", "180"]
    ]
  },
  {
    key: 10,
    part: "body",
    element: "line",
    values: [
      ["x1", "140"],
      ["x2", "180"],
      ["y1", "150"],
      ["y2", "180"]
    ]
  }
];


export const randomWord= ["application", "wizard", "programming"];

export const alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']