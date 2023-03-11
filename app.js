/*
  Throw an Error with a Simple Test in JavaScript 
*/

const sum = (a, b) => a - b // this logic is wrong
const subtract = (a, b) => a - b

/////////////////////////
// TEST
/////////////////////////
let result = sum(3, 7)
let expected = 10

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`)
