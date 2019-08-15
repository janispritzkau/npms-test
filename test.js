const assert = require("assert")
const math = require(".")

//
// A few unit tests.........
//

// addition
assert.equal(math.add(1, 2), 3)

// subtractoin
assert.equal(math.sub(1, 2), -1)

// multiplication
assert.equal(math.mul(3, 3), 9)

assert.equal(math.mul(-1, -1), 1)
assert.equal(math.mul(1, -1), -1)

