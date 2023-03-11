/*
  Abstract Test Assertions into a JavaScript Assertion Library
  - we try to simulate expect function of testing library
*/

const { sum, subtract } = require('./math')

let result, expected

result = sum(3, 7)
expected = 10

expect(result).toBe(expected) // (2a)

/////////////////////////////////

result = subtract(3, 7)
expected = -1
expect(result).toBe(expected) // (2b) right now, we cannot see the result of this since 2a throws error

/////////////////////////////////

// (1)
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
  }
}
