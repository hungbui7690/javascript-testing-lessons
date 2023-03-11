/*
  Support Async Tests with JavaScript Promises through async await P3
  
*/

const { sumAsync, subtractAsync, sum, subtract } = require('./math')

let result, expected

// (***) use sync function again > everything is ok
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

///////////////////////////////////////

// (***)
async function test(title, callback) {
  try {
    await callback()
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
