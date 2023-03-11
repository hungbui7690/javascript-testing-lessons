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

// (1) store to global object
global.test = test
global.expect = expect
