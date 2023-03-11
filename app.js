/*
  Provide Testing Helper Functions as Globals in JavaScript
  - the testing function we create is useful > so we will put it in a module to reuse

    (1) create globals.js
    (2) to run 
        > node --require .\globals.js .\app.js

*/

const { sumAsync, subtractAsync, sum, subtract } = require('./math')

let result, expected

test('Sum Test', () => {
  result = sum(3, 7)
  expected = 10

  expect(result).toBe(expected)
})

test('Subtract Test', () => {
  result = subtract(3, 7)
  expected = -4
  expect(result).toBe(expected)
})
