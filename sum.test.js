const { expect } = require('@jest/globals')
const sum = require('./sum')

test('properly add two numbers', () => {
    //make sure that expected result happens
    expect(sum(1, 2)).toBe(3)
})