/*
  Support Async Tests with JavaScript Promises through async await P1
  - returns wrong test

*/

// (1)
const { sumAsync, subtractAsync } = require('./math')

let result, expected

// (2a) change to async/await
test('Sum Test', async () => {
  result = await sumAsync(3, 7)
  expected = 10

  expect(result).toBe(expected)
})

// (2b)
test('Subtract Test', async () => {
  result = await subtractAsync(3, 7)
  expected = -4
  expect(result).toBe(expected)
})

///////////////////////////////////////

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
