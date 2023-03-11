/*
  Support Async Tests with JavaScript Promises through async await P2
  - we need to turn test() into async await as well since the callback function returns promise

*/

const { sumAsync, subtractAsync } = require('./math')

let result, expected

test('Sum Test', async () => {
  result = await sumAsync(3, 7)
  expected = 10

  expect(result).toBe(expected)
})

test('Subtract Test', async () => {
  result = await subtractAsync(3, 7)
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
