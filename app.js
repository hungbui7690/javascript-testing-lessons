/*
  Encapsulate and Isolate Tests by building a JavaScript Testing Framework
  - right now, if we have cannot pass the first test > the 2nd test cannot be run
*/

const { sum, subtract } = require('./math')

let result, expected

// (2a)
test('Sum Test', () => {
  result = sum(3, 7)
  expected = 10

  expect(result).toBe(expected)
})

// (2b) now, if we run again, we can see both test
test('Subtract Test', () => {
  result = subtract(3, 7)
  expected = -4
  expect(result).toBe(expected)
})

// (1)
function test(title, callback) {
  try {
    callback()
    console.log(`✔ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
  }
}
